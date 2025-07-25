"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "../hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Industry", href: "/" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/" },
    { name: "Industrial Training", href: "/" },
    { name: "Contact Us", href: "/contact" }
    // { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 md:px-10 lg:px-16">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/images/applogo.png"
            alt="Preyuda Softwares Logo"
            className="h-12 w-12 rounded-full shadow-md"
          />
         <span className="font-lexend text-3xl font-extrabold tracking-tight bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
  PreyudaTech
</span>

        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-10 font-inter text-sm tracking-wide text-gray-700">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="cursor-pointer transition-colors duration-200 hover:text-indigo-600"
              // No active styling here
            >
              {link.name}
            </a>
          ))}
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
    </header>
  );
}
