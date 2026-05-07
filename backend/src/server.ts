import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import prisma from "./config/prisma.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Test DB connection properly
    await prisma.$connect();
    console.log("Database connected");

    // Start server
    app.listen(PORT, () => {
      console.log(`Task Flow API running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

startServer();