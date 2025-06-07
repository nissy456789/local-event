import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EventList from './pages/EventList';
//import EventDetail from './pages/EventDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventList />} />
      </Routes>
    </Router>
  );
}

export default App;
