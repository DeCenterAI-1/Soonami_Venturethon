Here’s a complete **README.md** for your `unreal-console` project, aligned with your **Software Development Requirements** and backend/frontend setup:

---

# Unreal Console

+---------------------+       +---------------------+
|  Frontend (React)   | <---> | Backend (Node.js)   |
|  - Dashboard        |       | - Auth Routes       |
|  - API Management   |       | - API Routes        |
|  - Chat Playground  |       | - Billing Routes    |
|  - Settings         |       | - Web3 Auth         |
+---------------------+       +---------------------+
          |                          |
          v                          v
      Users/Developers          JWT Auth + DB


**Developer Dashboard for API Management & Integration**

Unreal Console is a modern, React + Vite-based dashboard with a Node.js + Express backend, enabling developers to authenticate, generate API keys, and integrate applications with an OpenAI-compatible backend. It provides real-time monitoring, API management, and secure authentication using email/password or Web3 wallets.

> 🔹 Connect, authenticate, and deploy AI in minutes

---

## ✨ Key Features

### Authentication

* Email/password login & registration
* Wallet-based login (Web3)
* Forgot password & Remember Me

### Dashboard

* Real-time inference count
* API usage statistics
* Network health status
* Recent activity logs
* Inference history chart
* Notifications

### API Management

* Generate, view, revoke, and rename API keys
* Copy API keys directly
* View last used date and inference count

### Billing

* Credit balance display
* Top-up flow
* Transaction list (credit amount, date)
* Recent API activity

### Settings

* Profile management (photo, name, bio)
* Security (change password)
* Notification preferences (email/push)

---

## 🗺️ Project Structure

```
unreal-console/
├─ frontend/         # React + Vite
│  ├─ src/
│  │  ├─ components/
│  │  ├─ pages/
│  │  ├─ hooks/
│  │  ├─ lib/
│  │  └─ config/
│  ├─ public/
│  └─ vite.config.ts
├─ backend/          # Node.js + Express + TS
│  ├─ src/
│  │  ├─ routes/
│  │  ├─ controllers/
│  │  ├─ middleware/
│  │  ├─ utils/
│  │  ├─ server.ts
│  │  └─ config.ts
│  ├─ package.json
│  ├─ tsconfig.json
│  └─ .env.example
└─ docs/             # Documentation
```

---

## ⚡ Tech Stack

* **Frontend:** React, Vite, TypeScript, Tailwind CSS, shadcn/ui
* **Backend:** Node.js, Express, TypeScript, JWT authentication, bcrypt
* **Database:** (future) PostgreSQL / MongoDB
* **Auth:** Email/password, JWT tokens, optional Web3 wallet
* **Testing:** Playwright (E2E), REST client / Postman

---

## 🛠️ Installation

### Backend

```bash
cd unreal-console/backend
npm install
cp .env.example .env
npm run dev
```

### Frontend

```bash
cd unreal-console/frontend
npm install
npm run dev
```

---

## 🔌 API Endpoints

### Unauthenticated

* `POST /auth/register` → Create account
* `POST /auth/login` → Login user
* `POST /auth/forgot-password` → Password reset
* `GET /` → Health check

### Authenticated (JWT)

* `GET /dashboard` → Dashboard info
* `POST /api/generate` → Generate API key
* `GET /api/list` → List API keys
* `DELETE /api/:id` → Revoke API key
* `PATCH /api/:id` → Rename API key
* `GET /billing/transactions` → Transaction history
* `PATCH /settings/profile` → Update profile
* `PATCH /settings/security` → Change password
* `PATCH /settings/notifications` → Toggle notifications

---

## 📦 Development

* Backend: `npm run dev` → starts server on `http://localhost:4000`
* Frontend: `npm run dev` → starts frontend on `http://localhost:5173`

---

## 🧩 Software Development Lifecycle Alignment

1. **Requirements Analysis:** Features include auth, API management, dashboard, billing, and settings.
2. **Design:** Folder structure separates frontend and backend, modular routes, controllers, and utilities.
3. **Implementation:** React frontend with reusable components; Express backend with JWT auth.
4. **Testing:** Routes tested via REST client, Postman, or Playwright (frontend E2E tests).
5. **Deployment:** Ready for Docker or cloud deployment (Vercel/Render for frontend, Node server for backend).
6. **Maintenance:** Structured folders make it easy to add APIs, integrate DB, and extend features.

