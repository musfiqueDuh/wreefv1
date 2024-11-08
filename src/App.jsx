// src/App.jsx

import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CTAPage from './pages/CTAPage';

function App() {
  const location = useLocation();

  return (
    <>
      {/* Render Navbar only if not on CTAPage */}
      {location.pathname !== '/cta' && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cta" element={<CTAPage />} />
        {/* Add additional routes here as you create more pages */}
      </Routes>
    </>
  );
}

export default App;
