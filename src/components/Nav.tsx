import { useState, useEffect } from "react";
import { Sun, Moon, Mail, Phone } from "lucide-react";
// import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/Logo for riverfront .png";

function Nav() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // Common icon classes for hover effect
  const iconBase =
    "p-2 rounded-full transition-transform duration-500 transform hover:rotate-[360deg]";

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-black shadow-md">
      <nav className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="text-xl font-bold dark:text-white">
          <a href="/">
            <img src={logo} alt="Logo" className="w-36 md:w-48" />
          </a>
        </div>

        {/* Right Side Content */}
        <div className="flex items-center gap-4 dark:text-white text-black">
          {/* Desktop Icons and Contact Info */}
          <div className="hidden md:flex items-center gap-4">
            {/* Email */}
            <a
              href="mailto:info@riverfront.ae"
              className={`${iconBase} text-blue-500 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500`}
              title="Email"
            >
              <Mail size={20} />
            </a>
            <span>info@riverfront.ae</span>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />

            {/* Phone */}
            <a
              href="tel:+971507080389"
              className={`${iconBase} text-green-500 hover:bg-green-500 hover:text-white dark:hover:bg-green-500`}
              title="Call"
            >
              <Phone size={20} />
            </a>
            <span>+97147702260</span>

            {/* Divider */}
            <div className="w-px h-6 bg-gray-300 dark:bg-gray-600 mx-2" />
          </div>

          {/* Theme Toggle (Always visible) */}
          <button onClick={() => setDarkMode(!darkMode)} title="Toggle Theme">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
