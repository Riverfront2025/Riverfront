import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import { AboutUs } from "./pages/AboutUs";
import Contact from "./pages/Contact";
import WhyInvest from "./pages/Insights/WhyInvest";
import AboutDubai from "./pages/Insights/AboutDubai";
import BuyerGuide from "./pages/Insights/BuyersGuide";
import SellerGuide from "./pages/Insights/SellersGuide";
import Relocating from "./pages/Insights/Relocating";
import FAQSection from "./pages/Insights/Faq";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/why-invest-in-dubai" element={<WhyInvest />} />
        <Route path="/about-dubai" element={<AboutDubai />} />
        <Route path="/buyers-guide" element={<BuyerGuide />} />
        <Route path="/sellers-guide" element={<SellerGuide />} />
        <Route path="/relocating-to-dubai" element={<Relocating />} />
        <Route path="/faq" element={<FAQSection />} />
      </Routes>
    </Router>
  );
}

export default App;
