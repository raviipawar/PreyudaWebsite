"use client";
import Image from "next/image";
import React from "react";
import { Footer } from "../components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0F19] text-white">
      <main className="flex-grow">
        <section className="py-20 px-6 md:px-20 pt-32">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* About Us Heading */}
            <h2 className="text-4xl font-bold text-center text-indigo-400">
              About Preyuda Technologies
            </h2>

            {/* History Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src="/images/history.jpg"
                alt="Company History"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
                  Our Journey
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2015, Preyuda Softwares began as a small tech
                  startup with a vision to revolutionize healthcare, education,
                  and enterprise software. Over the years, we’ve grown into a
                  trusted technology partner for clients globally, driven by
                  innovation, dedication, and customer-first thinking.
                </p>
              </div>
            </div>

            {/* Products & Services Section */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <Image
                src="/images/products.jpg"
                alt="Products and Services"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
                  Our Products & Services
                </h3>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Healthcare Management Platforms</li>
                  <li>Educational Solutions</li>
                  <li>CRM & ERP Systems for SMEs</li>
                  <li>Custom Mobile & Web App Development</li>
                  <li>Cloud Migration & DevOps Services</li>
                </ul>
              </div>
            </div>

            {/* CSR Section */}
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src="/images/csr.jpg"
                alt="CSR Work"
                className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
              />
              <div className="md:w-1/2">
                <h3 className="text-2xl font-semibold text-indigo-300 mb-4">
                  Corporate Social Responsibility
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  At Preyuda Softwares, we believe in giving back. Our CSR
                  initiatives include digital literacy programs for rural youth,
                  free tech bootcamps, and partnerships with NGOs to empower
                  underprivileged communities through technology and education.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
