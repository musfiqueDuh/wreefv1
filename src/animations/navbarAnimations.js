// navbarAnimations.js

export const navbarVariants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const linkVariants = (index) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index, duration: 0.5, ease: "easeOut" },
  },
  whileHover: {
    color: '#ffffff',
    textShadow: '0px 0px 8px rgba(255, 255, 255, 0.8)',
    scale: 1.05, // Slight scaling effect
    transition: { duration: 0.3 },
  },
});

export const buttonVariants = {
  hover: {
    scale: 1.1,
    boxShadow: "0px 0px 12px rgba(255, 102, 0, 2.0)", // Softer shadow with less opacity
    backgroundColor: "#ff7a33", // Slightly lighter orange to differentiate from shadow
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  tap: { scale: 0.95 },
};