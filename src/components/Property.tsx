import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopupForm from "./Popup";
import sampleVideo from "../assets/Rent.mp4";
import offplanVideo from "../assets/offplan.mp4";

// Types
type Property = {
  video: string;
  title: string;
  features?: string[]; // for Sell & Rent
  sections?: {
    title: string;
    items: string[];
  }[]; // for Offplan
};

// Sample Data
const sellProperties: Property[] = [
  {
    video: sampleVideo,
    title: "Binghatti Azure",
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
    video: sampleVideo,
    title: "Binghatti Lavender",
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
    video: offplanVideo,
    title: "11 Hills Park",
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

const TABS = ["Sell", "Rent", "Offplan"] as const;
type Tab = (typeof TABS)[number];

const Property = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Sell");
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

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-12 px-4 relative">
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
      <div className="md:w-10/12 mx-auto">
        {properties.length > 0 ? (
          <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 shadow-lg border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden">
            {/* Video */}
            <div className="md:w-1/2 w-full h-[300px] md:h-[550px]">
              <video
                key={`${activeTab}-${index}`}
                className="w-full h-full object-cover rounded-l-xl"
                controls
                muted
                loop
              >
                <source src={current.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Details */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
              <div className="space-y-3 text-sm md:text-base">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {current.title}
                </h3>

                {/* Sell/Rent Features */}
                {current.features &&
                  current.features.map((item, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300">
                      • {item}
                    </p>
                  ))}

                {/* Offplan Sections */}
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
