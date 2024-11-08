// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CTAPage from './pages/CTAPage';
import Testimonials from './components/InitialTestimonial';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  const location = useLocation();

  return (
    <ParallaxProvider>
      {location.pathname !== '/cta' && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cta" element={<CTAPage />} />
        {/* Additional routes */}
      </Routes>
    </ParallaxProvider>
  );
}

export default App;
