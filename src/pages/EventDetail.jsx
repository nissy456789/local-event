import React from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import dummyEvents from '../data/events';
import './EventDetail.css';

export default function EventDetail() {
  const { id } = useParams();
  const event = dummyEvents.find((e) => e.id === id);
  const [joined, setJoined] = useState(false);

  if (!event) return <div>イベントが見つかりません</div>;

  return (
    <div className="detail-wrapper">
      <div className="detail-card">
        <img src={event.image} alt={event.title} />
        <h2>{event.title}</h2>
        <p><strong>📅 日時:</strong> {event.date}</p>
        <p><strong>📍 場所:</strong> {event.location}</p>
        <p><strong>📝 説明:</strong> {event.description}</p>
        <p><strong>👤 主催者:</strong> {event.host}</p>
        <p><strong>👥 参加者:</strong> {event.participants.join(', ')}</p>
        <button onClick={() => setJoined(true)} disabled={joined}>
          {joined ? '参加済み' : '参加する'}
        </button>
      </div>
    </div>
  );
}
