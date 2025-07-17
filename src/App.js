import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import HomePage from './Components/Assets/HomePage.js';
import PrivacyPolicy from './Pages/privacy.tsx';
import TermsandCondition from './Pages/termsandcondition.tsx';

function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Router>
          <Routes>
            {/* Your main page route */}
            <Route path="/" element={<HomePage/>} />
            
            {/* OAuth callback route - ADD THIS */}
            <Route path="/googlelogin/auth/callback" element={<HomePage/>} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/termsandcondition" element={<TermsandCondition />} />
          </Routes>
        </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;