import { throttle } from "../utils/throttle.js";
import { loadMore } from "./dashboard.js";

export function initInfiniteScroll() {
  const throttledScroll = throttle(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 50
    ) {
      loadMore();
    }
  }, 1000);

  window.addEventListener("scroll", throttledScroll);
}