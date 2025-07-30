# HireHub - Full-Stack Job Portal

HireHub is a comprehensive job portal application built with the MERN (MongoDB, Express.js, React, and Node.js) stack. This project provides a seamless platform for job seekers to find opportunities and for employers to post and manage job listings.

## 🚀 Features

### For Job Seekers
- **Job Search & Browse**: Search and filter job listings by keywords, location, categories, and more
- **Resume Management**: Upload and manage resumes for job applications
- **Application Tracking**: Track all submitted job applications
- **Profile Management**: Update personal information and preferences
- **Responsive Design**: Optimized for desktop and mobile devices

### For Employers
- **Job Posting**: Create detailed job listings with requirements and descriptions
- **Application Management**: View and manage received applications
- **Job Management**: Edit, update, or delete posted jobs
- **Dashboard**: Comprehensive overview of posted jobs and applications
- **Company Profile**: Manage company information and branding

### Security & Authentication
- **JWT Authentication**: Secure user authentication and authorization
- **Role-based Access**: Different permissions for job seekers and employers
- **Password Encryption**: Secure password hashing with bcrypt
- **File Upload Security**: Secure file handling with Cloudinary integration

## 🛠️ Tech Stack

### Frontend
- **React.js** - User interface library
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Vite** - Build tool and development server
- **Axios** - HTTP client for API calls
- **React Toastify** - Notifications
- **React Icons** - Icon library

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Cloudinary** - Cloud-based file storage
- **Nodemailer** - Email service
- **bcrypt** - Password hashing

## 📁 Project Structure

```
hirehub-job-portal/
├── backend/                 # Backend server
│   ├── app.js              # Express app configuration
│   ├── server.js           # Server entry point
│   ��── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── database/           # Database connection
│   ├── middlewares/        # Custom middlewares
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   └── automation/         # Automated tasks
├── frontend/               # Frontend client
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── store/          # Redux store
│   │   ├── config/         # Configuration
│   │   └── App.jsx         # Main App component
│   ├── public/             # Static assets
│   └── index.html          # HTML template
├── package.json            # Root package.json
├── vercel.json            # Vercel deployment config
└── README.md              # Project documentation
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd hirehub-job-portal
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   
   Create `backend/config/config.env`:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET_KEY=your_jwt_secret_key
   JWT_EXPIRE=7d
   COOKIE_EXPIRE=7
   
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   
   FRONTEND_URL=http://localhost:5173
   
   SMPT_SERVICE=gmail
   SMPT_MAIL=your_email@gmail.com
   SMPT_PASSWORD=your_app_password
   SMPT_HOST=your_email@gmail.com
   SMPT_PORT=587
   ```
   
   Create `frontend/.env`:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

4. **Run the application**
   
   **Development mode (both frontend and backend):**
   ```bash
   npm run dev
   ```
   
   **Or run separately:**
   ```bash
   # Backend only
   npm run dev:backend
   
   # Frontend only
   npm run dev:frontend
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:4000

## 📱 Available Scripts

### Root Level Scripts
- `npm run dev` - Run both frontend and backend in development mode
- `npm run dev:backend` - Run backend only
- `npm run dev:frontend` - Run frontend only
- `npm run build` - Build frontend for production
- `npm start` - Start backend in production mode
- `npm run install:all` - Install dependencies for both frontend and backend

### Backend Scripts
- `npm start` - Start server in production mode
- `npm run dev` - Start server with nodemon for development

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Endpoints

### User Routes (`/api/v1/user`)
- `POST /register` - Register a new user
- `POST /login` - User login
- `GET /getuser` - Get current user details
- `GET /logout` - User logout
- `PUT /update/profile` - Update user profile
- `PUT /update/password` - Update user password

### Job Routes (`/api/v1/job`)
- `GET /getall` - Get all jobs (with filters)
- `GET /get/:id` - Get single job by ID
- `POST /post` - Post a new job (employer only)
- `GET /getmyjobs` - Get jobs posted by current employer
- `DELETE /delete/:id` - Delete a job (employer only)

### Application Routes (`/api/v1/application`)
- `GET /employer/getall` - Get all applications for employer
- `GET /jobseeker/getall` - Get all applications by job seeker
- `POST /post/:jobId` - Apply for a job
- `DELETE /delete/:id` - Delete an application

## 🚀 Deployment

### Vercel Deployment

This project is configured for easy deployment on Vercel:

1. **Push your code to GitHub**

2. **Connect to Vercel**
   - Import your GitHub repository to Vercel
   - Vercel will automatically detect the configuration

3. **Set Environment Variables**
   - Add all required environment variables in Vercel dashboard
   - Update `FRONTEND_URL` to your Vercel domain
   - Update `VITE_BACKEND_URL` to your Vercel API URL

4. **Deploy**
   - Vercel will automatically build and deploy your application
   - Both frontend and backend will be served from the same domain

### Manual Deployment

1. **Build the frontend**
   ```bash
   npm run build
   ```

2. **Deploy backend to your preferred hosting service**

3. **Deploy frontend build files to a static hosting service**

## 🔧 Configuration

### Environment Variables

**Backend (`backend/config/config.env`):**
- Database and authentication settings
- Third-party service configurations (Cloudinary, Email)
- CORS and security settings

**Frontend (`frontend/.env`):**
- API endpoint configuration
- Build-time environment variables

## 📸 Screenshots

### Home Page
![home](https://github.com/user-attachments/assets/738c635c-4872-4853-a98b-47e0f2258ca1)

### Job Listings
![Job](https://github.com/user-attachments/assets/984447e5-c9b1-4973-918f-dea8218ec4b6)

### Employer Profile
![Profile](https://github.com/user-attachments/assets/9896ee1a-d329-46a3-bb91-c20d028b2ddc)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the individual README files in `backend/` and `frontend/` directories
2. Review the API documentation
3. Create an issue in the repository

## 🔮 Future Enhancements

- Real-time chat between employers and job seekers
- Advanced job recommendation system
- Integration with LinkedIn and other job platforms
- Mobile application development
- Advanced analytics and reporting
- Video interview scheduling
- Skill assessment tests

---

**Built with ❤️ using the MERN Stack**