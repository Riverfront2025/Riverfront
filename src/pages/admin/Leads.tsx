import { useEffect, useState } from "react";
const baseURL = import.meta.env.VITE_API_BASE_URL;

interface ContactRequest {
  _id: string;
  name: string;
  phone: string;
  email: string;
  interest: string;
  createdAt: string;
}

const AdminLeads = () => {
  const [contacts, setContacts] = useState<ContactRequest[]>([]);

  useEffect(() => {
    fetch(`${baseURL}/api/leads`)
      .then((res) => res.json())
      .then((data) => setContacts(data))
      .catch((err) => console.error("Error fetching contact requests:", err));
  }, []);

  return (
    <div className="h-screen bg-black text-white font-raleway flex flex-col p-0">
      {/* Header */}
      <div className="sticky top-5 z-20 bg-black p-4 sm:p-6 border-b border-gray-700">
        <h1 className="text-2xl sm:text-3xl font-bold">Leads</h1>
      </div>

      {/* Table Content */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6">
        {contacts.length === 0 ? (
          <p className="text-gray-400">No contact requests found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse border border-gray-700 text-sm sm:text-base">
              <thead className="bg-[#1e1e1e] text-left">
                <tr>
                  <th className="px-4 py-3 border-b border-gray-700">Name</th>
                  <th className="px-4 py-3 border-b border-gray-700">Email</th>
                  <th className="px-4 py-3 border-b border-gray-700">Phone</th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Interest
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Requested At
                  </th>
                  <th className="px-4 py-3 border-b border-gray-700">
                    Send Mail
                  </th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact._id}
                    className="even:bg-[#111] hover:bg-[#222] transition duration-200"
                  >
                    <td className="px-4 py-3">{contact.name}</td>
                    <td className="px-4 py-3">{contact.email}</td>
                    <td className="px-4 py-3">{contact.phone}</td>
                    <td className="px-4 py-3">{contact.interest}</td>
                    <td className="px-4 py-3">
                      {new Date(contact.createdAt).toLocaleString()}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-blue-400 hover:underline"
                      >
                        Send Mail
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminLeads;
