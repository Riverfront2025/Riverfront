import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import hero from "../assets/hero.png";

const baseURL = import.meta.env.VITE_API_BASE_URL;

function Hero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string>("");
  const [interest, setInterest] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email.");
      return;
    }

    setEmailError("");
    setLoading(true);

    const payload = { name, email, phone, interest };

    try {
      const res = await fetch(`${baseURL}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setSuccessMsg("Thanks! We’ll reach out shortly.");
        setName("");
        setEmail("");
        setPhone("");
        setInterest("");

        setTimeout(() => setSuccessMsg(""), 3000);
      } else {
        console.error("❌ Submission failed:", data.message);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-16 px-6 md:px-16"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative w-11/12 mx-auto py-8 rounded-lg flex flex-col md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full md:w-2/3 space-y-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            INVEST IN DUBAI <br /> REAL ESTATE WITH{" "}
            <span className="text-[var(--primary-color)]">RIVERFRONT</span>
          </h1>
          <p className="text-xl font-medium">
            We bring Due Diligence at Your service
          </p>
          <ul className="list-disc list-inside text-white/80 text-base">
            <li>Verified property listings</li>
            <li>Top investment opportunities</li>
            <li>Trusted local expertise</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="w-full md:w-1/3 bg-white/90 dark:bg-white/10 p-6 rounded-lg shadow-md backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Get in Touch
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 dark:border-white/20 rounded bg-white dark:bg-black text-black dark:text-white"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 dark:border-white/20 rounded bg-white dark:bg-black text-black dark:text-white"
            />
            {emailError && (
              <p className="text-sm text-red-500 -mt-2">{emailError}</p>
            )}

            <PhoneInput
              country={"ae"}
              value={phone}
              onChange={(value) => setPhone(value)}
              inputProps={{ required: true, name: "phone" }}
              containerClass="w-full"
              inputClass="!w-full !bg-white dark:!bg-black !text-black dark:!text-white !border !border-gray-300 dark:!border-white/20 !rounded !pl-14 !py-3"
              buttonClass="!bg-transparent !border-none !left-3"
              dropdownClass="!bg-white dark:!bg-black !text-black dark:!text-white"
            />

            <select
              required
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full p-3 border border-gray-300 dark:border-white/20 rounded bg-white dark:bg-black text-black dark:text-white"
            >
              <option value="">Interested In</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
              <option value="rent">Rent</option>
              <option value="offplan">Off-plan</option>
            </select>

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-[var(--primary-color)] text-white py-3 rounded hover:opacity-90 transition ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {successMsg && (
              <p className="text-green-600 text-center text-sm">{successMsg}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Hero;
