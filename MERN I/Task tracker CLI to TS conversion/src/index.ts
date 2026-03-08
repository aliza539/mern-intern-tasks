#!/usr/bin/env node
import { showMenu } from "./utils/menu.js";
import {
  addTask,
  deleteTask,
  updateTask,
  markTaskDone,
  listTasks,
  sortTasks,
  searchByPriority,
  getStats
} from "./services/TaskService.js";
import { Priority } from "./models/Task.js";
import chalk from "chalk";

console.log(chalk.green("Task Tracker CLI"));

const [command, ...args] = process.argv.slice(2);

switch (command) {
  case "add":
    const description = args[0];
    const priority = (args[1] || "medium") as Priority;
    if (!description) {
      console.log(chalk.red("Error: Please provide a task description"));
      showMenu();
    } else {
      addTask(description, priority);
    }
    break;

  case "list":
    listTasks();
    break;

  case "delete":
    const deleteId = parseInt(args[0]);
    if (!deleteId || isNaN(deleteId)) {
      console.log(chalk.red("Error: Please provide a valid task ID"));
      showMenu();
    } else {
      deleteTask(deleteId);
    }
    break;

  case "update":
    const updateId = parseInt(args[0]);
    const newDesc = args[1];
    if (!updateId || isNaN(updateId) || !newDesc) {
      console.log(chalk.red("Error: Please provide a task ID and new description"));
      showMenu();
    } else {
      updateTask(updateId, newDesc);
    }
    break;

  case "mark":
    const markId = parseInt(args[0]);
    if (!markId || isNaN(markId)) {
      console.log(chalk.red("Error: Please provide a valid task ID"));
      showMenu();
    } else {
      markTaskDone(markId);
    }
    break;

  case "sort":
    const sortKey = (args[0] || "priority") as "priority" | "createdAt" | "description";
    const sortOrder = (args[1] || "asc") as "asc" | "desc";
    if (!["priority", "createdAt", "description"].includes(sortKey)) {
      console.log(chalk.red("Error: Invalid sort key. Use: priority, createdAt, or description"));
      showMenu();
    } else if (!["asc", "desc"].includes(sortOrder)) {
      console.log(chalk.red("Error: Invalid sort order. Use: asc or desc"));
      showMenu();
    } else {
      sortTasks(sortKey, sortOrder);
    }
    break;

  case "search":
    const searchType = args[0];
    const searchValue = args[1];
    if (searchType === "priority") {
      if (!searchValue) {
        console.log(chalk.red("Error: Please provide a priority value"));
        showMenu();
      } else {
        searchByPriority(searchValue);
      }
    } else {
      console.log(chalk.red("Error: Search type not supported yet"));
      showMenu();
    }
    break;

  case "stats":
    getStats();
    break;

  case "status":
    getStats();
    break;

  case "help":
    showMenu();
    break;

  default:
    console.log(chalk.red("Unknown command"));
    showMenu();
}