// src/App.jsx
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CTAPage from './pages/CTAPage';
import AppList from './pages/AppList';
import Services from './pages/services-seg';
import { ParallaxProvider } from 'react-scroll-parallax';
import { MantineProvider } from '@mantine/core';

function App() {
  const location = useLocation();

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <ParallaxProvider>
      {location.pathname !== '/cta' && location.pathname !== '/services' && <Navbar />}


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cta" element={<CTAPage />} />
          <Route path="/AppList" element={<AppList />} />
          <Route path="/Services" element={<Services />} />
          {/* Additional routes */}
        </Routes>
      </ParallaxProvider>
    </MantineProvider>
  );
}

export default App;
