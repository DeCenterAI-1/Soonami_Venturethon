
**Developer Dashboard for API Management & Integration**

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
