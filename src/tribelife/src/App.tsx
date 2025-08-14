import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TribeLifeHome from './tribelife/Home';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tribelife" element={<TribeLifeHome />} />
      </Routes>
    </Router>
  );
}
