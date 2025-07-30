import { Job } from "../backend/models/jobSchema.js";
import { connection } from "../backend/database/connection.js";

// Initialize database connection
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    return;
  }
  
  try {
    await connection();
    isConnected = true;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await connectToDatabase();

    const { city, niche, searchKeyword } = req.query;
    const query = {};
    
    // Build query object
    if (city) {
      query.location = { $regex: city, $options: "i" };
    }
    if (niche) {
      query.jobNiche = { $regex: niche, $options: "i" };
    }
    if (searchKeyword) {
      query.$or = [
        { title: { $regex: searchKeyword, $options: "i" } },
        { companyName: { $regex: searchKeyword, $options: "i" } },
        { introduction: { $regex: searchKeyword, $options: "i" } },
      ];
    }

    // Fetch jobs with optimization
    const jobs = await Job.find(query)
      .select('title jobType location companyName introduction salary hiringMultipleCandidates jobNiche jobPostedOn postedBy')
      .sort({ jobPostedOn: -1 })
      .limit(100)
      .lean()
      .maxTimeMS(30000);

    res.status(200).json({
      success: true,
      jobs,
      count: jobs.length,
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    
    if (error.message.includes('timeout')) {
      return res.status(408).json({ 
        success: false, 
        message: "Request timeout. Please try again." 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Failed to fetch jobs. Please try again." 
    });
  }
}