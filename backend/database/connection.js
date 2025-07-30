import mongoose from "mongoose";
import { createIndexes } from "./indexes.js";

export const connection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "JOB_PORTAL_WITH_AUTOMATION",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 30000, // 30 seconds
        socketTimeoutMS: 45000, // 45 seconds
        bufferMaxEntries: 0,
        maxPoolSize: 10,
        minPoolSize: 5,
        maxIdleTimeMS: 30000,
        connectTimeoutMS: 30000,
    }).then(async () => {
        console.log("Connected to database successfully.");
        // Create indexes for better performance
        await createIndexes();
    }).catch(err => {
        console.log(`Database connection error: ${err.message}`);
        console.log("Retrying connection in 5 seconds...");
        setTimeout(connection, 5000);
    });

    // Handle connection events
    mongoose.connection.on('connected', () => {
        console.log('Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose disconnected');
    });

    // Graceful shutdown
    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        console.log('Mongoose connection closed due to app termination');
        process.exit(0);
    });
};