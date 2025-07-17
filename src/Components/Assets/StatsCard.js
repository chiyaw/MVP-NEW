import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

function StatsCard() {
  return (
    <div className='mt-6 mx-auto w-[60%]'>
        <div className="grid grid-cols-1  gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Upcoming Events</p>
                    <p className="text-2xl font-bold text-gray-900">Number of events</p>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-lg">
                  <FontAwesomeIcon icon={faCalendar} className='w-6 h-6 text-blue-600'/>
                  </div>
                </div>
              </div>
{/*               
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">AI Summaries</p>
                    <p className="text-2xl font-bold text-gray-900">AI Summary</p>
                  </div>
                  <div className="bg-purple-100 p-3 rounded-lg">
                  <FontAwesomeIcon icon={faWandSparkles} className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>



              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Sync</p>
                    <p className="text-2xl font-bold text-gray-900">Blah Blah blah</p>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="w-6 h-6 text-green-600"
                  />
                  </div>
                </div>
              </div> */}


              
            </div>
    </div>
  )
}

export default StatsCard