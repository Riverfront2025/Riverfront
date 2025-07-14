import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ListProperty from "../components/ListProperty";
import Nav from "../components/Nav";
import PropertyServices from "../components/Property";
import PopupForm from "../components/Popup";

function Landing() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 7000); // 7 seconds

    return () => clearTimeout(timer); // Cleanup on unmount
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
    </div>
  );
}

export default Landing;