---

## 📜 License

MIT © Unreal AI contributors

---

If you want, I can also **create a ready-made `README.md` file in your `unreal-console` folder** so you can just drop it in and have it formatted.

Do you want me to do that next?


Got it 👍 — you want the **full set of working `curl` examples** for your listed endpoints. Here’s the collection (replace `YOUR_JWT_TOKEN` and `:id` as needed):

```bash
# ================================
# Dashboard
# ================================
curl -X GET https://api.example.com/dashboard \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# ================================
# API Keys
# ================================
# Generate API key
curl -X POST https://api.example.com/api/generate \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# List API keys
curl -X GET https://api.example.com/api/list \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Revoke API key
curl -X DELETE https://api.example.com/api/123 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# Rename API key
curl -X PATCH https://api.example.com/api/123 \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "My New API Key Name"
  }'

# ================================
# Billing
# ================================
# Transaction history
curl -X GET https://api.example.com/billing/transactions \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"

# ================================
# Settings
# ================================
# Update profile
curl -X PATCH https://api.example.com/settings/profile \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com"
  }'

# Change password
curl -X PATCH https://api.example.com/settings/security \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "oldPassword": "current_password",
    "newPassword": "new_secure_password"
  }'

# Toggle notifications
curl -X PATCH https://api.example.com/settings/notifications \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "email": true,
    "sms": false,
    "push": true
  }'
```

⚡ Pro tip: If you want, I can also make you a **ready-to-run shell script** (`api.sh`) with all of these commands and placeholder variables (`BASE_URL`, `JWT`, etc.).

Do you want me to prepare that script for you?

{"message":"Wallet 0x411caf28d09f8ba5893906179b2fc520c4f123f7f8f4625b79362089676b49fe registered successfully","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDYzOTEsImV4cCI6MTc1OTIxMTE5MX0.i4cFdrxZSOHkRiAe6R7vp9I4YuiLWdXouTfxMfKoM0c"}%  



{"message":"Wallet 0x411caf28d09f8ba5893906179b2fc520c4f123f7f8f4625b79362089676b49fe registered successfully","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDY5MDMsImV4cCI6MTc1OTIxMTcwM30.mG8LqBBaP-gC3Hudf0PH9Enr6etQAab0p5839WkpnTg"}%     
user01@Jeyabalans-MacBook-a Downloads % 



{"message":"Wallet 0x411caf28d09f8ba5893906179b2fc520c4f123f7f8f4625b79362089676b49fe registered successfully","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"}%  

user01@Jeyabalans-MacBook-a Downloads % curl -X POST http://localhost:4000/auth/wallet \   -H "Content-Type: application/json" \  -d '{"address":"0x411caf28d09f8ba5893906179b2fc520c4f123f7f8f4625b79362089676b49fe"}'

{"message":"Wallet 0x411caf28d09f8ba5893906179b2fc520c4f123f7f8f4625b79362089676b49fe registered successfully","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"}%     
user01@Jeyabalans-MacBook-a Downloads % curl -X GET http://localhost:4000/dashboard \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"message":"Dashboard data","user":{"wallet":"0x411caf28d09f8ba5893906179b2fc520c4f123f7f8f4625b79362089676b49fe","iat":1758608710,"exp":1759213510},"inferenceCount":5,"apiCount":2,"recentActivities":[]}%            
user01@Jeyabalans-MacBook-a Downloads % curl -X POST http://localhost:4000/api/generate \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"message":"API key generated","apiKey":"demo-key-123"}%                
user01@Jeyabalans-MacBook-a Downloads % curl -X GET http://localhost:4000/api/list \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"keys":["demo-key-123","demo-key-456"]}%                               
user01@Jeyabalans-MacBook-a Downloads % curl -X GET http://localhost:4000/billing/transactions \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"transactions":[{"id":1,"amount":100,"type":"credit"},{"id":2,"amount":50,"type":"debit"}]}%                                                   
user01@Jeyabalans-MacBook-a Downloads % curl -X PATCH http://localhost:4000/settings/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"message":"Profile updated"}%                                          
user01@Jeyabalans-MacBook-a Downloads % curl -X GET http://localhost:4000/api/list \            
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"keys":["demo-key-123","demo-key-456"]}%                               
user01@Jeyabalans-MacBook-a Downloads % curl -X PATCH http://localhost:4000/settings/profile \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"message":"Profile updated"}%                                          
user01@Jeyabalans-MacBook-a Downloads % curl -X GET http://localhost:4000/billing/transactions \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"transactions":[{"id":1,"amount":100,"type":"credit"},{"id":2,"amount":50,"type":"debit"}]}%                                                   
user01@Jeyabalans-MacBook-a Downloads % curl -X GET http://localhost:4000/dashboard \           
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXQiOiIweDQxMWNhZjI4ZDA5ZjhiYTU4OTM5MDYxNzliMmZjNTIwYzRmMTIzZjdmOGY0NjI1Yjc5MzYyMDg5Njc2YjQ5ZmUiLCJpYXQiOjE3NTg2MDg3MTAsImV4cCI6MTc1OTIxMzUxMH0.ZFhz2qWDDDdfjtHFY1-neOjTNP6eBLHIA0vp4WxI37Q"

