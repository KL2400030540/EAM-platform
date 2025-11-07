// src/pages/Dashboard.tsx
import React, { useEffect, useState } from 'react';

// Define types
interface Event {
  id: number;
  name: string;
  date: string;
  description: string;
}

interface Activity {
  id: number;
  name: string;
  day: string;
  time: string;
  location: string;
}

export default function Dashboard() {
  const [events, setEvents] = useState<Event[]>([]);
  const [activities, setActivities] = useState<Activity[]>([]);
    useEffect(() => {
    // Fetch Events
    fetch('/api/events/upcoming')
      .then(r => r.json())
      .then(data => setEvents(data))
      .catch(() => setEvents([]));

    // Fetch Activities
    fetch('/api/activities')
      .then(r => r.json())
      .then(data => setActivities(data))
      .catch(() => setActivities([]));
  }, []);

  return (
    <div style={{ padding: '30px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '2.8rem', color: '#1e40af', marginBottom: '30px', fontWeight: 'bold' }}>
        Student Dashboard
      </h1>

      <div style={{
      <div style={{
        background: 'white',
        borderRadius: '20px',
        padding: '35px',
        maxWidth: '1000px',
        margin: '0 auto',
        boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
        border: '4px solid #3b82f6'
      }}>
        <h2 style={{ color: '#1e40af', fontSize: '2rem', marginBottom: '30px' }}>
          Upcoming Events & Activities
        </h2>

        {/* Events Section */}
        <div style={{ marginBottom: '40px' }}>
          <h3 style={{ color: '#1e40af', fontSize: '1.5rem', marginBottom: '15px' }}>Events</h3>
          {events.length === 0 ? (
            <p style={{ color: '#666', fontStyle: 'italic' }}>No upcoming events.</p>
          ) : (
            events.map(event => (
              <div key={event.id} style={{
                background: '#dbeafe',
                padding: '18px',
                margin: '12px 0',
                borderRadius: '12px',
                border: '2px solid #3b82f6',
                boxShadow: '0 4px 10px rgba(59,130,246,0.1)'
              }}>
                <strong style={{ fontSize: '1.2rem', color: '#1e40af' }}>{event.name}</strong>
                <br />
                <span style={{ color: '#1e40af', fontWeight: '600' }}>
                  {new Date(event.date).toLocaleDateString('en-IN', {
                    day: 'numeric', month: 'long', year: 'numeric'
                  })}
                </span>
                <br />
                <small style={{ color: '#1e293b' }}>{event.description}</small>
              </div>
            ))
          )}
        </div>

        {/* Activities Section */}
        <div>
          <h3 style={{ color: '#166534', fontSize: '1.5rem', marginBottom: '15px' }}>Clubs & Sports</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>
            {activities.length === 0 ? (
              <p style={{ color: '#666', gridColumn: '1 / -1' }}>No activities available.</p>
            ) : (
              activities.map(activity => (
                <div key={activity.id} style={{
                  background: '#f0fdf4',
                  padding: '18px',
                  borderRadius: '12px',
                  border: '2px solid #10b981',
                  boxShadow: '0 4px 10px rgba(16,185,129,0.15)'
                }}>
                  <strong style={{ color: '#166534', fontSize: '1.1rem' }}>{activity.name}</strong>
                  <br />
                  <span style={{ color: '#065f46' }}>
                    {activity.day} • {activity.time.slice(0, 5)} • {activity.location}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
