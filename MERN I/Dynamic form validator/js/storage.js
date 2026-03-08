const STORAGE_KEY = "tasks";

/**
 * Save tasks to localStorage
 * @param {Array} tasks
 */
export function saveTasks(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

/**
 * Load tasks from localStorage
 * @returns {Array}
 */
export function loadTasks() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}