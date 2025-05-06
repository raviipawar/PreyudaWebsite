import { NewsletterForm } from "./NewsletterForm";
<NewsletterForm />
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">

        <div>
          <h4 className="text-xl font-bold mb-4">About Us</h4>
          <p className="text-gray-400 text-sm">
            We provide innovative services in healthcare, education, and wellness. Our mission is to improve lives through technology and compassion.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Services</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="/services" className="hover:underline">Healthcare Solutions</a></li>
            <li><a href="/services" className="hover:underline">E-Learning Platforms</a></li>
            <li><a href="/services" className="hover:underline">Yoga Programs</a></li>
            <li><a href="/services" className="hover:underline">Software Solutions</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Quick Links</h4>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/careers" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Contact Us</h4>
          <p className="text-gray-400 text-sm">Email: contact@mybusiness.com</p>
          <p className="text-gray-400 text-sm">Phone: +91-9876543210</p>
          <p className="text-gray-400 text-sm">Location: Pune, India</p>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Stay Connected</h4>
          <form className="mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-3 py-2 rounded bg-gray-800 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="w-full mt-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm font-medium"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.75v2.5h.06c.66-1.25 2.27-2.57 4.69-2.57 5.01 0 5.93 3.29 5.93 7.58V24h-5V14.5c0-2.25-.04-5.15-3.14-5.15-3.14 0-3.62 2.45-3.62 4.98V24h-5V8z"/></svg>
            </a>
            <a href="#" className="hover:text-gray-300" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5C19.2 2 21 3.8 21 6.25v11.5C21 20.2 19.2 22 16.75 22h-8.5C4.8 22 3 20.2 3 17.75V6.25C3 3.8 4.8 2 7.25 2zm8.5 1.5h-8.5c-1.31 0-2.25.94-2.25 2.25v11.5c0 1.31.94 2.25 2.25 2.25h8.5c1.31 0 2.25-.94 2.25-2.25V5.75c0-1.31-.94-2.25-2.25-2.25zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-.88a.88.88 0 110 1.75.88.88 0 010-1.75z"/></svg>
            </a>
          </div>
        </div>

      </div>
      <div className="text-center text-gray-500 text-xs mt-10">&copy; {currentYear} Preyuda Technologies. All rights reserved.</div>
    </footer>
  );
}
