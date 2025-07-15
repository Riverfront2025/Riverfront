import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import PopupForm from "./Popup";

// Import Images
import rent1 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.34 PM.jpeg";
import rent2 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.35 PM.jpeg";
import rent3 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.36 PM (1).jpeg";
import rent4 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.36 PM.jpeg";
import rent5 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.37 PM.jpeg";
import rent6 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.38 PM (1).jpeg";
import rent7 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.38 PM.jpeg";
import rent8 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.39 PM.jpeg";
import rent9 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.40 PM (1).jpeg";
import rent10 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.40 PM.jpeg";
import rent11 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.41 PM (1).jpeg";
import rent12 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.41 PM.jpeg";
import rent13 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.42 PM.jpeg";
import rent14 from "../assets/rent/WhatsApp Image 2025-07-15 at 2.10.43 PM.jpeg";

import sell1 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.31 PM.jpeg";
import sell2 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.32 PM (1).jpeg";
import sell3 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.32 PM.jpeg";
import sell4 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.33 PM.jpeg";
import sell5 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.34 PM.jpeg";
import sell6 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.35 PM.jpeg";
import sell7 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.36 PM.jpeg";
import sell8 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.37 PM (1).jpeg";
import sell9 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.37 PM.jpeg";
import sell10 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.39 PM.jpeg";
import sell11 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.40 PM.jpeg";
import sell12 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.41 PM.jpeg";
import sell13 from "../assets/sell/WhatsApp Image 2025-07-15 at 2.12.42 PM.jpeg";

import offplan1 from "../assets/offplan/11.jpg";
import offplan2 from "../assets/offplan/13.jpg";
import offplan3 from "../assets/offplan/5.jpg";
import offplan4 from "../assets/offplan/8.jpg";
import offplan5 from "../assets/offplan/1.jpg";
import offplan6 from "../assets/offplan/3.jpg";
import offplan7 from "../assets/offplan/7.jpg";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Types
type Property = {
  images: string[];
  title: string;
  features?: string[];
  sections?: {
    title: string;
    items: string[];
  }[];
};

// Sample Data
const sellProperties: Property[] = [
  {
    title: "Binghatti Azure",
    images: [
      sell1,
      sell2,
      sell3,
      sell4,
      sell5,
      sell6,
      sell7,
      sell8,
      sell9,
      sell10,
      sell11,
      sell12,
      sell13,
    ],
    features: [
      "1BHK",
      "Size 700 sqft",
      "Counter kitchen",
      "2 bathrooms",
      "2 balconies",
      "Pool view",
      "Built-in wardrobe",
      "1 covered parking",
      "Ready to move",
      "Asking 1.1M",
    ],
  },
];

const rentProperties: Property[] = [
  {
    title: "Binghatti Lavender",
    images: [
      rent1,
      rent2,
      rent3,
      rent4,
      rent5,
      rent6,
      rent7,
      rent8,
      rent9,
      rent10,
      rent11,
      rent12,
      rent13,
      rent14,
    ],
    features: [
      "1BHK",
      "Size 763 sqft",
      "2 bathrooms",
      "1 spacious balcony",
      "Open kitchen",
      "Built-in wardrobe",
      "Road view",
      "1 covered parking",
      "Ready to move",
      "Asking 75k with 4 cheques",
    ],
  },
];

const offplanProperties: Property[] = [
  {
    title: "11 Hills Park",
    images: [
      offplan1,
      offplan2,
      offplan3,
      offplan4,
      offplan5,
      offplan6,
      offplan7,
    ],
    sections: [
      {
        title: "Area",
        items: ["Studio – 474 to 512 sq.ft", "1 Bedroom – 824 to 831 sq.ft"],
      },
      {
        title: "Types",
        items: [
          "Studio Type A",
          "Studio Type B",
          "1 Bedroom Type C",
          "1 Bedroom Type D",
        ],
      },
      {
        title: "Total Units",
        items: ["558"],
      },
      {
        title: "Amenities",
        items: [
          "Swimming Pool",
          "Gym",
          "Garden",
          "Jogging Track",
          "Basketball Court",
        ],
      },
      {
        title: "Price",
        items: [
          "Starting for Studio – AED 675,000",
          "Starting for 1 BHK – AED 1,155,000",
        ],
      },
    ],
  },
];

const TABS = ["Offplan", "Sell", "Rent"] as const;
type Tab = (typeof TABS)[number];

const Property = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Offplan");
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const getProperties = (): Property[] => {
    switch (activeTab) {
      case "Sell":
        return sellProperties;
      case "Rent":
        return rentProperties;
      case "Offplan":
        return offplanProperties;
      default:
        return [];
    }
  };

  const properties = getProperties();
  const current = properties[index];

  const handlePrev = () => index > 0 && setIndex(index - 1);
  const handleNext = () => index + 1 < properties.length && setIndex(index + 1);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-12 relative">
      {/* Title */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-wide">
          EXCLUSIVE PROPERTIES
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
          Discover Dubai’s finest with{" "}
          <span className="text-[var(--primary-color)] font-medium">
            RIVERFRONT
          </span>
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-3 mb-6 flex-wrap">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setIndex(0);
            }}
            className={`px-5 py-2 text-sm rounded-full border transition-all ${
              activeTab === tab
                ? "bg-[var(--primary-color)] text-black"
                : "border-gray-400 text-gray-500 hover:bg-gray-200 dark:hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Property Display */}
      <div className="w-11/12 md:w-5/6 mx-auto">
        {properties.length > 0 ? (
          <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
            {/* Image Slider */}
            <div className="md:w-1/2 w-full h-[300px] md:h-[550px]">
              <Slider {...sliderSettings}>
                {current.images.map((img, i) => (
                  <div key={i}>
                    <img
                      src={img}
                      alt={`property-${i}`}
                      className="w-full h-[300px] md:h-[550px] object-cover rounded-l-xl"
                    />
                  </div>
                ))}
              </Slider>
            </div>

            {/* Details */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div className="space-y-3 text-sm md:text-base">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {current.title}
                </h3>

                {/* Features (Sell/Rent) */}
                {current.features &&
                  current.features.map((item, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300">
                      • {item}
                    </p>
                  ))}

                {/* Sections (Offplan) */}
                {current.sections &&
                  current.sections.map((section, sIdx) => (
                    <div key={sIdx} className="mt-4">
                      <p className="font-semibold text-[var(--primary-color)] mb-1">
                        {section.title}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                        {section.items.map((item, idx) => (
                          <p
                            key={idx}
                            className="text-gray-700 dark:text-gray-300"
                          >
                            • {item}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-[var(--primary-color)] text-black px-6 py-2 text-base font-medium rounded-full hover:opacity-90 transition-all"
                >
                  Enquire Now
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No properties found</p>
        )}

        {/* Navigation */}
        {properties.length > 1 && (
          <div className="flex justify-between mt-8 px-4 text-sm font-light">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="flex items-center gap-2 disabled:opacity-30"
            >
              <ChevronLeft size={18} />
              PREV
            </button>
            <span className="text-gray-500 dark:text-gray-400">
              {index + 1} / {properties.length}
            </span>
            <button
              onClick={handleNext}
              disabled={index + 1 >= properties.length}
              className="flex items-center gap-2 disabled:opacity-30"
            >
              NEXT
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Popup */}
      <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default Property;
