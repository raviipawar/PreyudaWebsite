"use client";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      setMessage("");
      return;
    }

    setError("");
    setMessage("🎉 Thank you for subscribing!");
    console.log("Subscribed email:", email); // or call your backend API here
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full px-3 py-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full mt-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium"
      >
        Subscribe
      </button>
      {error && <p className="text-sm text-red-400 mt-2">{error}</p>}
      {message && <p className="text-sm text-green-400 mt-2">{message}</p>}
    </form>
  );
}
