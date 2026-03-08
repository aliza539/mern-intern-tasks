/**
 * Create task list item
 * @param {Object} task
 * @returns {HTMLLIElement}
 */

export function createTaskElement(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id;

  li.innerHTML = `
    <span>${task.text} (${task.email})</span>
    <div>
      <button class="edit">Edit</button>
      <button class="delete">Delete</button>
    </div>
  `;

  return li;
}