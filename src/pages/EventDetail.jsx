import React from 'react';
import { useParams } from 'react-router-dom';

export default function EventDetail() {
  const { id } = useParams();

  return (
    <div style={{ padding: '20px' }}>
      <h1>イベント詳細ページ</h1>
      <p>イベントID: {id}</p>
      {/* 詳細情報はここに表示します */}
    </div>
  );
}
