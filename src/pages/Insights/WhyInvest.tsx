import { useEffect } from "react";
import HaveAQuestion from "../../components/HaveAQuestion";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

function WhyInvest() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <Nav />

      <img
        src="https://uniqueproperties.ae/en/frontend/assets/images/whyDubai.webp"
        alt=""
        className="mb-8 md:mb-10"
      />

      <section className="mx-auto w-11/12 md:w-5/6  text-justify md:text-center space-y-4 mb-10">
        <h1 className="w-full text-2xl md:text-4xl text-center">
          Where Visionary Investors Find Homes
        </h1>
        <p className="w-full mx-auto">
          Dubai, a modern marvel rising from the desert, captivates with its
          visionary architecture, vibrant cultural scene, and unmatched
          investment opportunities. As home to the world’s busiest international
          airport and headquarters for 70% of Fortune 500 companies, Dubai
          thrives as a global business hub. Renowned for its safety, progressive
          healthcare, and tax-free benefits, the city also boasts a diverse
          population of over 200 nationalities. With groundbreaking
          infrastructure, including iconic landmarks like the Burj Khalifa and
          the futuristic Dubai Future District, Dubai is not just a city—it's a
          thriving investment destination offering security, flexibility, and
          extraordinary returns
        </p>
      </section>

      {/* Do You Know Section */}
      <section className="mx-auto md:w-[90%] w-full mb-12 md:mb-16  px-3">
        <h2 className="text-2xl md:text-3xl  mb-6">Do You Know</h2>
        <ul className="list-disc list-inside space-y-3 text-justify ">
          <li>
            <strong>Record-Breaking October for Dubai Real Estate:</strong>{" "}
            October saw unprecedented achievements in transaction volume,
            mortgages, and off-plan sales, with expectations of a 30% year-end
            growth.
          </li>
          <li>
            <strong>September’s Milestone Transactions:</strong> The sector
            recorded 18,038 deals, with 73% from off-plan properties, ranging in
            value from $34,000 to $75 million.
          </li>
          <li>
            <strong>All-Time High Property Prices:</strong> Prices have
            surpassed 2014 levels, climbing 45% over three years, with 130,000
            transactions anticipated this year.
          </li>
          <li>
            <strong>Continued Growth as 2025 Approaches:</strong> The real
            estate market shows sustained upward momentum alongside cautious
            optimism for the future.
          </li>
          <li>
            <strong>October Price Appreciation:</strong> Property values
            increased 1.73% month-on-month, marking another milestone in a
            record-setting year.
          </li>
          <li>
            <strong>Strong Year-End Trajectory:</strong> Sales transactions are
            on course for a 30% annual growth, supported by robust demand and
            new launches.
          </li>
          <li>
            <strong>Off-Plan Market Boom:</strong> Over 100,000 new residential
            units have been launched so far this year.
          </li>
          <li>
            <strong>Mortgage Record:</strong> A 3.2% increase in mortgage
            transactions brought the total to over 4,300 loans, achieving an
            all-time high.
          </li>
        </ul>
      </section>

      {/* Why Invest in Dubai */}
      <section className="mx-auto md:w-[90%] w-full px-3">
        <h2 className="text-2xl md:text-3xl mb-6">Why Invest in Dubai?</h2>
        <p className="text-justify leading-relaxed mb-4">
          Dubai stands out as a global powerhouse with world-class
          infrastructure, safety, tax-free advantages, and innovative projects
          like the Dubai Future District. Investments here are secure, regulated
          by the Dubai Land Department (DLD) and RERA, with flexible ownership
          options and high returns in prime areas. Dubai offers exceptional
          lifestyle perks, from iconic attractions and pristine beaches to
          crypto-friendly innovation, enabling seamless digital transactions.
          Moreover, it provides incredible value for money, with $1 million
          buying significantly more space compared to cities like New York and
          London.
        </p>
      </section>

      <section className="mx-auto w-full md:w-[90%] px-3 mb-16 grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        {[
          {
            title: "1. Why Dubai?",
            points: [
              "Strategic location connecting East and West",
              "World-class infrastructure and transport",
              "Stable currency and thriving economy",
            ],
          },
          {
            title: "2. Secure Investments",
            points: [
              "Strict regulations by DLD and RERA",
              "Clear property ownership laws",
              "High transparency in transactions",
            ],
          },
          {
            title: "3. Investment Opportunities",
            points: [
              "Lucrative off-plan and ready property options",
              "High rental yields across prime locations",
              "Growing demand for short-term rentals",
            ],
          },
          {
            title: "4. Exceptional Lifestyle",
            points: [
              "Iconic landmarks and luxurious experiences",
              "Top-tier schools, hospitals, and safety",
              "Global culinary and shopping destinations",
            ],
          },
          {
            title: "5. Crypto-Friendly Innovation",
            points: [
              "Support for blockchain and Web3 startups",
              "Crypto-integrated real estate purchases",
              "Government-backed digital innovation zones",
            ],
          },
          {
            title: "6. Value for Money",
            points: [
              "$1M buys significantly more space vs NYC/London",
              "No property tax or capital gains tax",
              "Freehold ownership in various areas",
            ],
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-gray-200 dark:bg-neutral-900 rounded-lg shadow-md p-5 flex flex-col justify-start h-full"
          >
            <h3 className="text-lg md:text-xl font-semibold  mb-3">
              {item.title}
            </h3>
            <ul className="list-disc list-inside space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <HaveAQuestion />

      <Footer />
    </div>
  );
}

export default WhyInvest;
