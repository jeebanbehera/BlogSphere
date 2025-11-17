<!--  -->
AuthService (Appwrite)

A simple authentication wrapper using Appwrite to handle user signup, login, session management, and logout.

✅ Features

Create new Appwrite account

Auto-login after signup

Email/password login

Get current logged-in user

Logout (delete all sessions)


<!--  -->
# BlogSphere – Appwrite Blog Backend Service

This project provides a complete service layer for managing blog posts using **Appwrite** as the backend.  
It handles CRUD operations for posts, file uploads, and post retrieval with queries.

---

## 🚀 Features

- Create, read, update, and delete blog posts  
- Upload and delete featured images  
- Get preview URLs for images  
- Fetch single or multiple posts  
- Uses Appwrite Database & Storage  
- Clean reusable service structure  

---

## 🛠️ Tech Stack

- **JavaScript (ES6 Modules)**
- **Appwrite SDK**
- **Appwrite Database**
- **Appwrite Storage**

---

## 📦 Folder Structure



<!--  -->
🔐 Redux Toolkit – Auth Slice

This file defines an authentication slice using Redux Toolkit.
It manages the login/logout state and stores user data in the global Redux store.

✅ Features

Manage authentication status (logged in / logged out)

Store and update user information

Uses Redux Toolkit’s createSlice

Simple and reusable for any React project



<!--  -->
---
Logout Button Component

A simple React component that logs out the user using Appwrite and updates Redux state.

🔧 How It Works

Calls authService.logout() to sign out the user.

Dispatches logout() from Redux on success.

Logs error if logout fails.

