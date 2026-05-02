const NOTIFICATIONS_API = "http://20.207.122.201/evaluation-service/notifications";
const AUTH_API = "http://20.207.122.201/evaluation-service/auth";

const AUTH_PAYLOAD = {
  email: "susmithareddy_udumula@srmap.edu.in",
  name: "udumula neela lohitha susmitha reddy",
  rollNo: "ap23110010368",
  accessCode: "QkbpxH",
  clientID: "3ade398c-cd4a-4b2c-b3e8-66e1cc442dd3",
  clientSecret: "hVcQacBkaRjKhPWr",
};

function normalizeNotifications(data) {
  return Array.isArray(data)
    ? data
    : Array.isArray(data?.notifications)
      ? data.notifications
      : Array.isArray(data?.data)
        ? data.data
        : [];
}

async function readErrorMessage(response) {
  try {
    const body = await response.json();
    return body?.message || body?.error || `Upstream request failed with status ${response.status}`;
  } catch {
    return `Upstream request failed with status ${response.status}`;
  }
}

async function fetchAccessToken() {
  const response = await fetch(AUTH_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(AUTH_PAYLOAD),
    cache: "no-store",
  });

  if (!response.ok) {
    const message = await readErrorMessage(response);
    throw new Error(message);
  }

  const data = await response.json();
  const token = data?.access_token?.trim();

  if (!token) {
    throw new Error("Auth API did not return an access token.");
  }

  return `Bearer ${token}`;
}

export async function GET(request) {
  const authorization = request.headers.get("authorization")?.trim() ?? "";

  let authCandidates = [];

  if (authorization) {
    const rawToken = authorization.startsWith("Bearer ")
      ? authorization.slice(7).trim()
      : authorization;

    authCandidates = Array.from(
      new Set([authorization, `Bearer ${rawToken}`, rawToken])
    ).filter(Boolean);
  } else {
    try {
      const freshAuthHeader = await fetchAccessToken();
      const rawToken = freshAuthHeader.slice(7);
      authCandidates = [freshAuthHeader, rawToken];
    } catch (error) {
      return Response.json(
        {
          notifications: [],
          error: error instanceof Error ? error.message : "Failed to authenticate.",
        },
        { status: 401 }
      );
    }
  }

  let lastStatus = 502;
  let lastError = "Unable to fetch notifications from upstream service.";

  try {
    for (const authValue of authCandidates) {
      const response = await fetch(NOTIFICATIONS_API, {
        headers: {
          Authorization: authValue,
        },
        cache: "no-store",
      });

      if (response.ok) {
        const data = await response.json();
        return Response.json({ notifications: normalizeNotifications(data) });
      }

      lastStatus = response.status;
      lastError = await readErrorMessage(response);
    }

    return Response.json(
      {
        notifications: [],
        error: lastError,
      },
      { status: lastStatus === 401 ? 401 : 502 }
    );
  } catch {
    return Response.json(
      {
        notifications: [],
        error: "Notification service is unavailable. Please try again.",
      },
      { status: 500 }
    );
  }
}
