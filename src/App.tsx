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
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminLeads from "./pages/admin/Leads";

import AdminListings from "./pages/admin/Listing";
import PrivacyPolicy from "./pages/Privacy";

function AppWrapper() {
  return (
    <>
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
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/riverfront" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="leads" element={<AdminLeads />} />
          <Route path="listings" element={<AdminListings />} />
        </Route>
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
