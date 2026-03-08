import { BASE_URL } from "../core/config.js";
import { fetchuser } from "./fetchuser.js";

export async function fetchCommentsByPost(postId) {
  return await fetchuser(`${BASE_URL}/comments?postId=${postId}`);
}