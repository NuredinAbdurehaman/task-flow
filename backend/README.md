# Task Flow - Backend

Backend API for Task Flow project management application.

---

## 🚀 Tech Stack

- Node.js
- Express
- PostgreSQL
- Prisma ORM
- JWT Authentication

---

## 📂 Folder Structure

backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── middlewares/
│   ├── services/
|   ├── utils/
|   ├── config/
│   └── app.ts
|   └── server.ts
├── prisma/
└── package.json
└── .env

---

## ⚙️ Setup Instructions

### 1. Install dependencies
npm install

---

### 2. Setup environment variables

Create a .env file:

DATABASE_URL=your_postgres_url
JWT_SECRET=your_secret_key
PORT=5000

---

### 3. Run database migration
npx prisma migrate dev

---

### 4. Start server
npm run dev

Server runs at:
http://localhost:5000

---

## 🔐 Authentication

Uses JWT-based authentication for secure login and protected routes.

---

## 🧠 API Routes

Auth:
- POST /auth/register
- POST /auth/login

Projects:
- POST /projects
- GET /projects

Tasks:
- POST /tasks
- GET /tasks
- PATCH /tasks/:id

---

## 📌 Status

🚧 Backend MVP in progress