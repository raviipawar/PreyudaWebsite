"use client";
import React from "react";
import { Footer } from "../components/Footer";

export default function Services() {
  const services = [
    { title: "Healthcare Management Platforms", image: "/images/applogo.png" },
    { title: "Educational LMS Solutions", image: "/images/applogo.png" },
    { title: "CRM & ERP Systems", image: "/images/applogo.png" },
    { title: "Mobile & Web App Development", image: "/images/applogo.png" },
    { title: "Cloud & DevOps Services", image: "/images/applogo.png" },
  ];

  return (
    <><section className="bg-[#0B0F19] text-white py-16 px-6 md:px-20 pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-indigo-400 mb-12 transition duration-700 ease-in-out">
          Our Services
        </h2>

        {/* Service List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative group bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-lg shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 overflow-hidden"
            >
              {/* Image with gradient overlay */}
              <div className="relative mb-4 h-48 w-full overflow-hidden rounded-md">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              <h3 className="text-xl font-semibold text-indigo-300 mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 text-center">
                Learn how our solutions empower your business with scalable,
                efficient, and innovative tools.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium transition"
                >
                  Contact Us
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Happy Clients Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-indigo-300 mb-6 text-center">
            Our Happy Clients
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["/images/applogo.png", "/images/applogo.png", "/images/applogo.png"].map(
              (img, idx) => (
                <div key={idx}>
                  <img
                    src={img}
                    alt={`Client ${idx + 1}`}
                    className="rounded-lg shadow-md object-cover w-full h-56 hover:scale-105 transition-transform duration-300" />
                </div>
              )
            )}
          </div>
        </div>

        {/* Trusted Clients Logos */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-indigo-300 mb-6 text-center">
            Connected & Trusted By
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["/images/applogo.png", "/images/applogo.png", "/images/applogo.png", "/images/applogo.png"].map(
              (logo, idx) => (
                <img
                  key={idx}
                  src={logo}
                  alt={`Client Logo ${idx + 1}`}
                  className="h-16 object-contain hover:scale-110 transition-transform duration-300" />
              )
            )}
          </div>
        </div>
      </div>
    </section><Footer /></>
  );
}
