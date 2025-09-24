import express from "express";
import cors from "cors"; // ✅ Import cors
import { config } from "./config";

import authRoutes from "./routes/auth";
import dashboardRoutes from "./routes/dashboard";
import apiRoutes from "./routes/api";
import billingRoutes from "./routes/billing";
import settingsRoutes from "./routes/settings";

const app = express();

// Middleware
app.use(express.json());

// Enable CORS for frontend (adjust origin as needed)
app.use(cors({
  origin: "http://localhost:8081", // Your frontend URL
  methods: ["GET", "POST", "PATCH", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Unreal Console Backend is running");
});

// Mount all routes
app.use("/auth", authRoutes);
app.use("/dashboard", dashboardRoutes);
app.use("/api", apiRoutes);
app.use("/billing", billingRoutes);
app.use("/settings", settingsRoutes);

app.listen(config.port, () => {
  console.log(`🚀 Server running on http://localhost:${config.port}`);
});
