import { debounce } from "../utils/debounce.js";
import { searchUsers } from "./dashboard.js";

export function initSearch() {
  const input = document.getElementById("searchInput");

  const debouncedSearch = debounce((e) => {
    searchUsers(e.target.value);
  }, 500);

  input.addEventListener("input", debouncedSearch);
}