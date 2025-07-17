// components/Brand.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay } from '@fortawesome/free-solid-svg-icons';

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-10 h-10 rounded-lg flex items-center justify-center">
        <FontAwesomeIcon icon={faCalendarDay} style={{ color: '#ffffff' }} size="lg" />
      </div>
      <h1 className="text-xl font-bold text-gray-900 tracking-tight">Calendar AI</h1>
    </div>
  );
}

export default Brand;
