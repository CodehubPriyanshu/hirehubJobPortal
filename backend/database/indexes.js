import { Job } from "../models/jobSchema.js";

export const createIndexes = async () => {
  try {
    // Create indexes for better query performance
    await Job.createIndexes([
      { jobPostedOn: -1 }, // For sorting by date
      { location: 1 }, // For location filtering
      { jobNiche: 1 }, // For niche filtering
      { postedBy: 1 }, // For getting user's jobs
      { title: "text", companyName: "text", introduction: "text" }, // For text search
    ]);
    
    console.log("Database indexes created successfully");
  } catch (error) {
    console.error("Error creating indexes:", error);
  }
};