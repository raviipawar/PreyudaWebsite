"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Hero() {
  const taglines = [
    "Healthcare, Education & Fitness Software Experts",
    "Empowering Growth with Cloud & DevOps",
    "Building Future with Scalable Tech",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const headingVariants = {
    hidden: { opacity: 0, y: 30, letterSpacing: "0.05em" },
    visible: { opacity: 1, y: 0, letterSpacing: "0.12em" },
  };

  const taglineVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="relative bg-cover bg-center bg-no-repeat text-gray-50 py-32 px-6 md:px-12 lg:px-24 min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundAttachment: "fixed",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Animated bubbles */}
      <div className="absolute inset-0 -z-10 pointer-events-none select-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 800 600"
        >
          <circle
            cx="150"
            cy="150"
            r="80"
            fill="rgba(99, 102, 241, 0.3)"
            className="animate-floating"
            style={{ filter: "blur(12px)" }}
          />
          <circle
            cx="650"
            cy="400"
            r="100"
            fill="rgba(99, 102, 241, 0.25)"
            className="animate-floating delay-500"
            style={{ filter: "blur(15px)" }}
          />
          <circle
            cx="400"
            cy="300"
            r="60"
            fill="rgba(147, 197, 253, 0.35)"
            className="animate-floating delay-1000"
            style={{ filter: "blur(10px)" }}
          />
        </svg>
      </div>

      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black opacity-40 -z-5"></div>

      {/* Content */}
      <div className="relative max-w-5xl mx-auto text-center z-10 px-4">
        <motion.h1
          className="text-6xl md:text-7xl font-lexend font-extrabold mb-8 leading-tight tracking-wider"
          variants={headingVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: ["easeIn", "easeOut"] }}
          aria-label="Preyuda Technologies"
        >
          Preyuda Tech
        </motion.h1>

        <div className="text-xl md:text-2xl text-indigo-300 mb-16 min-h-[2em] font-medium tracking-wide">
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              variants={taglineVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.8, ease: ["easeIn", "easeOut"] }}
              className="inline-block"
            >
              {taglines[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <a
            href="/services"
            className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white px-12 py-4 rounded-full font-semibold text-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-500"
          >
            Explore Services
          </a>
        </motion.div>
      </div>

      {/* Floating animation CSS */}
      <style jsx>{`
        @keyframes floating {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-15px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        .animate-floating {
          animation: floating 8s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 2s;
        }
        .delay-1000 {
          animation-delay: 4s;
        }
        .font-lexend {
          font-family: "Lexend", sans-serif;
        }
      `}</style>
    </motion.section>
  );
}
