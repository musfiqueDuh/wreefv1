// src/components/SignUpForm.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import BookingConfirmationPopup from './BookingConfirmationPopup';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    meetingDate: "",
    purpose: "",
    notes: ""
  });

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "meetingBookings"), formData);
      setFormData({ name: "", email: "", meetingDate: "", purpose: "", notes: "" });
      setIsPopupVisible(true);
    } catch (error) {
      console.error("Error booking meeting: ", error);
      alert("There was an error booking the meeting.");
    }
  };

  return (
    <>
      {isPopupVisible && <BookingConfirmationPopup onClose={() => setIsPopupVisible(false)} />}

      <div className="flex flex-col items-center justify-center w-full lg:h-screen bg-violet-100 p-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">Book a Meeting</h2>
          <p className="text-gray-500 text-xs lg:text-sm mt-1">
            Enter your details to book a session with us
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white p-4 lg:p-8 rounded-lg shadow-lg space-y-6"
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <label className="text-xs lg:text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Your Name"
                required
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <label className="text-xs lg:text-sm font-medium text-gray-600">Email address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="you@example.com"
                required
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
              <label className="text-xs lg:text-sm font-medium text-gray-600">Meeting Date & Time</label>
              <input
                type="datetime-local"
                name="meetingDate"
                value={formData.meetingDate}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <label className="text-xs lg:text-sm font-medium text-gray-600">Purpose of Meeting</label>
              <select
                name="purpose"
                value={formData.purpose}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                required
              >
                <option value="">Select a Purpose</option>
                <option value="Consultation">Consultation</option>
                <option value="Project Discussion">Project Discussion</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
              <label className="text-xs lg:text-sm font-medium text-gray-600">Additional Notes</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="Any additional information..."
                rows="3"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.button>
          </form>
        </motion.div>

        <div className="text-center mt-4 lg:mt-6">
          <p className="text-xs lg:text-xs text-gray-500">
            By booking, you agree to our{' '}
            <a href="#" className="underline text-violet-500">Privacy Policy</a> and{' '}
            <a href="#" className="underline text-violet-500">Terms of Service</a>.
          </p>
          <a href="/" className="text-violet-600 font-semibold text-sm mt-2 block">
            Go back to Homepage
          </a>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
