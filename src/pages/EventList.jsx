import React from 'react';
import './EventList.css';
import { Link } from 'react-router-dom';

const events = [
  {
    id: 1,
    title: '地域清掃イベント',
    image: 'https://placehold.jp/300x200.png?text=Clean+Up',
  },
  {
    id: 2,
    title: '夏祭りフェスティバル',
    image: 'https://placehold.jp/300x200.png?text=Summer+Fest',
  },
  {
    id: 3,
    title: '花火大会',
    image: 'https://placehold.jp/300x200.png?text=Fireworks',
  },
];

export default function EventList() {
  return (
    <div className="event-list-container">
      <h1>イベント一覧</h1>
      <div className="event-list-card">
        <div className="event-grid">
          {events.map(event => (
            <Link to={`/events/${event.id}`} key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
