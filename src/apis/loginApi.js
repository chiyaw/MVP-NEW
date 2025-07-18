import axios from 'axios';
import { GOOGLE_CALLBACK_URL } from "../settings"

export const verifySession = async (token) => {
  if (!GOOGLE_CALLBACK_URL || 'https://www.fluto.life/googleLogin/api/auth/google-login') {
    throw new Error('Google callback URL is not defined');
  }
  return await axios.get(GOOGLE_CALLBACK_URL || 'https://www.fluto.life/googleLogin/api/auth/google-login', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const handleGoogleLogin = async (credential) => {
  if (!GOOGLE_CALLBACK_URL || 'https://www.fluto.life/googleLogin/api/auth/google-login') {
    throw new Error('Google callback URL is not defined');
  }
  const response = await axios.post(
    GOOGLE_CALLBACK_URL,
    { token: credential }
  );
  return response.data.accessToken;
};