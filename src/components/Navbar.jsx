// Navbar.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { navbarVariants, linkVariants, buttonVariants } from '../animations/navbarAnimations';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full z-10 flex justify-between items-center px-8 py-4 bg-pink-50 bg-opacity-0 backdrop-blur-lg border border-white/50 text-white rounded-lg max-w-4xl mx-auto mt-4 shadow-lg"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      {/* Logo */}
      <Link to="/" className="text-2xl font-bold">Wriff</Link>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Navbar Links */}
      <motion.ul
        className={`lg:flex gap-8 ${isOpen ? 'block' : 'hidden'} lg:block transition-all duration-300 ease-in-out`}
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {['Process', 'Services', 'Benefits', 'Testimonials', 'FAQs'].map((item, index) => (
          <motion.li
            key={item}
            variants={linkVariants(index)}
            whileHover="whileHover"
            className="mt-4 lg:mt-0" // Adds spacing for mobile view
          >
            <Link to={`/${item.toLowerCase()}`} className="hover:text-white">
              {item}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {/* Kick Off Button */}
      <motion.div
        className={`lg:block ${isOpen ? 'block' : 'hidden'} lg:block`} // Show button on mobile when menu is open
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Link to="/kickoff" className="ml-4 bg-violet-500 px-4 py-2 rounded-full text-white font-semibold">
          Kick off
        </Link>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
