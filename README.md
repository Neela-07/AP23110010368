# 📢 Campus Notifications Frontend

## 📌 Overview

This project is a frontend application built as part of a campus hiring evaluation. The application displays notifications related to placements, results, and events in a structured and user-friendly manner. It focuses on clean architecture, proper API handling, and a smooth user experience.

---

## 🚀 Features

* 🔐 Secure API integration using Bearer Token authentication
* 📊 Priority-based sorting (Placement > Result > Event)
* 🔍 Filter notifications by type
* 📄 Pagination for better readability
* 🧾 Logging middleware integration for tracking events
* 🎨 Clean and responsive UI design

---

## 🏗️ Project Structure

```
notification_app_fe/
├── app/
│   ├── api/notifications/route.js   # API proxy (handles CORS)
│   ├── page.tsx                     # Main UI logic
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   └── NotificationCard.js          # UI component for each notification
│
├── services/
│   ├── api.js                       # API calls
│   └── logger.js                    # Logging middleware usage
│
├── utils/
│   └── priority.js                  # Sorting logic
│
└── package.json
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone Repository

```bash
git clone <your-repo-link>
cd notification_app_fe
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Application

```bash
npm run dev
```

### 4️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🔐 Authentication

The application uses a Bearer token to access the notifications API.
You need to generate a token using the provided authentication endpoint and add it inside the application.

---

## 🔄 API Handling

Due to CORS restrictions, the application uses a Next.js API route as a proxy to fetch data from the external service.

---

## 📊 Notification Logic

* Notifications are sorted based on priority:

  * Placement (highest)
  * Result
  * Event (lowest)
* If priorities are equal, latest notifications are shown first

---

## 🧾 Logging Middleware

A reusable logging function is implemented to:

* Track API calls
* Record user interactions
* Log errors

Logs follow the structure:

```
Log(stack, level, package, message)
```

---

## 🎨 UI Design

The UI is designed to be minimal and readable:

* Card-based layout
* Color-coded notification types
* Pagination controls
* Clean spacing and typography

---

## ⚠️ Notes

* Tokens may expire quickly, so regeneration might be required
* Ensure proper folder naming as per evaluation guidelines
* Avoid console logs in production code

---

## 📌 Conclusion

This project demonstrates a structured approach to frontend development, including API integration, reusable logic, and clean UI design. It reflects good practices in building scalable and maintainable applications.

---
