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


---
Header Component

The Header component shows the navigation bar and updates menu items based on whether the user is logged in.

Features

Shows Login/Signup when logged out

Shows All Posts / Add Post / Logout when logged in

Uses useSelector to check auth state

Uses useNavigate to change pages

Displays Logo and navigation buttons

Styled with TailwindCSS

How It Works

authStatus is taken from Redux

navItems are filtered using active

Clicking a button runs navigate(item.slug)

Logout button appears only when authenticated


---
Input Component

A reusable input field with label support, unique ID, and ref forwarding.

Features

Supports labels using useId()

Uses forwardRef for parent access (focus, validation)

Accepts all input props (placeholder, onChange, etc.)

TailwindCSS styling

Customizable with className

Usage
<Input 
  label="Email" 
  type="email" 
  placeholder="Enter email" 
/>


---Button Component

A simple reusable button that supports custom background color, text color, and styling.

Features

Customizable colors (bgColor, textColor)

Accepts all extra props

Supports children for button text

Styled with TailwindCSS

Usage
<Button bgColor="bg-green-600">Submit</Button>