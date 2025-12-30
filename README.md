# 🏥 MediSlot Backend – Doctor Appointment System

This is the **backend service** for the *MediSlot* Doctor Appointment Booking application.  
It provides secure REST APIs for authentication, appointment management, and medical services using **Node.js, Express, and MongoDB**.

---

## 🚀 Tech Stack

- Node.js  
- Express.js  
- MongoDB (Atlas)  
- Mongoose  
- JWT Authentication  
- bcryptjs  
- Multer  
- dotenv  
- CORS  

---

## 📁 Project Structure

mediSlot-backend/
│
├── config/
│ └── db.js
│
├── controllers/
│ ├── auth.controller.js
│ ├── appointment.controller.js
│ ├── service.controller.js
│ └── user.controller.js
│
├── models/
│ ├── User.js
│ ├── Appointment.js
│ └── Service.js
│
├── routes/
│ ├── auth.routes.js
│ ├── appointment.routes.js
│ ├── service.routes.js
│ └── user.routes.js
│
├── middleware/
│ ├── auth.middleware.js
│ └── upload.middleware.js
│
├── uploads/
│ └── reports/
│
├── seedServices.js
├── server.js
├── .env
├── package.json
└── README.md


---

## 🔐 Authentication Flow

- User registers with email & password  
- Password is hashed using **bcrypt**
- JWT token is generated on login
- Protected routes use middleware to verify token

---

## 📌 API Endpoints

### 🔑 Auth Routes

POST /api/auth/register → Register new user
POST /api/auth/login → Login user


---

### 👤 User Routes



GET /api/users/me → Get logged-in user profile


---

### 📅 Appointment Routes



POST /api/appointments → Create appointment
GET /api/appointments → Get all user appointments
GET /api/appointments?year=2025 → Filter appointments by year


---

### 🏥 Services Routes



GET /api/services → Fetch all medical services


---

## 🧠 Appointment Data Structure

```json
{
  "user": "ObjectId",
  "doctorType": "Cardiologist",
  "date": "2025-01-10",
  "time": "10:30",
  "comments": "Chest pain issue",
  "report": "uploads/reports/report.pdf"
}

✅ Features Summary

User authentication (register / login)

JWT protected routes

Book appointments

View appointments

Upload medical reports

Fetch medical services

MongoDB Atlas integration

Clean MVC architecture
