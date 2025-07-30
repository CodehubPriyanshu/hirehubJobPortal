/**
 * Utility function to extract error message from API response
 * @param {Error} error - The error object from axios
 * @param {string} defaultMessage - Default message if no specific error found
 * @returns {string} - The error message to display
 */
export const getErrorMessage = (error, defaultMessage = "Something went wrong") => {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }
  
  if (error.message) {
    return error.message;
  }
  
  return defaultMessage;
};