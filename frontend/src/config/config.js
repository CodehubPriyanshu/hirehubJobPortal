const config = {
  BACKEND_URL: import.meta.env.VITE_BACKEND_URL || 
               (import.meta.env.PROD ? '/api' : 'http://localhost:4000')
};

export default config;