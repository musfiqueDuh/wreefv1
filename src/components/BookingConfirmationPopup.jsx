// src/components/BookingConfirmationPopup.jsx
import { motion } from 'framer-motion';

// eslint-disable-next-line react/prop-types
const BookingConfirmationPopup = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-sm text-center space-y-4">
        <h2 className="text-2xl font-bold text-green-600">🎉 Your Meeting is Booked Successfully!</h2>
        <p className="text-gray-700">
          You will shortly receive a mail from us with the Google Meet link! Till then, let’s space things up because coffee's gonna be there soon ☕🚀
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg"
        >
          Close
        </button>
      </div>
    </motion.div>
  );
};

export default BookingConfirmationPopup;
