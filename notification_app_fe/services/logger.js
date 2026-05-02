import axios from "axios";

const LOG_API = "http://20.207.122.201/evaluation-service/logs";

export async function logEvent(stack, level, pkg, message, token) {
  try {
    await axios.post(
      LOG_API,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  } catch {
    // silent
  }
}