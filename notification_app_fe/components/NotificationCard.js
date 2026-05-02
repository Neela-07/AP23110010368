'use client';

import './NotificationCard.css';

export default function NotificationCard({ item }) {
  const getBadgeClass = (type) => {
    const typeMap = {
      'Placement': 'placement',
      'Result': 'result',
      'Event': 'event',
    };
    return typeMap[type] || 'placement';
  };

  const formatTimestamp = (timestamp) => {
    try {
      return new Date(timestamp).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch {
      return timestamp;
    }
  };

  return (
    <div className="notification-card">
      <div className="notification-header">
        <span className={`notification-type-badge ${getBadgeClass(item.Type)}`}>
          {item.Type}
        </span>
        <span className="notification-time">{formatTimestamp(item.Timestamp)}</span>
      </div>
      
      <p className="notification-message">{item.Message}</p>
      
      <div className="notification-footer">
        <span className="notification-id">ID: {item.ID}</span>
      </div>
    </div>
  );
}