import { ApiError, NetworkError, NotFoundError } from "../core/error.js";

export async function fetchuser(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new NotFoundError("Resource not found");
      }
      throw new ApiError("API Error", response.status);
    }

    return await response.json();
  } catch (error) {
    if (error instanceof ApiError || error instanceof NotFoundError) {
      throw error;
    }
    throw new NetworkError("Network request failed");
  }
}