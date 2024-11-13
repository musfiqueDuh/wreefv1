import { useRef, useEffect } from 'react';
import gsap from 'gsap';

const services = [
  { title: 'Ocean Pollution', description: 'Brief description here.', imageUrl: '/static/carousel--1 (1).jpg' },
  { title: 'Glacier Melting', description: 'Brief description here.', imageUrl: '/static/carousel--1 (2).jpg' },
  { title: 'Forest Clearance', description: 'Brief description here.', imageUrl: '/static/carousel--1 (3).jpg' },
  { title: 'GHG Emissions', description: 'Brief description here.', imageUrl: '/static/carousel--1 (4).jpg' },
  { title: 'GHG Emissions', description: 'Brief description here.', imageUrl: '/static/carousel--1 (4).jpg' },
];

const ServicesSeg = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, delay: index * 0.15, ease: 'power2.out' }
      );
    });
  }, []);

  const handleHover = (index) => {
    gsap.to(cardsRef.current[index], { flexBasis: "35%", duration: 0.4, ease: "power2.out" });
    cardsRef.current.forEach((card, i) => {
      if (i !== index) gsap.to(card, { flexBasis: "20%", duration: 0.4, ease: "power2.out" });
    });
  };

  const handleLeave = () => {
    cardsRef.current.forEach((card) => {
      gsap.to(card, { flexBasis: "25%", duration: 0.4, ease: "power2.inOut" });
    });
  };

  return (
    <div className="flex gap-5 p-10 bg-black">
      {services.map((service, index) => (
        <div
          key={index}
          className="relative flex-1 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
          style={{ flexBasis: "25%", willChange: "flex-basis", height: "500px" }}
          ref={(el) => (cardsRef.current[index] = el)}
          onMouseEnter={() => handleHover(index)}
          onMouseLeave={handleLeave}
        >
          {/* Background Image */}
          <img
            src={service.imageUrl}
            alt={service.title}
            className="w-full h-full object-cover"
          />

          {/* Bottom Overlay for Text Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-black bg-opacity-60 text-white">
            <h3 className="text-2xl font-semibold mb-1">{service.title}</h3>
            <p className="text-sm mb-3">{service.description}</p>
            <button className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-pink-700 transition duration-100 ease-in">
              Explore Problem

            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServicesSeg;
