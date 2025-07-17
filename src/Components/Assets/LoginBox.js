import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import GoogleLoginButton from '../GoogleLogin.tsx';

function LoginBox() {
  return (
    <div >
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full mx-4">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <FontAwesomeIcon icon={faCalendar} className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Calendar AI</h1>
            <p className="text-gray-600">Sign in to get AI-powered event summaries</p>
          </div>
          
          <GoogleLoginButton/>
        </div>
      </div>
  )
}

export default LoginBox