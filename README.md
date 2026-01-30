# Streamify

Streamify is a **full-stack, three-tier streaming platform application**
designed to simulate a **real-world production application**.

This repository represents a **complete developer handoff** to DevOps,
containing **frontend, backend, and database code only**.
Infrastructure, CI/CD, and deployment are intentionally excluded.

---

## 🧠 Purpose of This Project

This project is built to:

- Simulate how **real developers deliver application code**
- Allow **DevOps engineers** to:
  - Containerize the app
  - Build CI/CD pipelines
  - Deploy to Kubernetes
  - Add monitoring, security, and scaling

---

## 🏗 Architecture Overview

User Browser
↓
React Frontend (Vite)
↓
Node.js Backend (Express)
↓
PostgreSQL Database


---

## 🧱 Technology Stack

### Frontend
- React 18
- Vite
- Axios
- React Router
- Static assets (images)

### Backend
- Node.js
- Express.js
- JWT Authentication
- Role-based access (USER / ADMIN)

### Database
- PostgreSQL
- Relational schema
- Seed data included

---

## ✨ Application Features

### 👤 User Features
- User registration & login
- JWT-based authentication
- Browse movies by category
- View movie details
- User profiles
- Watch history tracking
- Subscription & payment flow (mocked)

### 🛠 Admin Features
- Admin role support
- View all users
- Admin-only API access

---

## 📁 Project Structure



streamify/
├── frontend/
│ ├── public/
│ │ └── images/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── backend/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── services/
│ │ ├── middleware/
│ │ ├── db.js
│ │ └── server.js
│ └── package.json
│
├── database/
│ ├── schema.sql
│ └── seed.sql
│
└── README.md


---

## 🗄 Database Schema Overview

Tables included:
- users
- profiles
- movies
- watch_history
- subscriptions
- payments

Relationships are properly defined using foreign keys.

---

## ⚙️ Prerequisites

- Node.js **18+**
- npm
- PostgreSQL **14+**

---

## 🗄 Database Setup

1. Create database:
```bash
createdb streamify


Apply schema:

psql streamify < database/schema.sql


Insert seed data:

psql streamify < database/seed.sql


Ensure DB credentials match:

backend/src/db.js

▶️ Running the Backend
cd backend
npm install
node src/server.js


Backend will start on:

http://localhost:5000

▶️ Running the Frontend
cd frontend
npm install
npm run dev


Frontend will start on:

http://localhost:5173

🔐 Authentication Details

Login returns a JWT token

Token must be sent as:

Authorization: Bearer <token>


Admin APIs require:

role = ADMIN

🔗 API Endpoints Summary
Auth

POST /api/auth/register

POST /api/auth/login

Movies

GET /api/movies/:category

GET /api/movies/details/:id

Profiles

GET /api/profiles

Payments

POST /api/payments/subscribe

Watch History

POST /api/history/:movieId

Admin

GET /api/admin/users

🖼 Frontend Images

Location:

frontend/public/images/


Recommended image types:

Movie posters (2:3 ratio)

Banner images (16:9 ratio)

Profile avatars

Images should be generic and copyright-safe.

🧑‍💻 Notes for DevOps Engineers

No infrastructure code included by design

Secrets are hardcoded for development

App is suitable for:

Dockerization

CI/CD pipelines

Kubernetes deployment

Security scanning (SAST / DAST)

Observability and monitoring

🚀 Suggested DevOps Enhancements

Dockerfiles for frontend and backend

Environment-based configuration

Secrets management

Health checks

CI/CD pipelines

Kubernetes manifests

Monitoring & logging

📌 Disclaimer

This project is intended for learning, portfolio, and DevOps practice.
It does not contain proprietary logic or copyrighted content.


---

## ✅ FINAL CONFIRMATION

- ✔ One single README
- ✔ Covers frontend, backend, database
- ✔ Explains architecture, setup, APIs
- ✔ Real-world DevOps handoff quality
- ✔ Safe for GitHub & LinkedIn

You can **commit this now**.

If you want next:
- Dockerfiles
- `.env` refactor
- Kubernetes manifests
- CI/CD pipelines
- Interview talking points

Just tell me.

