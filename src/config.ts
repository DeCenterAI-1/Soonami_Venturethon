import dotenv from "dotenv";

dotenv.config();


export const config = {
  port: 4000,
  jwtSecret: "supersecretkey", // same secret for all endpoints
};
