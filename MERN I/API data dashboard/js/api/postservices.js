import { BASE_URL } from "../core/config.js";
import { fetchuser } from "./fetchuser.js";

export async function fetchPosts() {
  return await fetchuser(`${BASE_URL}/posts`);
}

export async function fetchPostsByUser(userId) {
  return await fetchuser(`${BASE_URL}/posts?userId=${userId}`);
}