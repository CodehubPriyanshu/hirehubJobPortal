# HireHub Frontend

This is the frontend client application for the HireHub job portal built with React.js and Vite.

## Features

- User authentication (login/register)
- Job browsing and searching
- Job application management
- User profile management
- Responsive design
- Real-time notifications
- Dashboard for employers and job seekers

## Tech Stack

- **React.js** - Frontend library
- **Vite** - Build tool and development server
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **React Toastify** - Notifications
- **React Spinners** - Loading indicators

## Prerequisites

Before running this application, make sure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the frontend root directory:
   ```env
   VITE_BACKEND_URL=http://localhost:4000
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start the development server with hot reload. The application will be available at `http://localhost:5173`.

### Build for Production
```bash
npm run build
```
This creates an optimized production build in the `dist` directory.

### Preview Production Build
```bash
npm run preview
```
This serves the production build locally for testing.

### Linting
```bash
npm run lint
```
This runs ESLint to check for code quality issues.

## Project Structure

```
frontend/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── pages/          # Page components
│   ├── store/          # Redux store and slices
│   │   └── slices/     # Redux slices for state management
│   ├── config/         # Configuration files
│   ├── App.jsx         # Main App component
│   ├── App.css         # Global styles
│   └── main.jsx        # Application entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## State Management

The application uses Redux Toolkit for state management with the following slices:

- **userSlice** - User authentication and profile management
- **jobSlice** - Job listings and job management
- **applicationSlice** - Job application management
- **updateProfileSlice** - Profile update functionality

## Routing

The application uses React Router for client-side routing with the following main routes:

- `/` - Home page
- `/jobs` - Job listings
- `/dashboard` - User dashboard
- `/post/application/:jobId` - Job application form
- `/register` - User registration
- `/login` - User login

## Environment Variables

The following environment variables can be configured:

- `VITE_BACKEND_URL` - Backend API URL (default: http://localhost:4000)

## API Integration

The frontend communicates with the backend API using Axios. All API calls are centralized in Redux slices with proper error handling and loading states.

## Styling

The application uses CSS for styling with a responsive design approach. The main stylesheet is located in `src/App.css`.

## Components

### Main Components
- **Navbar** - Navigation component
- **Footer** - Footer component
- **Home** - Landing page
- **Jobs** - Job listings page
- **Dashboard** - User dashboard
- **Login/Register** - Authentication forms

### Features
- Responsive design for mobile and desktop
- Loading spinners for async operations
- Toast notifications for user feedback
- Form validation and error handling

## Development Guidelines

1. Follow React best practices
2. Use functional components with hooks
3. Implement proper error boundaries
4. Write clean, readable code
5. Use meaningful component and variable names
6. Implement proper loading states

## Building for Production

To build the application for production:

1. Run the build command:
   ```bash
   npm run build
   ```

2. The built files will be in the `dist` directory

3. Deploy the contents of the `dist` directory to your hosting platform

## Browser Support

The application supports modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the ISC License.