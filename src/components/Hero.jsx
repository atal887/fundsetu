import { useNavigate } from "react-router-dom";
import heroImage from "../assets/dealdone.jpeg";


export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="pt-28 bg-gradient-to-br from-blue-50 to-white px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-3">
            Instant Capital for Every <span className="text-blue-600">MSME Dream</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Connect MSMEs with investors and banks instantly. No paperwork, no delays. 
            Just verified funding for verified businesses.
          </p>

          {/* CTA Cards */}
          <div className="flex flex-col md:flex-row gap-6 justify-center lg:justify-start">
            <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800 mb-2">I Need a Loan</h3>
              <p className="text-sm text-gray-500 mb-4">MSME owner looking for instant funding</p>
              <button
                onClick={() => navigate("/loan")}
                className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Get Funding Now
              </button>
            </div>

            <div className="bg-white shadow-md rounded-xl p-6 w-64 hover:shadow-lg transition">
              <h3 className="font-semibold text-gray-800 mb-2">I Want to Invest</h3>
              <p className="text-sm text-gray-500 mb-4">Investor/Bank ready to fund MSMEs</p>
              <button
                onClick={() => navigate("/invest")}
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
  );
}
