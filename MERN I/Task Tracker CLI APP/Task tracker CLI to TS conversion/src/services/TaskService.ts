import { Priority } from "../models/Task.js";
import type { Task } from "../models/Task.js";
import { loadTasks, saveTasks } from "../utils/fileHandler.js";
import { findByProp } from "../utils/fileHandler.js";
import chalk from "chalk";

export function addTask(
  description: string,
  priority: Priority = Priority.MEDIUM
): void {
  const tasks = loadTasks();

  const newTask: Task = {
    id: tasks.length + 1,
    description,
    status: "to-do",
    priority,
    createdAt: new Date(),
    updatedAt: new Date()
  };

  tasks.push(newTask);
  saveTasks(tasks);
  console.log(chalk.green("Task added!"));
}

export function listTasks(): void {
  const tasks = loadTasks();
  
  if (tasks.length === 0) {
    console.log(chalk.yellow("No tasks found"));
    return;
  }

  console.log(chalk.blue("\n Tasks \n"));
  tasks.forEach((task) => {
    const statusIcon = task.status === "done" ? "✓" : "○";
    const statusColor = task.status === "done" ? chalk.green : chalk.yellow;
    const priorityColor = 
      task.priority === "high" ? chalk.red :
      task.priority === "medium" ? chalk.yellow :
      chalk.blue;

    console.log(
      `${statusIcon} [${task.id}] ${task.description}`
    );
    console.log(
      `   Status: ${statusColor(task.status)} | Priority: ${priorityColor(task.priority)}`
    );
  });
  console.log();
}

export function deleteTask(id: number): void {
  const tasks = loadTasks();
  const index = tasks.findIndex((task) => task.id === id);

  if (index === -1) {
    console.log(chalk.red("Task not found"));
    return;
  }

  tasks.splice(index, 1);
  saveTasks(tasks);
  console.log(chalk.green("Task deleted!"));
}

export function updateTask(id: number, newDescription: string): void {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    console.log(chalk.red("Task not found"));
    return;
  }

  task.description = newDescription;
  task.updatedAt = new Date();
  saveTasks(tasks);
  console.log(chalk.green("Task updated!"));
}

export function markTaskDone(id: number): void {
  const tasks = loadTasks();
  const task = tasks.find((t) => t.id === id);

  if (!task) {
    console.log(chalk.red("Task not found"));
    return;
  }

  task.status = task.status === "done" ? "to-do" : "done";
  task.updatedAt = new Date();
  saveTasks(tasks);
  console.log(chalk.green(`Task marked as ${task.status}!`));
}

export function sortTasks(
  key: "priority" | "createdAt" | "description" = "priority",
  order: "asc" | "desc" = "asc"
): void {
  const tasks = loadTasks();

  const sorted = [...tasks].sort((a, b) => {
    let aCompare: string | number | Date = a[key];
    let bCompare: string | number | Date = b[key];

    if (key === "priority") {
      const priorityOrder = { low: 1, medium: 2, high: 3 };
      aCompare = priorityOrder[a.priority as "low" | "medium" | "high"];
      bCompare = priorityOrder[b.priority as "low" | "medium" | "high"];
    }

    if (order === "asc") {
      return aCompare > bCompare ? 1 : -1;
    } else {
      return aCompare < bCompare ? 1 : -1;
    }
  });

  if (sorted.length === 0) {
    console.log(chalk.yellow("No tasks to sort"));
    return;
  }

  console.log(chalk.blue(`\n Tasks (sorted by ${key} - ${order}) \n`));
  sorted.forEach((task) => {
    const statusIcon = task.status === "done" ? "done" : "to-do";
    const priorityColor = 
      task.priority === "high" ? chalk.red :
      task.priority === "medium" ? chalk.yellow :
      chalk.blue;

    console.log(
      `${statusIcon} [${task.id}] ${task.description}`
    );
    console.log(
      `   Status: ${task.status} | Priority: ${priorityColor(task.priority)}`
    );
  });
  console.log();
}

export function searchByPriority(priority: string): void {
  const tasks = loadTasks();
  const result = findByProp<Task>(tasks, "priority", priority);

  if (result.length === 0) {
    console.log(chalk.yellow(`No tasks with priority: ${priority}`));
    return;
  }

  console.log(chalk.blue(`\n Tasks with priority: ${priority} \n`));
  result.forEach((task) => {
    const statusIcon = task.status === "done" ? "✓" : "○";
    console.log(
      `${statusIcon} [${task.id}] ${task.description} (${task.status})`
    );
  });
  console.log();
}

export function getStats(): void {
  const tasks = loadTasks();

  if (tasks.length === 0) {
    console.log(chalk.yellow("No tasks yet"));
    return;
  }

  const done = tasks.filter((t) => t.status === "done").length;
  const toDo = tasks.filter((t) => t.status === "to-do").length;
  const highPriority = tasks.filter((t) => t.priority === "high").length;

  console.log(chalk.blue("\n Task Statistics \n"));
  console.log(`Total Tasks: ${chalk.cyan(tasks.length)}`);
  console.log(`Done: ${chalk.green(done)}`);
  console.log(`To-Do: ${chalk.yellow(toDo)}`);
  console.log(`High Priority: ${chalk.red(highPriority)}`);
  console.log();
}