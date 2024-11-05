
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* We'll add the other routes back once those pages are created */}
      </Routes>
    </>
  );
}

export default App;
