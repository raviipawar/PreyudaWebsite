"use client";
import React from "react";

export default function Services() {
  return (
    <>
     <section className="bg-gray-50 py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Our Services</h2>

    {/* Service List */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
      {[
        { title: "Healthcare Management Platforms", image: "/images/applogo.png" },
        { title: "Educational LMS Solutions", image: "/images/applogo.png" },
        { title: "CRM & ERP Systems", image: "/images/applogo.png" },
        { title: "Mobile & Web App Development", image: "/images/applogo.png" },
        { title: "Cloud & DevOps Services", image: "/images/applogo.png" },
      ].map((service, idx) => (
        <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <img src={service.image} alt={service.title} className="rounded-md mb-4 w-full h-48 object-cover" />
          <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
          <p className="text-gray-600 mb-4">Learn how our solutions empower your business with scalable, efficient, and innovative tools.</p>
          <a href="/contact" className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md text-sm font-medium inline-block">Contact Us</a>
        </div>
      ))}
    </div>

    {/* Happy Clients Section */}
    <div className="mb-20">
      <h3 className="text-2xl font-bold text-indigo-600 mb-6">Our Happy Clients</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {["/images/applogo.png", "/images/applogo.png", "/images/applogo.png"].map((img, idx) => (
          <img key={idx} src={img} alt={`Client ${idx + 1}`} className="rounded-lg shadow-md object-cover w-full h-56" />
        ))}
      </div>
    </div>

    {/* Trusted Clients Logos */}
    <div className="mb-12">
      <h3 className="text-2xl font-bold text-indigo-600 mb-6">Connected & Trusted By</h3>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {["/images/applogo.png", "/images/applogo.png", "/images/applogo.png", "/images/applogo.png"].map((logo, idx) => (
          <img key={idx} src={logo} alt={`Client Logo ${idx + 1}`} className="h-16 object-contain" />
        ))}
      </div>
    </div>
  </div>
</section>

    </>
  );
}
