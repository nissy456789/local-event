import { Link } from 'react-router-dom';
import dummyEvents from '../data/events';
import './EventList.css';

export default function EventList() {
  return (
    <div className="list-container">
      <div className="list-card">
        <h1>イベント一覧</h1>
        <div className="event-grid">
          {dummyEvents.map((event) => (
            <Link to={`/events/${event.id}`} key={event.id} className="event-card">
              <img src={event.image} alt={event.title} />
              <h3>{event.title}</h3>
              <p>📅 {event.date}</p>
              <p>📍 {event.location}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
