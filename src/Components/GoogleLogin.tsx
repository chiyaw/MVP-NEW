import React,{ useEffect, useState } from 'react';
import { GoogleLogin, CredentialResponse } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { verifySession, handleGoogleLogin } from '../apis/loginApi';
import { ACCESS_TOKEN, SESSION_VERIFICATION_FAILED, LOGIN_FAILED, INVALID_TOKEN, LOADING } from './Constants';

const GoogleLoginButton = () => {
  const [initialCheckDone, setInitialCheckDone] = useState(false);
  const [error, setError] = useState(null as string | null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      setInitialCheckDone(true);
      return;
    }

    const verify = async () => {
      try {
        const decoded = jwtDecode(token) as { exp?: number };
        if (!decoded.exp || decoded.exp * 1000 < Date.now()) {
          throw new Error(INVALID_TOKEN);
        }

        await verifySession(token);
      } catch (error) {
        console.error(SESSION_VERIFICATION_FAILED, error);
        localStorage.removeItem(ACCESS_TOKEN);
      } finally {
        setInitialCheckDone(true);
      }
    };

    verify();
  }, []);

  const handleLogin = async (credentialResponse: CredentialResponse) => {
    if (!credentialResponse.credential) {
      setError('No credential received from Google');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const accessToken = await handleGoogleLogin(credentialResponse.credential);
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      window.location.reload();
    } catch (error) {
      console.error(LOGIN_FAILED, error);
      setError(error instanceof Error ? error.message : LOGIN_FAILED);
    } finally {
      setLoading(false);
    }
  };

  if (!initialCheckDone) {
    return <div>{LOADING}</div>;
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {error && (
        <div className="text-red-500 p-2 bg-red-50 rounded-md">
          {error}
        </div>
      )}
      
      <GoogleLogin
        onSuccess={handleLogin}
        onError={() => setError('Failed to initialize Google login')}
        shape="pill"
        theme="filled_blue"
        size="large"
        text="continue_with"
        useOneTap
      />
      
      {loading && (
        <div className="text-blue-500">Signing in...</div>
      )}
    </div>
  );
};

export default GoogleLoginButton;