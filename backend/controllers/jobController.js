import { catchAsyncErrors } from "../middlewares/catchAsyncErrors.js";
import ErrorHandler from "../middlewares/error.js";
import { Job } from "../models/jobSchema.js";

export const postJob = catchAsyncErrors(async (req, res, next) => {
  const {
    title,
    jobType,
    location,
    companyName,
    introduction,
    responsibilities,
    qualifications,
    offers,
    salary,
    hiringMultipleCandidates,
    personalWebsiteTitle,
    personalWebsiteUrl,
    jobNiche,
  } = req.body;
  if (
    !title ||
    !jobType ||
    !location ||
    !companyName ||
    !introduction ||
    !responsibilities ||
    !qualifications ||
    !salary ||
    !jobNiche
  ) {
    return next(new ErrorHandler("Please provide full job details.", 400));
  }
  if (
    (personalWebsiteTitle && !personalWebsiteUrl) ||
    (!personalWebsiteTitle && personalWebsiteUrl)
  ) {
    return next(
      new ErrorHandler(
        "Provide both the website url and title, or leave both blank.",
        400
      )
    );
  }
  const postedBy = req.user._id;
  const job = await Job.create({
    title,
    jobType,
    location,
    companyName,
    introduction,
    responsibilities,
    qualifications,
    offers,
    salary,
    hiringMultipleCandidates,
    personalWebsite: {
      title: personalWebsiteTitle,
      url: personalWebsiteUrl,
    },
    jobNiche,
    postedBy,
  });
  res.status(201).json({
    success: true,
    message: "Job posted successfully.",
    job,
  });
});

export const getAllJobs = catchAsyncErrors(async (req, res, next) => {
  try {
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

    // Add timeout and optimization
    const jobs = await Job.find(query)
      .select('title jobType location companyName introduction salary hiringMultipleCandidates jobNiche jobPostedOn postedBy')
      .sort({ jobPostedOn: -1 })
      .limit(100)
      .lean()
      .maxTimeMS(30000); // 30 second timeout

    res.status(200).json({
      success: true,
      jobs,
      count: jobs.length,
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    
    if (error.name === 'MongooseError' || error.name === 'MongoError') {
      return next(new ErrorHandler("Database connection issue. Please try again later.", 500));
    }
    
    if (error.message.includes('timeout')) {
      return next(new ErrorHandler("Request timeout. Please try again.", 408));
    }
    
    return next(new ErrorHandler("Failed to fetch jobs. Please try again.", 500));
  }
});

export const getMyJobs = catchAsyncErrors(async (req, res, next) => {
  try {
    const myJobs = await Job.find({ postedBy: req.user._id })
      .sort({ jobPostedOn: -1 })
      .lean()
      .maxTimeMS(30000);
    
    res.status(200).json({
      success: true,
      myJobs,
    });
  } catch (error) {
    console.error('Error fetching my jobs:', error);
    return next(new ErrorHandler("Failed to fetch your jobs. Please try again.", 500));
  }
});

export const deleteJob = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Oops! Job not found.", 404));
  }
  await job.deleteOne();
  res.status(200).json({
    success: true,
    message: "Job deleted.",
  });
});

export const getASingleJob = catchAsyncErrors(async (req, res, next) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id)
      .lean()
      .maxTimeMS(30000);
    
    if (!job) {
      return next(new ErrorHandler("Job not found.", 404));
    }
    
    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    console.error('Error fetching single job:', error);
    
    if (error.name === 'CastError') {
      return next(new ErrorHandler("Invalid job ID.", 400));
    }
    
    return next(new ErrorHandler("Failed to fetch job details. Please try again.", 500));
  }
});