"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "../hooks/useTheme";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="/images/applogo.png"
              alt="Preyuda Softwares Logo"
              className="h-16 w-16 rounded-full shadow-md"
            />
            <span className="text-2xl font-bold">PreyudaTech</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`hover:text-indigo-400 transition ${
                pathname === link.href ? "text-indigo-400" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="bg-indigo-600 hover:bg-indigo-700 transition px-4 py-2 rounded-full text-sm font-semibold"
          >
            Get Started
          </a>
        </div>

        {/* Add inside the header next to CTA or nav */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded hover:bg-gray-700 transition md:block hidden"
          title="Toggle Theme"
        >
          {theme === "dark" ? "🌙" : "☀️"}
        </button>

        {/* Hamburger for Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-gray-800 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block py-2 px-2 rounded hover:bg-gray-700 ${
                pathname === link.href ? "text-indigo-400" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block mt-2 px-4 py-2 bg-indigo-600 text-center rounded hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
