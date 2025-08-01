import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import heroImage from "../assets/dealdone.jpeg";
import ProcessSteps from "./ProcessSteps";
import Footer from "./Footer";
import LoginModal from "./LoginModal";


export default function Home() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
  const [pendingPath, setPendingPath] = useState("");

  const handleProtectedClick = (path) => {
    const user = localStorage.getItem("fundsetuUser");
    if (user) {
      navigate(path);
    } else {
      setPendingPath(path);
      setShowLogin(true);
    }
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
    if (pendingPath) navigate(pendingPath);
  };


useEffect(() => {
  const openModal = () => setShowLogin(true);
  window.addEventListener("openLoginModal", openModal);
  return () => window.removeEventListener("openLoginModal", openModal);
}, []);




  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* ================= HERO SECTION ================= */}
      <section className="pt-28 px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-3">
              Instant Capital for Every{" "}
              <span className="text-blue-600">MSME Dream</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Connect MSMEs with investors and banks instantly. Verified businesses,
              simplified funding, and faster growth.
            </p>

            {/* Top 2 Action Cards */}
            <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
              {/* Loan Card */}
              <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-800 mb-2">I Need a Loan</h3>
                <p className="text-sm text-gray-500 mb-4">
                  MSME owner looking for instant funding
                </p>
                <button
                  onClick={() => handleProtectedClick("/loan")}
                  className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Get Funding Now
                </button>
              </div>

              {/* Investor Card */}
              <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg transition">
                <h3 className="font-semibold text-gray-800 mb-2">I Want to Invest</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Investor/Bank ready to fund MSMEs
                </p>
                <button
                  onClick={() => handleProtectedClick("/invest")}
                  className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Start Investing
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex-1 flex justify-center lg:justify-end">
            <img
              src={heroImage}
              alt="Business Funding"
              className="rounded-2xl shadow-lg max-w-md"
            />
            <div className="absolute top-4 right-4 bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-md">
              ₹50L+ Funded Today
            </div>
          </div>
        </div>
      </section>

      {/* ================= 5-STEP PROCESS ================= */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 mt-20">
        <ProcessSteps />

        {/* ================= CIBIL & GST CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-5xl mx-auto">
          {/* CIBIL Score Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">
              Check CIBIL Score
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              View your business credit score instantly and improve your chances of funding.
            </p>
            <button
              onClick={() => handleProtectedClick("/cibil")}
              className="w-full py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Check Score
            </button>
          </div>

          {/* GST Filing Card */}
          <div className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-gray-800 mb-3 text-lg">
              View GST Filing
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Track your GST filing status and stay compliant without the paperwork.
            </p>
            <button
              onClick={() => handleProtectedClick("/gst-filing")}
              className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
            >
              View Filing
            </button>
          </div>
        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <Footer />

      {/* ================= LOGIN MODAL ================= */}
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onLogin={handleLoginSuccess}
        />
      )}
    </div>
  );
}
