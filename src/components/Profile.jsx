import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  // Constant demo data
  const cibilScore = 739;
  const gstData = [
    { month: "June 2025", status: "Filed" },
    { month: "July 2025", status: "Filed" },
    { month: "August 2025", status: "AI-generated" }
  ];
  const loanRequests = [
    { amount: 300000, status: "Funded", fundedBy: "SBI Bank" }
  ];
  const investments = []; // Empty for MSME demo

  useEffect(() => {
    const storedUser = localStorage.getItem("fundsetuUser");
    setUser(storedUser ? JSON.parse(storedUser) : null);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl font-semibold">
        Please log in to view your profile.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6 lg:px-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Profile</h2>

      {/* User Info */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 flex justify-between items-center mb-10">
        <div>
          <p className="text-gray-800 font-semibold">Name: {user.name}</p>
          <p className="text-gray-600">Phone: {user.phone}</p>
          <p className="text-gray-600">GST Number: {user.gst}</p>
          <p className="text-gray-600 font-medium mt-2">
            CIBIL Score: <span className="text-green-600">{cibilScore}</span>
          </p>
        </div>
        <div className="w-20 h-20 bg-gray-300 rounded-full"></div>
      </div>

      {/* GST Filing Table */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">GST Filing Status</h3>
        <table className="w-full border-collapse">
          <thead className="bg-yellow-600 text-white">
            <tr>
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {gstData.map((g, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">{g.month}</td>
                <td
                  className={`p-3 font-medium ${
                    g.status === "Filed"
                      ? "text-green-600"
                      : g.status === "AI-Generated"
                      ? "text-yellow-600"
                      : "text-red-500"
                  }`}
                >
                  {g.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Loan Requests */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Loan Requests Made</h3>
        <table className="w-full border-collapse">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-3 text-left">Amount</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Funded By</th>
            </tr>
          </thead>
          <tbody>
            {loanRequests.map((l, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">₹{l.amount}</td>
                <td className="p-3 text-green-600 font-medium">{l.status}</td>
                <td className="p-3">{l.fundedBy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Investments Made */}
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 mb-10">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Investments Made</h3>
        <p className="text-gray-500">No investments made for MSME demo.</p>
      </div>
    </div>
  );
}
