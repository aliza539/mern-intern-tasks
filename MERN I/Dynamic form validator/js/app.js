import { tasks, setTasks } from "./state.js";
import { saveTasks, loadTasks } from "./storage.js";
import { validateEmail, validateText } from "./validators.js";
import { debounce } from "./debounce.js";
import { throttle } from "./throttle.js";
import { createTaskElement } from "./ui.js";

const form = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const emailInput = document.getElementById("emailInput");
const taskList = document.getElementById("taskList");

// Initialize tasks from storage
setTasks(loadTasks());
tasks.forEach(task => {
  taskList.append(createTaskElement(task));
});

// Form submission handler
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!validateText(taskInput.value) || !validateEmail(emailInput.value)) {
    return;
  }

  const newTask = {
    id: Date.now().toString(),
    text: taskInput.value,
    email: emailInput.value
  };

  tasks.push(newTask);
  saveTasks(tasks);
  taskList.append(createTaskElement(newTask));

  form.reset();
});

// Event delegation for edit and delete buttons
taskList.addEventListener("click", (e) => {
  const li = e.target.closest("li");
  if (!li) return;

  const id = li.dataset.id;

  if (e.target.classList.contains("delete")) {
    const index = tasks.findIndex(t => t.id === id);
    tasks.splice(index, 1);
    saveTasks(tasks);
    li.remove();
  }

  if (e.target.classList.contains("edit")) {
    const task = tasks.find(t => t.id === id);
    const newText = prompt("Edit task:", task.text);
    if (newText && validateText(newText)) {
      task.text = newText;
      saveTasks(tasks);
      li.querySelector("span").textContent =
        `${task.text} (${task.email})`;
    }
  }
});

// Input validation with debounce
taskInput.addEventListener(
  "input",
  debounce(() => {
    if (!validateText(taskInput.value)) {
      taskInput.classList.add("invalid");
    } else {
      taskInput.classList.remove("invalid");
    }
  }, 500)
);

emailInput.addEventListener(
  "input",
  debounce(() => {
    if (!validateEmail(emailInput.value)) {
      emailInput.classList.add("invalid");
    } else {
      emailInput.classList.remove("invalid");
    }
  }, 500)
);
// Responsive design with throttle
window.addEventListener(
  "resize",
  throttle(() => {
    if (window.innerWidth < 500) {
      document.body.classList.add("mobile");
    } else {
      document.body.classList.remove("mobile");
    }
  }, 300)
);