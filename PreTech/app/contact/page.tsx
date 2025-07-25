"use client";
import React from "react";
import { Footer } from "../components/Footer";


export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-white">
      <main className="flex-grow">
        <section className="py-20 px-6 md:px-20 pt-32">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-indigo-400 mb-8">
              Contact Us
            </h2>
            <p className="text-center text-gray-300 mb-12">
              We'd love to hear from you! Whether you have a question about our
              services or need support, we’re here to help.
            </p>

            <form className="space-y-8">
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: " " },
                { id: "email", label: "Email Address", type: "email", placeholder: " " },
                { id: "subject", label: "Subject", type: "text", placeholder: " " },
              ].map((field) => (
                <div className="relative" key={field.id}>
                  <input
                    type={field.type}
                    id={field.id}
                    placeholder={field.placeholder}
                    className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-transparent"
                  />
                  <label
                    htmlFor={field.id}
                    className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-400"
                  >
                    {field.label}
                  </label>
                </div>
              ))}

              {/* Message Textarea */}
              <div className="relative">
                <textarea
                  id="message"
                  rows={5}
                  placeholder=" "
                  className="peer w-full px-4 pt-6 pb-2 text-sm bg-gray-900 text-white rounded-md border border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 placeholder-transparent"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2.5 peer-focus:text-sm peer-focus:text-indigo-400"
                >
                  Message
                </label>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-8 rounded-md transition duration-300 shadow-md hover:shadow-indigo-500/30"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
