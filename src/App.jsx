import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList';
import EventDetail from './pages/EventDetail';
import './App.css';

function App() {
  return (
    <div className="app-main-container">
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
        <Route path="/events/:id" element={<EventDetail />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
