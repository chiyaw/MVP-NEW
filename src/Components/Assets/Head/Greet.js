import React, { useEffect, useState } from 'react';
import LogoutButton from '../../Logout';

function WelcomeUser() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <div className="flex items-center gap-4">
      {isLoggedIn ? (
        <>
          <span className="text-sm text-gray-600 hidden sm:inline-block">Welcome, Username</span>
          <div className="p-2 rounded hover:bg-gray-100 transition-colors" title="Logout">
            <LogoutButton className="text-gray-500" size="lg" />
          </div>
        </>
      ) : (
        <span className="text-sm text-gray-500 italic">
          Please log in to access your calendar.
        </span>
      )}
    </div>
  );
}

export default WelcomeUser;
