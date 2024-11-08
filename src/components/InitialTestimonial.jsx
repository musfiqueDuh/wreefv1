// src/components/InitialTestimonial.jsx
import { motion } from 'framer-motion';
import { FaStar, FaRocket, FaHeart, FaBolt } from 'react-icons/fa';

const iconVariants = {
  initial: { y: 0 },
  animate: { y: [0, -20, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
  hover: { scale: 1.2, rotate: 15 },
};

const InitialTestimonial = () => {
  return (
    <section
      className="relative flex items-center justify-center py-24 md:py-32 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #00000 0%, #4A00E0 100%)',
      }}
    >
      {/* Floating Icons */}
      <motion.div
        className="absolute left-60  top-60 text-yellow-500 opacity-70"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaStar size={30} />
      </motion.div>

      <motion.div
        className="absolute right-12 top-20 text-indigo-300 opacity-80"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaRocket size={100} />
      </motion.div>

      <motion.div
        className="absolute left-1/3 bottom-16 text-purple-300 opacity-80"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaHeart size={60} />
      </motion.div>

      <motion.div
        className="absolute right-1/4 bottom-10 text-pink-500 opacity-80"
        variants={iconVariants}
        initial="initial"
        animate="animate"
        whileHover="hover"
      >
        <FaBolt size={120} />
      </motion.div>

      {/* Testimonial Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-5xl text-center px-10 md:px-20"
      >
        <h1 className="text-[200px] font-bold text-white opacity-10 absolute -top-12 left-0 right-0 mx-auto select-none pointer-events-none">
          “
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          className="relative text-4xl md:text-6xl font-extrabold leading-relaxed md:leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400"
        >
          "Wriff has transformed our content game. The automation and strategy they provide have saved us time and brought a consistent, high-quality presence to our platforms. It’s been a game-changer."
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 text-lg md:text-2xl font-medium text-gray-300"
        >
          — John Doe, CEO of GameChangers Inc.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default InitialTestimonial;
