import { loadDashboard } from "./features/dashboard.js";
import { initSearch } from "./features/search.js";
import { initInfiniteScroll } from "./features/infinitescroll.js";

async function initApp() {
  try {
    await loadDashboard();
    initSearch();
    initInfiniteScroll();
  } catch (error) {
    console.error("Application failed to start:", error);
  }
}

initApp();