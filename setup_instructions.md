# 🛠️ GlowMart - Developer Setup Guide

Welcome to the **GlowMart Fullstack E-commerce App**. This guide will help you set up the application on a new system (Windows/macOS/Linux) from scratch. Whether you are a developer or contributor, follow the steps below to get started.

---

## 📦 Prerequisites

Make sure you have the following software installed:

| Tool        | Required Version | Download Link                                                                                                                    |
| ----------- | ---------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Java**    | 17+              | [https://www.oracle.com/java/technologies/javase-downloads.html](https://www.oracle.com/java/technologies/javase-downloads.html) |
| **Maven**   | 3.8+             | [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)                                                   |
| **Node.js** | 16+              | [https://nodejs.org/en/download](https://nodejs.org/en/download)                                                                 |
| **Git**     | Latest           | [https://git-scm.com/downloads](https://git-scm.com/downloads)                                                                   |

> ✅ After installing, verify via terminal:

```bash
java -version
mvn -version
node -v
npm -v
git --version
```

---

## 📥 Clone the Project

```bash
git clone https://github.com/Rdf1846/glowmart-fullstack.git
cd glowmart-fullstack
```

This will create the following structure:

```
glowmart-fullstack/
├── backend/     # Spring Boot Backend
└── frontend/    # React Frontend
```

---

## ▶️ Running the Application

```html
NOTE : Open two terminal windows in any terminal you want - cmd/gitBash/IDE Inbuilt terminal. One for frontEnd and another for backend.
```

### 1. Start the Backend (Spring Boot)

```bash
cd backend
mvn spring-boot:run
```

- Runs on: `http://localhost:8080`
- API testable via Postman or browser.

### 2. Start the Frontend (React)

Open a **new terminal**:

```bash
cd frontend
npm install     # First time only
npm run dev
```

- Runs on: `http://localhost:5173`

---

## 🚀 What You Can Do After Setup

- Browse products
- Register or Login with OTP
- Add products to cart
- Place an order
- View order history (My Orders)

---

## 🧪 Testing Scenarios

- ✅ Try ordering without login → should redirect to registration
- ✅ Try Register → OTP → Checkout → Order
- ✅ Try Login → My Orders → See placed orders
- ✅ Try Logout → Session cleared, protected routes blocked

---

## 🛠️ Optional Development Tools

| Tool         | Use                                           |
| ------------ | --------------------------------------------- |
| **VS Code**  | Recommended for frontend (React) editing      |
| **IntelliJ** | Recommended for backend (Spring Boot) editing |
| **Postman**  | For API testing                               |

---

## 🧯 Troubleshooting

| Issue                  | Solution                                |
| ---------------------- | --------------------------------------- |
| `mvn` not recognized   | Add Maven `bin/` to PATH                |
| `npm` not recognized   | Install Node.js properly                |
| Java version error     | Make sure you use Java 17+              |
| CORS error in frontend | Check `@CrossOrigin` is used in backend |

---

## 🤝 Need Help?

Contact the maintainer via GitHub Issues or Discussions tab.

---

Happy Coding! 🚀

