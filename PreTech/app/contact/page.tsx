"use client";
import React from "react";

export default function Contact() {
  return (
    <>
     <section className="bg-white py-16 px-6 md:px-20">
  <div className="max-w-3xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-indigo-700 mb-8">Contact Us</h2>
    <p className="text-center text-gray-600 mb-12">
      We'd love to hear from you! Whether you have a question about our services or need support, we’re here to help.
    </p>

    <form className="grid grid-cols-1 gap-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
        <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your Name" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
        <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="you@example.com" />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
        <input type="text" id="subject" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Subject" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
        <textarea id="message" rows={5} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" placeholder="Your message here..."></textarea>
      </div>
      <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-md">Send Message</button>
    </form>
  </div>
</section>
    </>
  );
}