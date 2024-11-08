// Navbar.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navbarVariants, linkVariants, buttonVariants } from '../animations/navbarAnimations';

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 w-full z-10  flex justify-between items-center px-8 py-4 bg-pink-50 bg-opacity-0 backdrop-blur-lg border border-white/50 text-white rounded-lg max-w-4xl mx-auto mt-4 shadow-lg"
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >

      <Link to="/" className="text-2xl font-bold">Wriff</Link>

      <motion.ul
        className="flex gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {['Process', 'Services', 'Benefits', 'Testimonials', 'FAQs'].map((item, index) => (
          <motion.li
            key={item}
            variants={linkVariants(index)}
            whileHover="whileHover"
          >
            <Link to={`/${item.toLowerCase()}`} className="hover:text-white">
              {item}
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
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
