import { useEffect, useState } from "react";
import { FaUsers, FaNewspaper } from "react-icons/fa";
const baseURL = import.meta.env.VITE_API_BASE_URL;

const Dashboard = () => {
  const [leads, setLeads] = useState(0);
  const [listings, setListings] = useState(0);

  useEffect(() => {
    fetch(`${baseURL}/api/leads`)
      .then((res) => res.json())
      .then((data) => setLeads(data.length));

    fetch(`${baseURL}/api/listing`)
      .then((res) => res.json())
      .then((data) => setListings(data.length));
  }, []);

  return (
    <div className="p-6 space-y-8">
      <h2 className="text-3xl font-bold text-center">📊 Admin Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Leads "
          count={leads}
          icon={<FaUsers />}
          gradient="from-pink-200 to-red-200"
        />
        <StatCard
          title="Property Listings"
          count={listings}
          icon={<FaNewspaper />}
          gradient="from-purple-200 to-indigo-200"
        />
      </div>
    </div>
  );
};

interface StatCardProps {
  title: string;
  count: number;
  icon: React.ReactNode;
  gradient: string;
}

const StatCard = ({ title, count, icon, gradient }: StatCardProps) => (
  <div
    className={`bg-gradient-to-r ${gradient} text-gray-800 p-6 rounded-2xl shadow-md transition transform hover:scale-105`}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="text-4xl">{icon}</div>
      <p className="text-4xl font-bold">{count}</p>
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
  </div>
);

export default Dashboard;
