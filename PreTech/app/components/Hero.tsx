"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function Hero() {
  const taglines = [
    "Healthcare, Education & Fitness Software Experts",
    "Empowering Growth with Cloud & DevOps",
    "Building Future with Scalable Tech",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white py-28 px-6"
      style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div
        className="relative max-w-4xl mx-auto text-center z-10"
        data-aos="fade-up"
      >
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          Preyuda Technologies
        </h1>

        <p className="text-lg text-indigo-300 mb-8 transition duration-500 ease-in-out">
          {taglines[index]}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/services"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold text-sm"
          >
            Explore Services
          </a>
          <a
            href="/contact"
            className="bg-white text-indigo-700 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold text-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
