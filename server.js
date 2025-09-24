import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Import routes
import signupRoute from "./api/auth/signup.js";
import signinRoute from "./api/auth/signin.js";
import forgotPasswordRoute from "./api/auth/forgot-password.js";
import dashboardRoute from "./api/dashboard.js";
import apiTokensRoute from "./api/api-tokens.js";
import billingRoute from "./api/billing.js";
import profileRoute from "./api/profile.js";
import notificationsRoute from "./api/notifications.js";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/register", signupRoute);
app.use("/api/login", signinRoute);
app.use("/api/forgot-password", forgotPasswordRoute);
app.use("/api/dashboard", dashboardRoute);
app.use("/api/api-tokens", apiTokensRoute);
app.use("/api/billing", billingRoute);
app.use("/api/profile", profileRoute);
app.use("/api/notifications", notificationsRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
