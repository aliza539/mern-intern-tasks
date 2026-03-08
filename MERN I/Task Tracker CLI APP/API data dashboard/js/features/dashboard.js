import { fetchUsers } from "../api/userservices.js";
import { fetchPosts } from "../api/postservices.js";
import { fetchCommentsByPost } from "../api/commentservice.js";
import { setCache, hasCache, getCache } from "../core/cache.js";
import { POSTS_PER_PAGE } from "../core/config.js";

const dashboard = document.getElementById("dashboard");

let currentPage = 1;
let allUsers = [];
let allPosts = [];

export async function loadDashboard() {
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchPosts()
  ]);

  const [usersResult, postsResult] = results;

  if (usersResult.status === "fulfilled") {
    allUsers = usersResult.value;
  }

  if (postsResult.status === "fulfilled") {
    allPosts = postsResult.value;
  }

  renderUsers();
}

async function renderUsers(filter = "") {
  dashboard.innerHTML = "";

  const filteredUsers = allUsers.filter(user =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  for (const user of filteredUsers) {
    const userDiv = document.createElement("div");
    userDiv.className = "user";
    userDiv.innerHTML = `<h3>${user.name}</h3>`;

    const userPosts = allPosts
      .filter(post => post.userId === user.id)
      .slice(0, currentPage * POSTS_PER_PAGE);

    for (const post of userPosts) {
      const postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = `<strong>${post.title}</strong>`;

      // WeakMap caching per post object
      if (!hasCache(post)) {
        const comments = await fetchCommentsByPost(post.id);
        setCache(post, comments);
      }

      const comments = getCache(post);

      comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.textContent = comment.body;
        postDiv.appendChild(commentDiv);
      });

      userDiv.appendChild(postDiv);
    }

    dashboard.appendChild(userDiv);
  }
}

export function searchUsers(query) {
  renderUsers(query);
}

export function loadMore() {
  currentPage++;
  renderUsers();
}