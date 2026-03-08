import fs from "fs";
import type { Task } from "../models/Task.js";

const FILE_PATH = "./data/tasks.json";

export function loadTasks(): Task[] {
  if (!fs.existsSync(FILE_PATH)) return [];
  const data = fs.readFileSync(FILE_PATH, "utf-8");
  return JSON.parse(data);
}

export function saveTasks(tasks: Task[]): void {
  fs.writeFileSync(FILE_PATH, JSON.stringify(tasks, null, 2));
}

export function findByProp<T>(
  items: T[],
  key: keyof T,
  value: unknown
): T[] {
  return items.filter(item => item[key] === value);
}