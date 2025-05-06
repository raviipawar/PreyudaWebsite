"use client";
import React from "react";

export default function Contact() {
  return (
    <>
     <section className="bg-white py-16 px-6 md:px-20">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-12">Careers at Preyuda Softwares</h2>
    <p className="text-center text-gray-600 mb-10">Join our mission-driven team and help build the future of digital innovation.</p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {[{
        title: "Frontend Developer",
        department: "Engineering",
        location: "Remote / Pune",
        experience: "4 years",
        type: "Full-Time"
      }, {
        title: "DevOps Engineer",
        department: "Infrastructure",
        location: "Remote / Hyderabad",
        experience: "3-5 years",
        type: "Full-Time"
      }, {
        title: "Product Manager",
        department: "Product",
        location: "Bangalore",
        experience: "5+ years",
        type: "Full-Time"
      }].map((job, idx) => (
        <div key={idx} className="p-6 border rounded-lg shadow hover:shadow-md transition">
          <h3 className="text-2xl font-semibold text-indigo-600 mb-2">{job.title}</h3>
          <p className="text-sm text-gray-500 mb-1"><strong>Department:</strong> {job.department}</p>
          <p className="text-sm text-gray-500 mb-1"><strong>Location:</strong> {job.location}</p>
          <p className="text-sm text-gray-500 mb-1"><strong>Experience:</strong> {job.experience}</p>
          <p className="text-sm text-gray-500 mb-4"><strong>Type:</strong> {job.type}</p>
          <a href="/contact" className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded text-sm font-medium">Apply Now</a>
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
}
