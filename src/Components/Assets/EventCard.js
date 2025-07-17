import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat} from '@fortawesome/free-solid-svg-icons';

function EventCard() {
  const events = [
    {
      title: 'Event One',
      date: '2025-07-01',
      time: '10:00 AM',
      description: 'This is the first event description.',
      summary: 'Summary of the first event.',
    },
    {
      title: 'Event Two',
      date: '2025-07-02',
      time: '2:00 PM',
      description: 'This is the second event description.',
      summary: 'Summary of the second event.',
    },
    {
      title: 'Event Three',
      date: '2025-07-03',
      time: '6:00 PM',
      description: 'This is the third event description.',
      summary: 'Summary of the third event.',
    },
    {
      title: 'Event Four',
      date: '2025-07-01',
      time: '10:00 AM',
      description: 'This is the fourth event description.',
      summary: 'Summary of the fourth event.',
    },
    {
      title: 'Event Five',
      date: '2025-07-02',
      time: '2:00 PM',
      description: 'This is the fifth event description.',
      summary: 'Summary of the fifth event.',
    },
    {
      title: 'Event Six',
      date: '2025-07-03',
      time: '6:00 PM',
      description: 'This is the sixth event description.',
      summary: 'Summary of the sixth event.',
    },
  ]

  return (
    <div className="p-6">
      <h2 className="text-4xl font-semibold text-gray-900 mb-4 text-center">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-10">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
              </div>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {event.date}
              </span>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-4 h-4 bg-gray-300 rounded-full" />
                <span>{event.time}</span>
              </div>
              {event.description && (
                <p className="text-sm text-gray-500">{event.description}</p>
              )}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-600 rounded-full" />
                    <span className="text-sm font-medium text-purple-900">AI Summary</span>
                  </div>
                  <FontAwesomeIcon icon={faRepeat} className='text-purple-300'/>
                </div>
                <p className="text-sm text-gray-700 mt-2">{event.summary}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventCard
