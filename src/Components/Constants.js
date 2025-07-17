
export const INITIAL_COUNT=6  
  export const STRING = "string";
  export const OBJECT = "object";
  export const ENIN = "en-IN";

export const SUPABASE_ACCESS_TOKEN = 'accessToken';
export const SESSION_INVALID = "Session verification failed";
export const LOGIN_ERROR = "Login failed";
export const TOKEN_MALFORMED = "Invalid token";
export const CHECKING_SESSION = "Loading...";
export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001';

export const AUTH_ENDPOINTS = {
  GOOGLE_LOGIN: '/auth/google',
  VERIFY: '/auth/verify',
  REFRESH: '/auth/refresh',
  LOGOUT: '/auth/logout',
};

export const ERROR_MESSAGES = {
  NO_TOKEN: 'No authentication token provided',
  NO_REFRESH_TOKEN: 'No refresh token provided',
  NETWORK_ERROR: 'Network error. Please check your connection.',
  LOGIN_FAILED: 'Login failed. Please try again.',
  OAUTH_FAILED: 'Google authentication failed',
  SESSION_CHECK_FAILED: 'Failed to verify session',
  TOKEN_VERIFICATION_FAILED: 'Token verification failed',
  TOKEN_REFRESH_FAILED: 'Session expired. Please login again.',
  LOGOUT_FAILED: 'Logout failed. Please try again.',
};

export const ACCESS_TOKEN = 'accessToken';
export const SESSION_VERIFICATION_FAILED = "Session verification failed";
export const LOGIN_FAILED = "Login failed";
export const INVALID_TOKEN = "Invalid token";
export const LOADING = "Loading...";
