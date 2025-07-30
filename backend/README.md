# HireHub Backend

This is the backend server for the HireHub job portal application built with Node.js, Express.js, and MongoDB.

## Features

- User authentication and authorization (JWT)
- Job posting and management
- Application management
- File upload (Cloudinary integration)
- Email notifications
- Newsletter automation
- RESTful API endpoints

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Cloudinary** - File storage
- **Nodemailer** - Email service
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

## Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `config` directory or update `config.env` with your environment variables:
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

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start the server with nodemon for automatic restarts on file changes.

### Production Mode
```bash
npm start
```

The server will start on the port specified in your environment variables (default: 4000).

## API Endpoints

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

## Project Structure

```
backend/
├── app.js                 # Express app configuration
├── server.js             # Server entry point
├── config/
│   └── config.env        # Environment variables
├── controllers/          # Route controllers
├── database/            # Database connection
├── middlewares/         # Custom middlewares
├── models/              # Mongoose models
├── routes/              # API routes
├── utils/               # Utility functions
└── automation/          # Automated tasks (newsletter)
```

## Environment Variables

Make sure to set up the following environment variables:

- `PORT` - Server port (default: 4000)
- `MONGO_URI` - MongoDB connection string
- `JWT_SECRET_KEY` - Secret key for JWT tokens
- `JWT_EXPIRE` - JWT token expiration time
- `COOKIE_EXPIRE` - Cookie expiration time
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret
- `FRONTEND_URL` - Frontend application URL
- `SMPT_SERVICE` - Email service provider
- `SMPT_MAIL` - Email address for sending emails
- `SMPT_PASSWORD` - Email password or app password
- `SMPT_HOST` - SMTP host
- `SMPT_PORT` - SMTP port

## Error Handling

The application includes comprehensive error handling middleware that catches and formats errors appropriately for API responses.

## Security Features

- Password hashing with bcrypt
- JWT token authentication
- CORS configuration
- Input validation
- File upload restrictions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.