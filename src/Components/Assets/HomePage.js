import React, { useEffect, useState } from 'react';
import { verifySession } from '../../apis/loginApi';
import Header from './Head/Header';
import StatsCard from './StatsCard';
import Footer from './Footer';
import LoginBox from './LoginBox';

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check for access token in localStorage
    const token = localStorage.getItem('accessToken');
    if (token) {
      // If token exists, verify it with the server
      verifySession(token)
        .then(isValid => {
          setIsLoggedIn(isValid);
          if (!isValid) {
            localStorage.removeItem('accessToken');
          }
        })
        .catch(() => {
          setIsLoggedIn(false);
          localStorage.removeItem('accessToken');
        });
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className='bg-gradient-to-r from-indigo-300 to-purple-300 min-h-screen flex flex-col '>
      <Header/>
      {isLoggedIn ? (
        <>
          <StatsCard/>
          <Footer />
        </>
      ) : (
        <>
          <div className='flex-grow flex justify-center'>
            <div className='flex items-center justify-center h-[80vh] w-[90vh]'>
            <LoginBox />
            </div>
          </div>
          <Footer className='fixed '/>
        </>
      )} 
    </div>
  );
};

export default HomePage;