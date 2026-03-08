import { BASE_URL } from "../core/config.js";
import { fetchuser } from "./fetchuser.js";

export async function fetchUsers() {
  return await fetchuser(`${BASE_URL}/users`);
}