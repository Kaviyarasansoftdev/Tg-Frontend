import axios from "axios";

const ENCRYPTION_KEY = "KIRANABAZAAR2025API";

// Set up axios interceptor to handle decryption automatically
const setupDecryption = () => {
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
    // Intercept and decode responses that have the obfuscated format
    if (response.data && response.data.data && typeof response.data.data === 'string') {
      try {
        const [salt, encoded] = response.data.data.split(':');
        const base64Decoded = atob(encoded);
        const fullKey = salt + ENCRYPTION_KEY;
        let decoded = '';
        
        for (let i = 0; i < base64Decoded.length; i++) {
          const keyChar = fullKey[i % fullKey.length].charCodeAt(0);
          const encodedChar = base64Decoded.charCodeAt(i);
          decoded += String.fromCharCode(encodedChar ^ keyChar);
        }
        
        // Replace the response data with the decoded data
        response.data = JSON.parse(decoded);
      } catch (error) {
        console.error('Decoding error:', error);
        // If decoding fails, return original response
        console.warn('Decoding failed, returning original response');
      }
    }
    return response;
  }, function (error) {
    return Promise.reject(error);
  });
};

export default setupDecryption;