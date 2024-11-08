// src/components/CarouselComponent.jsx
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    {
        src: '/static/rocket.webp', // Replace with actual paths
        caption: "Creativity Meets Automation -Content that works smarter"
    },
    {
        src: '/static/yoman.webp',
        caption: "Keep it ahead of the game."
    },
    {
        src: '/static/wcity.webp',
        caption: "Unleash. Automate. Dominate."
    },
];

const CarouselComponent = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-950 via-transparent to-transparent z-10"></div>

            <AnimatePresence>
                {images.map((image, index) =>
                    index === currentIndex && (
                        <motion.div
                            key={index}
                            className="absolute w-full h-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <img
                                src={image.src}
                                alt="carousel slide"
                                className="object-cover w-full h-full"
                            />
                        </motion.div>
                    )
                )}
            </AnimatePresence>
             
            {/* Caption in top center with overlay */}
            <div className="absolute bottom-20 left-8 z-20 text-white text-6xl font-semibold text-left px-4">
    {images[currentIndex].caption}
</div>
        </div>
    );
};

export default CarouselComponent;
