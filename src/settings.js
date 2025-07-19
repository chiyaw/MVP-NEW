export const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001';
export const GOOGLE_CALLBACK_URL = `${API_BASE_URL}/googleLogin/api/auth`;

console.log('API Base URL:', API_BASE_URL);
console.log('Google Callback URL:', GOOGLE_CALLBACK_URL);