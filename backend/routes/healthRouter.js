import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Health check endpoint
router.get("/health", async (req, res) => {
  try {
    // Check database connection
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    
    // Basic health check
    const healthCheck = {
      status: 'OK',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      database: {
        status: dbStatus,
        name: mongoose.connection.name || 'unknown'
      },
      memory: process.memoryUsage(),
      environment: process.env.NODE_ENV || 'development'
    };

    res.status(200).json(healthCheck);
  } catch (error) {
    res.status(503).json({
      status: 'ERROR',
      timestamp: new Date().toISOString(),
      error: error.message
    });
  }
});

// Database connection test
router.get("/db-test", async (req, res) => {
  try {
    // Test database connection by running a simple query
    const collections = await mongoose.connection.db.listCollections().toArray();
    
    res.status(200).json({
      status: 'Database connection successful',
      collections: collections.map(col => col.name),
      connectionState: mongoose.connection.readyState
    });
  } catch (error) {
    res.status(500).json({
      status: 'Database connection failed',
      error: error.message,
      connectionState: mongoose.connection.readyState
    });
  }
});

export default router;