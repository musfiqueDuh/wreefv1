// src/components/AppList.jsx
import { useEffect, useRef } from 'react';
import { FaFacebook, FaTwitter, FaSnapchat, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { Button } from '@mantine/core';
import { gsap } from 'gsap';

const AppList = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    // GSAP infinite scrolling animation
    gsap.to(scrollRef.current, {
      x: '-100%', // Scroll to the left by 100% of the container's width
      duration: 20, // Adjust the duration for scroll speed
      ease: 'linear', // Smooth, consistent scrolling
      repeat: -1, // Loop infinitely
    });
  }, []);

  return (
    <div className="flex justify-center items-center py-12">
      {/* Left: Scrolling Icon Grid */}
      <div className="overflow-hidden flex-1 max-w-md">
        <div ref={scrollRef} className="flex space-x-4">
          {/* Icon Boxes */}
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <FaFacebook size={40} color="#1877F2" />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <FaTwitter size={40} color="#1DA1F2" />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <FaSnapchat size={40} color="#FFFC00" />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <FaLinkedin size={40} color="#0A66C2" />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <FaGoogle size={40} color="#EA4335" />
          </div>
          {/* Duplicate icons to create a seamless loop */}
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <FaFacebook size={40} color="#1877F2" />
          </div>
          <div className="bg-gray-200 p-4 rounded-lg flex justify-center items-center">
            <FaTwitter size={40} color="#1DA1F2" />
          </div>
        </div>
      </div>

      {/* Right: Text and Stats */}
      <div className="flex-1 text-center lg:text-left lg:ml-12">
        <h2 className="text-3xl font-bold mb-4">ALL YOUR ADVERTISING IN ONE PLATFORM</h2>
        <p className="text-5xl font-extrabold text-green-500">500+</p>
        <p className="text-gray-700 text-lg">INTEGRATIONS & TRACKED MEDIA</p>
        <p className="text-5xl font-extrabold text-green-500">17</p>
        <p className="text-gray-700 text-lg">CHANNELS</p>
        <p className="text-5xl font-extrabold text-green-500">ONE</p>
        <p className="text-gray-700 text-lg">PLATFORM</p>
        <p className="text-black font-semibold mt-4">
          DISCOVER THE MINT ADVERTISING RESOURCE MANAGEMENT ECOSYSTEM
        </p>
        <Button
          variant="filled"
          color="green"
          size="lg"
          className="mt-6"
          radius="xl"
        >
          SEE ALL OUR INTEGRATIONS
        </Button>
      </div>
    </div>
  );
};

export default AppList;
