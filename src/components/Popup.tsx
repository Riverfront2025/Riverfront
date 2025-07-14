import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const baseURL = import.meta.env.VITE_API_BASE_URL;

interface PopupFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const PopupForm = ({ isOpen, onClose }: PopupFormProps) => {
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
        setSuccessMsg("Thank you! We’ll get in touch shortly.");
        // Reset form
        setName("");
        setEmail("");
        setPhone("");
        setInterest("");

        // Optionally close modal after 2s
        setTimeout(() => {
          setSuccessMsg("");
          onClose();
        }, 2000);
      } else {
        console.error("❌ Submission failed:", data.message);
      }
    } catch (error) {
      console.error("❌ Network error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center overflow-auto">
      <div className="relative bg-white dark:bg-neutral-900 text-black dark:text-white w-full max-w-lg mx-4 p-6 rounded-lg shadow-lg">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500"
        >
          &times;
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
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
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            required
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
  );
};

export default PopupForm;
