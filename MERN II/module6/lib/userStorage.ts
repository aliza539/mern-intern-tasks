// Simple in-memory user storage
// In production, this should be replaced with a database
const users: { email: string; password: string }[] = [];

export function getUsers() {
  return users;
}

export function addUser(email: string, password: string) {
  users.push({ email, password });
}

export function findUser(email: string, password: string) {
  return users.find((u) => u.email === email && u.password === password);
}

export function userExists(email: string) {
  return users.some((u) => u.email === email);
}
