import { useState, useEffect, useRef } from "react";

import one from "../assets/aboutus/3.jpg";
import two from "../assets/aboutus/4.jpg";
import three from "../assets/aboutus/5.jpg";
import four from "../assets/aboutus/7.jpg";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

export const AboutUs = () => {
  const [expanded, setExpanded] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollAmount += 2; // Speed of scrolling
        if (scrollAmount >= scrollContainer.scrollHeight / 2) {
          scrollContainer.scrollTop = 0; // Reset scroll
          scrollAmount = 0;
        } else {
          scrollContainer.scrollTop += 2;
        }
      }
    };

    const interval = setInterval(scrollImages, 10); // Smooth scrolling
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-black font-raleway font-light dark:font-thin">
      <Nav />

      <div className="flex flex-col-reverse md:flex-row items-start gap-10 w-11/12 md:w-5/6 mx-auto py-8">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-4xl text-[var(--primary-color)] mb-4">
            Dubai’s Trusted Real Estate Partner for <br />
            25+ Years
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            At Riverfront, we bring 25 years of expertise to Dubai’s dynamic
            real estate market. From luxury homes to investment properties, our
            seasoned team offers personalized guidance and unmatched local
            insight.
          </p>
          <br />
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            We believe in more than just transactions — we craft seamless,
            stress-free experiences tailored to your goals. Whether you're
            buying, selling, or investing, Riverfront is here to help you make
            confident, informed decisions.
          </p>

          {expanded && (
            <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed mt-4">
              Our success lies in listening, understanding, and delivering
              beyond expectations. Backed by innovation and a deep market
              understanding, we’re proud to be one of Dubai’s leading real
              estate agencies — dedicated to helping you find your perfect
              property.
            </p>
          )}

          <button
            className="mt-4 text-[var(--primary-color)] text-lg font-light"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "See Less" : "Read More"}
          </button>
        </div>

        {/* Right Section - Auto Scrolling Image Gallery */}
        <div
          ref={scrollContainerRef}
          className="md:w-1/2 flex flex-col gap-4 h-[500px] overflow-hidden"
        >
          <div className="flex flex-col gap-4">
            {[...Array(2)].map((_, index) => (
              <div key={index} className="flex flex-col gap-4">
                <img src={one} alt="Office 1" className="w-full rounded-lg" />
                <img src={two} alt="Office 2" className="w-full rounded-lg" />
                <img src={three} alt="Office 3" className="w-full rounded-lg" />
                <img src={four} alt="Office 4" className="w-full rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CEO Message Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 w-11/12 md:w-5/6 mx-auto py-8">
        {/* Left Side - CEO Image */}
        <div className="md:w-1/3">
          <img
            src="https://uniqueproperties.ae/en/uploads/frontend/contents/608933/conversions/ceo_image-resize.webp"
            alt="CEO"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Right Side - CEO Message */}
        <div className="md:w-2/3">
          <h2 className="text-4xl text-[var(--primary-color)] mb-4">
            Message from our CEO,
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            suscipit impedit aliquid pariatur assumenda doloribus? Illo,
            assumenda voluptate? Maiores, necessitatibus?{" "}
          </p>
          <br />
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
            dolorem delectus ratione qui nostrum debitis aperiam et ea magnam
            atque obcaecati nulla, maiores iure necessitatibus voluptates
            ducimus. Alias?{" "}
          </p>
          <br />
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            nobis iusto animi consequuntur eum optio doloribus quasi hic ea
            maxime unde vitae assumenda, a, cumque esse saepe similique. Harum,
            deleniti. Quia officiis, tempore aliquid, minus velit voluptatum,
            maxime labore consequuntur optio quas saepe hic eveniet sit impedit
            dolores possimus.{" "}
          </p>
          <br />
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            Our aim is to be Dubai’s most trusted real estate partner, as we
            grow and introduce new divisions. We are committed to assisting both
            new and existing clients with their property needs in the future.
          </p>
          <br />
          <p className="text-gray-800 dark:text-gray-300 leading-relaxed text-xl">
            It’s all about U.
          </p>
        </div>
      </div>

      {/* Partner Message Section */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-10 w-11/12 md:w-5/6 mx-auto py-8">
        {/* Left Side - CEO Message */}
        <div className="md:w-2/3">
          <h2 className="text-4xl text-[var(--primary-color)] mb-4">
            Message from the Partner,
          </h2>
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            obcaecati iusto odit. Itaque distinctio quam amet adipisci quos
            beatae laudantium ex maxime illo nesciunt! Consectetur deleniti
            officia odio aliquid architecto reprehenderit porro ad pariatur
            quaerat, iusto recusandae delectus quia inventore.{" "}
          </p>
          <br />
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            reiciendis, dicta corrupti totam reprehenderit id aperiam quae
            corporis voluptatem repellendus, harum, minima soluta! Autem a
            nobis, fugiat reprehenderit repudiandae iure.{" "}
          </p>
          <br />
          <p className="text-gray-800 dark:text-gray-300 text-xl leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            ab officia optio veritatis facilis culpa labore tempora magni dolor
            natus praesentium quae, excepturi porro voluptate maxime qui illo
            quam eaque?{" "}
          </p>
          <br />
        </div>

        {/* Right Side - Partner Image */}
        <div className="md:w-1/3">
          <img
            src="https://uniqueproperties.ae/en/uploads/frontend/partners/610578/armin-jalili_image.jpg"
            alt="Partner"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>

      <section className="py-12 bg-white dark:bg-black flex justify-center">
        <div className="w-4/5">
          {" "}
          {/* Whole Section is 75% of screen width */}
          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            {/* Left Section - Contact Details (30%) */}
            <div className="md:col-span-3">
              <h2 className="text-2xl text-[var(--primary-color)] mb-4">
                Contact Us
              </h2>

              {/* Head Office */}
              <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-300">
                Dubai Office's
              </h2>
              <h2 className="text-sm mb-2 font-semibold text-gray-800 dark:text-gray-300">
                Head Office:
              </h2>
              <p className="mb-4 text-gray-800 dark:text-gray-300">
                1703, Damac XL tower, Marasi Drive, Business bay, Dubai, UAE.
              </p>
              <h2 className="text-sm mb-2 font-semibold text-gray-800 dark:text-gray-300">
                Branch Office:
              </h2>
              <p className="mb-4 text-gray-800 dark:text-gray-300">
                1002, Tower A, Prime business center, JVC{" "}
              </p>

              <h2 className="text-xl mb-2 font-semibold text-gray-800 dark:text-gray-300">
                India Office's
              </h2>
              <h2 className="text-sm mb-2 font-semibold text-gray-800 dark:text-gray-300">
                Head Office:
              </h2>
              <p className="text-gray-800 dark:text-gray-300">
                KPD Developers,
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-300">
                Plot # 2, Sanjay Nagar, Gulabi Bagh, Delhi 110007, India
              </p>
              <h2 className="text-sm mb-2 font-semibold text-gray-800 dark:text-gray-300">
                Branch Office:
              </h2>
              <p className="text-gray-800 dark:text-gray-300">
                KPD Developers,
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-300">
                CASA LOTUS House # 4/213 A, Porba Vaddo, Calangute 403516, Goa
              </p>
              <h2 className="text-sm mb-2 font-semibold text-gray-800 dark:text-gray-300">
                Branch Office:
              </h2>
              <p className="text-gray-800 dark:text-gray-300">
                KPD Developers,
              </p>
              <p className="mb-4 text-gray-800 dark:text-gray-300">
                26 Jacranda Marg DLF Phase - , Gurugram, Haryana
              </p>

              {/* Operating Hours */}
              <h3 className="text-lg text-gray-800 dark:text-gray-300 border-b border-gray-300 mb-2 font-semibold">
                Operating Hours
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-4">
                Monday to Friday: 9am - 6pm
                <br />
                Saturdays: 10am - 4pm
              </p>

              {/* Contact Details */}
              <h3 className="text-lg text-gray-800 dark:text-gray-300 border-b border-gray-300 mb-2 font-semibold">
                Reach Us Now
              </h3>
              <p className="text-gray-800 dark:text-gray-300 mb-2 font-sans">
                UAE FREE PHONE: +97147702260
              </p>
              <p className="text-gray-800 dark:text-gray-300 mb-2 font-sans">
                WhatsApp: +971 509863828
              </p>
              <p className="text-gray-800 dark:text-gray-300 mb-2">
                EMAIL:{" "}
                <a
                  href="mailto:info@uniqueproperties.ae"
                  className=" hover:underline"
                >
                  info@riverfront.ae
                </a>
              </p>
            </div>

            {/* Right Section - Google Map (70%) */}
            <div className="md:col-span-7">
              <h3 className="text-lg  text-[var(--primary-color)] mb-2">
                Location
              </h3>
              <div className="w-full h-64 md:h-full rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.668560792657!2d55.264871674024235!3d25.18066683237258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69004a524faf%3A0x13d5b1575adb574a!2sBusiness%20Bay!5e0!3m2!1sen!2sin!4v1744201890505!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }} // ✅ Use object here
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
