"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Slideshow = () => {
  const slides = [
    {
      id: 1,
      url: "/assets/image/1.jpg",
      title: "First Slide",
      description: "Description for first slide"
    },
    {
      id: 2,
      url: "/assets/image/2.jpg",
      title: "Second Slide",
      description: "Description for second slide"
    },
    {
      id: 3,
      url: "/assets/image/3.jpg",
      title: "Third Slide",
      description: "Description for third slide"
    },
    {
      id: 4,
      url: "/assets/image/8.jpg",
      title: "First Slide",
      description: "Description for fourth slide"
    },
    {
      id: 5,
      url: "/assets/image/sample.jpg",
      title: "Second Slide",
      description: "Description for fifth slide"
    },
    {
      id: 6,
      url: "/assets/image/OIP.jpg",
      title: "Third Slide",
      description: "Description for sixth slide"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.9
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-[400px] mx-auto h-[500px] rounded-2xl bg-gray-50 shadow-xl">
      {/* Navigation Buttons */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute left-4 top-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/70 transition-colors flex items-center justify-center"
        onClick={() => paginate(-1)}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-4 top-1/2 z-10 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/70 transition-colors flex items-center justify-center"
        onClick={() => paginate(1)}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </motion.button>

      <div className="relative w-full h-full overflow-hidden rounded-2xl">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 200, damping: 30, duration: 1.2 },
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.7}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);
              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="absolute w-full h-full"
          >
            <div className="relative w-full h-full">
              <Image
                width={300}
                height={400}
                src={slides[currentIndex].url}
                alt={slides[currentIndex].title}
                className="w-full h-full object-cover"
                priority
              />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white "
              >
                <h2 className="text-2xl font-bold mb-2 tracking-wide">{slides[currentIndex].title}</h2>
                <p className="text-sm text-white/90 leading-relaxed">{slides[currentIndex].description}</p>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slideshow;