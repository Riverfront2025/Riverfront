import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ListProperty from "../components/ListProperty";
import Nav from "../components/Nav";
import PropertyServices from "../components/Property";
import PopupForm from "../components/Popup";
import ContactSidebar from "../components/ContactSidebar";
import { Phone } from "lucide-react";
import "../index.css";
import { FaWhatsapp } from "react-icons/fa6";

function Landing() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("hasShownPopup");

    if (!hasShownPopup) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("hasShownPopup", "true");
      }, 7000); // 7 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <div>
      <Nav />
      <Hero />
      <PropertyServices />
      <ListProperty />
      <Footer />
      {/* Popup Form */}
      <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <div className=" hidden md:flex">
        <ContactSidebar />
      </div>

      {/* Mobile Bottom Buttons */}
      <div className="fixed bottom-0 left-0 w-full z-50 flex md:hidden">
        <a
          href="tel:+971 47702260"
          className="w-1/2 bg-[var(--primary-color)] text-white text-center py-4 font-semibold hover:bg-red-700 transition-all flex items-center justify-center gap-2"
        >
          <Phone size={20} />
          Call Me
        </a>
        <button className="w-1/2 bg-green-500 text-white text-center py-4 font-semibold  transition-all flex items-center justify-center gap-2">
          <FaWhatsapp size={20} />
          WhatsApp
        </button>
      </div>
    </div>
  );
}

export default Landing;
