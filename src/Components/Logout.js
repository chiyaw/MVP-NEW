import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const LogoutButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const hasToken = !!localStorage.getItem('accessToken');
      setShowButton(hasToken);
    };

    checkAuth();

    const handleStorageChange = () => checkAuth();
    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setShowButton(false);
    window.location.reload();
  };

  if (!showButton) return null;

  return (
    <button 
      onClick={handleLogout}>
      <FontAwesomeIcon icon={faRightFromBracket} /> Logout
    </button>
  );
};

export default LogoutButton;