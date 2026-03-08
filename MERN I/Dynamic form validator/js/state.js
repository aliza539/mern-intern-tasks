/**
 * @typedef {Object} Task
 * @property {string} id
 * @property {string} text
 * @property {string} email
 */

/** @type {Task[]} */
// Using a module-level variable to store tasks in memory
export let tasks = [];

export function setTasks(newTasks) {
  tasks = newTasks;
}