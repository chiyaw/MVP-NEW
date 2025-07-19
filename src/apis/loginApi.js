import axios from 'axios';
import { GOOGLE_CALLBACK_URL } from "../settings"

export const verifySession = async (token) => {
  if (!GOOGLE_CALLBACK_URL) {
    throw new Error('Google callback URL is not defined');
  }
  
  try {
    const response = await axios.get(`${GOOGLE_CALLBACK_URL}/verify`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    console.error('Session verification failed:', error);
    throw error;
  }
};

export const handleGoogleLogin = async (credential) => {
  if (!GOOGLE_CALLBACK_URL) {
    throw new Error('Google callback URL is not defined');
  }

  try {
    const response = await axios.post(
      `${GOOGLE_CALLBACK_URL}/google-login`,
      { token: credential }
    );
    return response.data.accessToken;
  } catch (error) {
    console.error('Login request failed:', error);
    throw error;
  }
};