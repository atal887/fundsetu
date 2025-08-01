import { useState } from "react";

export default function LoginModal({ onClose, onLogin }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [gst, setGst] = useState("");

  const handleSubmit = (e) => {
  e.preventDefault();

  const user = { name, phone, gst };
  localStorage.setItem("fundsetuUser", JSON.stringify(user));

  // 🔹 Notify components to update header instantly
  window.dispatchEvent(new Event("userUpdated"));

  onLogin(user); // updates Home.jsx state
  onClose(); // close modal
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Login / Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            placeholder="GST Number"
            value={gst}
            onChange={(e) => setGst(e.target.value)}
            className="w-full border p-2 rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition font-medium shadow-sm"
          >
            Login
          </button>

          <button
            type="button"
            onClick={onClose}
            className="mt-2 w-full py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-lg transition font-medium shadow-sm"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
