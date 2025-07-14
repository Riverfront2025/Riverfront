import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopupForm from "./Popup";

// Types
type BuyProperty = {
  image: string;
  title: string;
  location: string;
  roi: string;
  paymentPlan: string;
  locationDetails: string;
  design: string;
  description: string;
  handover: string;
};

type SellProperty = {
  image: string;
  title: string;
  features: string[];
};

type PropertyType = BuyProperty | SellProperty;

// Data
const buyProperties: BuyProperty[] = [
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp",
    title: "Marina Living",
    location: "Dubai Marina",
    roi: "7–8%",
    paymentPlan: "Post-handover payment plan – 30% over 2 years",
    locationDetails:
      "Parallel to Sheikh Zayed Road, 5 minutes to Jumeirah Beach",
    design: "Designed in the style of American resorts of Miami",
    description:
      "One of the last new developments in the area with growing capital value – Dubai Marina. Just a few minutes’ away from Marina Beach, Ain Dubai, and the world-famous promenade, The Walk.",
    handover: "June 30, 2025",
  },
];

const sellProperties: SellProperty[] = [
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp",
    title: "Binghatti Azure",
    features: [
      "1BHK",
      "Size 700sqft",
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

const rentProperties: SellProperty[] = [
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp",
    title: "Binghatti Lavender",
    features: [
      "1BHK",
      "Size 763 sqft.",
      "2 bathrooms",
      "1 spacious balcony",
      "Open kitchen",
      "Built-in wardrobe",
      "Road view",
      "1 covered parking",
      "Ready to move",
      "Asking 75k with 4 cheques final",
    ],
  },
];

const TABS = ["Buy", "Sell", "Rent", "Offplan"] as const;
type Tab = (typeof TABS)[number];

const Property = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Sell");
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const getProperties = (): PropertyType[] => {
    switch (activeTab) {
      case "Buy":
        return buyProperties;
      case "Sell":
        return sellProperties;
      case "Rent":
        return rentProperties;
      default:
        return [];
    }
  };

  const properties = getProperties();
  const currentProperty = properties[index];

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index + 1 < properties.length) setIndex(index + 1);
  };

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-10 px-4  relative">
      <div className="mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-light">
          EXCLUSIVE PROPERTIES
        </h2>
        <p className="text-sm md:text-base font-light text-gray-600 dark:text-gray-400">
          Discover Dubai’s finest with{" "}
          <span className="text-[var(--primary-color)]">RIVERFRONT</span>
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-1 text-sm rounded-full border ${
              activeTab === tab
                ? "bg-[var(--primary-color)] text-black"
                : "border-gray-400 text-gray-500"
            }`}
            onClick={() => {
              setActiveTab(tab);
              setIndex(0);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Property Display */}
      <div className="md:w-11/12 mx-auto">
        {properties.length > 0 ? (
          <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-white/10 rounded-lg overflow-hidden max-h-[500px]">
            {/* Image */}
            <div className="md:w-1/2 w-full h-[240px] md:h-auto overflow-hidden">
              <img
                src={currentProperty.image}
                alt={currentProperty.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details */}
            <div className="md:w-1/2 w-full p-4 flex flex-col justify-between">
              <div className="space-y-2 text-sm">
                <h3 className="text-lg font-semibold mb-2">
                  {currentProperty.title}
                </h3>

                {"features" in currentProperty ? (
                  currentProperty.features.map((item, idx) => (
                    <p key={idx} className="text-gray-700 dark:text-gray-300">
                      • {item}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="text-gray-500">
                      📍 {currentProperty.location}
                    </p>
                    <p>
                      ROI:{" "}
                      <span className="font-medium">{currentProperty.roi}</span>
                    </p>
                    <p>
                      <strong>Location:</strong>{" "}
                      {currentProperty.locationDetails}
                    </p>
                    <p>
                      <strong>Plan:</strong> {currentProperty.paymentPlan}
                    </p>
                    <p>
                      <strong>Design:</strong> {currentProperty.design}
                    </p>
                    <p>{currentProperty.description}</p>
                    <p>
                      <strong>Handover:</strong> {currentProperty.handover}
                    </p>
                  </>
                )}
              </div>

              <div className="mt-4">
                <button
                  onClick={() => setShowPopup(true)}
                  className="bg-[var(--primary-color)] text-black font-sans px-4 py-2 text-lg font-light rounded-full hover:opacity-90 transition"
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
          <div className="flex justify-between mt-6 px-2 sm:px-6 text-sm font-light">
            <button
              onClick={handlePrev}
              disabled={index === 0}
              className="flex items-center gap-2 disabled:opacity-30"
            >
              <ChevronLeft size={18} />
              PREV
            </button>
            <span>
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

      <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default Property;
