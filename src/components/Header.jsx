import { useState, useEffect } from "react";
import CivilScore from "./CivilScore";
import GSTFiling from "./GSTFiling";

export default function Header() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("fundsetuUser");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = () => {
    const name = prompt("Enter your name:");
    const phone = prompt("Enter your phone number:");
    const gst = prompt("Enter your GST number:");
    
    if (name && phone && gst) {
      const newUser = { name, phone, gst };
      localStorage.setItem("fundsetuUser", JSON.stringify(newUser));
      setUser(newUser);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("fundsetuUser");
    setUser(null);
    setActiveTab("");
  };

  return (
    <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">FundSetu</div>
      
      <div className="flex items-center gap-4">
        {!user ? (
          <button 
            onClick={handleLogin} 
            className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        ) : (
          <>
            <button
              onClick={() => setActiveTab("civil")}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === "civil" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Civil Score
            </button>

            <button
              onClick={() => setActiveTab("gst")}
              className={`px-4 py-2 rounded-lg transition ${
                activeTab === "gst" ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              GST Filing
            </button>

            <button
              onClick={handleLogout}
              className="ml-3 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>

      {/* Right-side Panel Simulation */}
      {user && (
        <div className="absolute top-20 right-8 bg-white shadow-lg border rounded-xl p-6 w-80">
          {activeTab === "civil" && <CivilScore />}
          {activeTab === "gst" && <GSTFiling />}
        </div>
      )}
    </header>
  );
}