{"message":"Dashboard data","user":{"wallet":"0x411caf28d09f8ba5893906179b2fc520c4f123f7f8f4625b79362089676b49fe","iat":1758608710,"exp":1759213510},"inferenceCount":5,"apiCount":2,"recentActivities":[]}%            
user01@Jeyabalans-MacBook-a Downloads % 

Absolutely! For the **Unreal Console frontend**, the features are designed to work across **multiple devices**—desktop, tablet, and mobile. Here’s a breakdown of the **frontend features with multi-device support**:

---

## **Frontend Features Across Devices**

### 1. **Responsive Layout**

* The UI automatically adjusts to different screen sizes (desktop, tablet, mobile).
* Grid-based and flexbox layouts ensure consistent spacing and alignment.
* Sidebar collapses into a hamburger menu on smaller screens.

### 2. **Authentication**

* Wallet-based login (Web3) works on both desktop and mobile wallets.
* Email/password login & registration fully responsive.
* “Forgot password” and “Remember Me” options accessible on all devices.

### 3. **Dashboard**

* Real-time API usage metrics and inference counts displayed with responsive charts.
* Recent activity list adjusts to fit smaller screens (scrollable on mobile).
* Notifications panel can be toggled or swiped for mobile users.

### 4. **API Key Management**

* CRUD operations (Generate, Revoke, Rename, Copy) available on all devices.
* Keys can be copied easily on mobile with touch-friendly buttons.
* API list table collapses into card view on mobile for readability.

### 5. **Billing & Transactions**

* Credit balance visible on all screens.
* Transaction list uses a responsive table that switches to stacked cards on mobile.
* Top-up flow optimized for touch inputs.

### 6. **Chat Playground**

* Mobile-friendly input box with autocomplete and scrollable chat history.
* Supports interactive testing of API completions on desktop and mobile.
* Chat UI adapts dynamically to screen width for better readability.

### 7. **Settings & Profile**

* Profile management forms are responsive.
* Notification toggles (email/push/SMS) optimized for mobile.
* Password change and profile updates accessible on small screens without horizontal scroll.

### 8. **UI/UX Enhancements**

* Multi-page navigation works with responsive menus (hamburger for mobile, full sidebar for desktop).
* Buttons, inputs, and cards are touch-friendly for mobile users.
* Tailwind CSS + shadcn/ui ensures consistent styling across devices.

---

### **Summary Table: Frontend Features Across Devices**

| Feature                | Desktop       | Tablet        | Mobile          |
| ---------------------- | ------------- | ------------- | --------------- |
| Authentication         | ✅ Full login  | ✅ Full login  | ✅ Full login    |
| Wallet Support         | ✅ Supported   | ✅ Supported   | ✅ Supported     |
| Dashboard Metrics      | ✅ Full charts | ✅ Full charts | ✅ Responsive    |
| API Key Management     | ✅ Table view  | ✅ Table view  | ✅ Card view     |
| Billing & Transactions | ✅ Table view  | ✅ Table view  | ✅ Stacked cards |
| Chat Playground        | ✅ Full screen | ✅ Full screen | ✅ Scrollable    |
| Profile & Settings     | ✅ Full forms  | ✅ Full forms  | ✅ Responsive    |
| Navigation             | ✅ Sidebar     | ✅ Sidebar     | ✅ Hamburger     |
| Notifications          | ✅ Panel       | ✅ Panel       | ✅ Swipeable     |
![Uploading Screenshot 2025-09-24 at 09.43.05.png…]()

---

