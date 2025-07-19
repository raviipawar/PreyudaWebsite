"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/" },  // Consider fixing duplicate href here
    { name: "Careers", href: "/careers" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ backgroundColor: "rgba(255,255,255,0)" }}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0)",
        boxShadow: scrolled ? "0 2px 12px rgba(0,0,0,0.1)" : "none",
      }}
      transition={{ duration: 0.3 }}
      className="fixed w-full top-0 z-50 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/images/applogo.png"
            alt="Preyuda Softwares Logo"
            className="h-12 w-12 rounded-full shadow-md"
          />
          <span className="font-lexend text-3xl font-extrabold tracking-tight text-indigo-700">
            PreyudaTech
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-10 font-inter text-sm tracking-wide text-gray-700">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ scale: 1.1, color: "#4F46E5" }} // Indigo-600
              className={`cursor-pointer transition-colors duration-200 ${pathname === link.href
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-700"
                }`}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Contact Us button */}
          <a
            href="/contact"
            className="ml-6 px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold shadow-md hover:from-indigo-700 hover:to-indigo-800 transition transform hover:scale-105"
          >
            Get in touch
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="ml-6 p-2 rounded hover:bg-gray-200 transition"
            title="Toggle Theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </nav>

        {/* Mobile menu & theme toggle */}
        <div className="flex items-center md:hidden space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 transition"
            title="Toggle Theme"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>

          <button
            className="text-indigo-600"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white shadow-md overflow-hidden"
          >
            <ul className="flex flex-col space-y-3 p-6 uppercase font-inter text-sm tracking-widest text-indigo-600">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block font-semibold hover:text-indigo-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/contact"
                  className="block mt-4 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 font-semibold text-center shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <style jsx>{`
        .font-lexend {
          font-family: "Lexend", sans-serif;
        }
        .font-inter {
          font-family: "Inter", sans-serif;
        }
      `}</style>
    </motion.header>
  );
}
