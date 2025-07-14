import logo from "../assets/Logo for riverfront .png";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-raleway font-light">
      {/* Top Line */}
      <div className="border-t border-gray-600 w-full"></div>

      {/* Footer Content   */}
      <div className="w-11/12 mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="space-y-3">
          <img src={logo} alt="riverfront" className="w-48" />
          <div className="flex gap-4 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-[var(--primary-color)]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-[var(--primary-color)]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <FaXTwitter className="w-5 h-5 hover:text-[var(--primary-color)]" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-[var(--primary-color)]" />
            </a>
          </div>

          {/* as */}
          <div className="flex gap-6 text-xs text-gray-400 mt-6 flex-wrap">
            <a href="/terms" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-white">
              Privacy Policy
            </a>
          </div>

          {/* Bottom */}
          <div className="mt-6 text-xs text-gray-500">
            © {new Date().getFullYear()} RIVERFRONT. All rights reserved.
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Explore</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Insights</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="/why-invest-in-dubai">Why Invest In Dubai</a>
            </li>
            <li>
              <a href="/about-dubai">About Dubai</a>
            </li>
            <li>
              <a href="/buyers-guide">Buyer's Guide</a>
            </li>
            <li>
              <a href="/sellers-guide">Seller's Guide</a>
            </li>
            <li>
              <a href="/relocating-to-dubai">Relocating To Dubai</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Services</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Buy Property</li>
            <li>Sell Property</li>
            <li>Off-plan Investment</li>
            <li>Rental Assistance</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Email: info@riverfront.ae</li>
            <li>Phone: +971 50 123 4567</li>
            <li>Location: Dubai Marina, UAE</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} RIVERFRONT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
