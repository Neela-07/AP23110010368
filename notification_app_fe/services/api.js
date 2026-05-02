export async function fetchNotifications() {
  try {
    const res = await fetch("/api/notifications", {
      method: "GET",
    });

    const data = await res.json();

    if (!res.ok) {
      return {
        notifications: [],
        error: data?.error || data?.message || `Request failed with status ${res.status}`,
        status: res.status,
      };
    }

    return { ...data, status: res.status };
  } catch (error) {
    console.log("API ERROR:", error);
    return {
      notifications: [],
      error: "Network error while fetching notifications.",
      status: 500,
    };
  }
}