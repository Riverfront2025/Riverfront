import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PopupForm from "./Popup";

const properties = [
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp", // Replace with actual image path
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
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp", // Replace with actual image path
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
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp", // Replace with actual image path
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
  {
    image: "https://fnst.axflare.com/community/WEBP/uYHqVeSOBZ.webp", // Replace with actual image path
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
  // Add more property objects as needed
];

const Property = () => {
  const [index, setIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  const handlePrev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const handleNext = () => {
    if (index + 1 < properties.length) setIndex(index + 1);
  };

  const offset = index * 100;

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white py-10 px-4 font-raleway font-thin relative">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-light text-center">
          EXCLUSIVE PROPERTIES
        </h2>
        <p className="text-sm md:text-base font-light text-center text-gray-600 dark:text-gray-400">
          Discover Dubai’s finest with{" "}
          <span className="text-[var(--primary-color)]">RIVERFRONT</span>
        </p>
      </div>

      <div className="md:w-11/12 mx-auto relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${offset}%)` }}
        >
          {properties.map((property, idx) => (
            <div key={idx} className="flex-shrink-0 w-full md:px-4">
              <div className="flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-900 border border-gray-300 dark:border-white/10 rounded-lg overflow-hidden max-h-[500px]">
                {/* Image section */}
                <div className="md:w-1/2 w-full h-[240px] md:h-auto overflow-hidden">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details section */}
                <div className="md:w-1/2 w-full p-4 flex flex-col justify-between">
                  <div className="space-y-2 text-sm">
                    <h3 className="text-lg font-semibold mb-1">
                      {property.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      📍 {property.location}
                    </p>
                    <p>
                      ROI: <span className="font-medium">{property.roi}</span>
                    </p>
                    <p>
                      <strong>Location:</strong> {property.locationDetails}
                    </p>
                    <p>
                      <strong>Plan:</strong> {property.paymentPlan}
                    </p>
                    <p>
                      <strong>Design:</strong> {property.design}
                    </p>
                    <p className="line-clamp-3">{property.description}</p>
                    <p>
                      <strong>Handover:</strong> {property.handover}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      onClick={() => setShowPopup(true)}
                      className="bg-[var(--primary-color)] text-black font-sans px-4 py-2 text-lg font-light rounded-full hover:opacity-90 transition "
                    >
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
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
      </div>
      <PopupForm isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default Property;
