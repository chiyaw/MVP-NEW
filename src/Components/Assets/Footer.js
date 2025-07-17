import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <footer
      className={`bg-white border-t mt-10 ${
        !isLoggedIn ? 'fixed bottom-0 left-0 w-full z-30' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-1 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center">
         




          <div className="flex space-x-8 text-gray-500">
          <Link to="/termsandcondition" className="text-sm hover:underline">
            Terms and Conditions
          </Link>
          
          <Link to="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </Link>
          </div>





          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <h2 className="text-lg font-bold text-gray-500">Get Connected</h2>
            <div className="flex space-x-6 items-center">
              <a
                href="mailto:shhreyasrivastava@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-red-500 transition-colors text-2xl"
              >
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a
                href="https://www.linkedin.com/in/shreya-s-08b2bb214/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 transition-colors text-2xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/chiyaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black transition-colors text-2xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
