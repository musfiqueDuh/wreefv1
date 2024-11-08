// src/pages/Home.jsx
import './Home.css';
import { FaWaveSquare, FaArrowRight } from 'react-icons/fa';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom'; // Import Link

const Home = () => {
  return (
    <section className="animated-gradient relative flex items-center justify-center h-screen w-screen">
      {/* Purple Gradient Circles Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10 text-center max-w-7xl px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 leading-tight">
          Bold Content. <br /> Relentless Automation
        </h1>
        <p className="mt-2 text-lg md:text-lg text-gray-300 font-light leading-relaxed max-w-1lg mx-auto">
          Wriff delivers fierce content and seamless automation who won’t settle for average. <br />For the rule-breakers on Instagram, YouTube, and TikTok, and the game-changers in<br /> e-commerce, startups, and tech -ready to make waves.
        </p>

        {/* Button Container */}
        <div className="mt-8 flex gap-4 justify-center">
          {/* Primary CTA Button with Icon */}
          <Link to="/cta"> {/* Wrap with Link component */}
            <button className="flex items-center gap-2 px-6 py-3 bg-violet-400 hover:bg-violet-600 text-white font-semibold rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              <FaWaveSquare />
              Ready to Wave? <FaArrowRight />
            </button>
          </Link>

          {/* Secondary Outline Button with Icon */}
          <button className="flex items-center gap-2 px-6 py-3 border border-white text-white font-semibold rounded-full transition duration-300 ease-in-out hover:bg-white hover:text-black transform hover:scale-105">
            <HiOutlineLightBulb />
            Discover Possibilities
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
