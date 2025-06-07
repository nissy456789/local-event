// src/pages/EventList.jsx
import React from 'react';

export default function EventList() {
  // 2. ダミーデータを配列で用意
  const events = [
    {
      id: 1,
      title: '地域夏祭り',
      date: '2025-07-20 18:00',
      location: '市民広場',
      description: '毎年恒例の夏祭り。屋台や花火大会があります。'
    },
    {
      id: 2,
      title: '音楽フェスティバル',
      date: '2025-08-05 15:00',
      location: '中央公園',
      description: '地元バンドによる音楽ライブを開催します。'
    },
  ];

  return (
    <div>
      <h1>イベント一覧</h1>
      <ul>
        {events.map(event => (
          <li key={event.id} style={{ marginBottom: '20px' }}>
            <h2>{event.title}</h2>
            <p><strong>🗓️：</strong>{event.date}</p>
            <p><strong>📍：</strong>{event.location}</p>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
