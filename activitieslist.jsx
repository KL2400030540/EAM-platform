import React from 'react';

const activities = [
  { id: 1, name: "Basketball Club", day: "Monday", time: "4:00 PM", location: "School Ground" },
  { id: 2, name: "Robotics Workshop", day: "Wednesday", time: "3:30 PM", location: "Lab 3" },
  { id: 3, name: "Drama Club", day: "Friday", time: "4:30 PM", location: "Auditorium" },
  { id: 4, name: "Music Band", day: "Tuesday", time: "5:00 PM", location: "Music Room" },
];

export default function ActivitiesList() {
  return (
    <div>
      {activities.map(act => (
        <div key={act.id} style={{
          background: '#f0fdf4',
          border: '2px solid #10b981',
          borderRadius: '12px',
          padding: '15px',
          margin: '12px 0',
          transition: '0.3s',
        }}>
          <h3 style={{ margin: '0', color: '#166534' }}>{act.name}</h3>
          <p style={{ margin: '8px 0 0', color: '#065f46' }}>
            {act.day} • {act.time} • {act.location}
          </p>
        </div>
      ))}
    </div>
  );
}
