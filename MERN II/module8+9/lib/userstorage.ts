/* eslint-disable @typescript-eslint/no-explicit-any */
// Simple in-memory user storage
// In production, this should be replaced with a database

import fs from 'fs';
import path from 'path';

// Users ka data save karne ke liye file ka rasta
const filePath = path.join(process.cwd(), 'data', 'users.json');

// Ensure karein ke 'data' folder aur 'users.json' file maujood ho
if (!fs.existsSync(path.join(process.cwd(), 'data'))) {
  fs.mkdirSync(path.join(process.cwd(), 'data'));
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

// 1. Saare users ko read karne ka function
export const getUsers = () => {
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(jsonData);
};

// 2. Check karne ke liye ke user pehle se exist toh nahi karta
export const userExists = (email: string) => {
  const users = getUsers();
  return users.some((user: any) => user.email === email);
};

// 3. Naya user add karne ka function (The Main One!)
export const addUser = (email: string, password: string, role: string) => {
  const users = getUsers();
  
  const newUser = {
    id: Date.now().toString(),
    email: email.toLowerCase(),
    password: password, // Real app mein yahan 'bcrypt' use hota hai password hide karne ke liye
    role: role, // 'admin' ya 'user'
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  
  // Wapis file mein save kar dein
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  return newUser;
};