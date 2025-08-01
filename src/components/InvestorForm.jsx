import { useState } from "react";

export default function InvestorForm() {
  const [step, setStep] = useState(1);
  const [investorType, setInvestorType] = useState("");
  
  // Private Investor Data
  const [aadhaar, setAadhaar] = useState("");
  const [pan, setPan] = useState("");
  const [email, setEmail] = useState("");

  // Bank/NBFC Data
  const [bankName, setBankName] = useState("");
  const [branchAddress, setBranchAddress] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [officerName, setOfficerName] = useState("");
  const [officerEmail, setOfficerEmail] = useState("");
  const [officerPhone, setOfficerPhone] = useState("");
  const [bankDoc, setBankDoc] = useState(null);

  // Offer Details
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");
  const [terms, setTerms] = useState("");

  const steps = [
    { title: "Select Investor Type", desc: "Choose Private, Bank or NBFC" },
    { title: "Verification", desc: "Complete required verification form" },
    { title: "Browse Opportunities", desc: "View verified MSME loan requests" },
    { title: "Make Offers", desc: "Set amount, interest rate & terms" },
    { title: "Complete Payment", desc: "Finalize the deal with proof" },
  ];

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 5) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col py-10 px-4">

      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Investor Dashboard</h1>
        <p className="text-gray-500 text-sm">Follow 5 steps to start investing in MSMEs</p>
      </div>

      {/* Stepper */}
      <div className="flex justify-center items-start gap-6 mb-10 overflow-x-auto">
        {steps.map((s, index) => (
          <div key={index} className="flex flex-col items-center w-48">
            <div className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-semibold mb-2
              ${index + 1 <= step ? "bg-green-600" : "bg-gray-300"}`}>
              {index + 1}
            </div>
            <p className="font-medium text-gray-800 text-center text-sm">{s.title}</p>
            <p className="text-xs text-gray-500 text-center mt-1">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="flex justify-center">
        <div className="bg-white shadow-lg rounded-xl border border-gray-100 p-8 w-full max-w-xl">

          {/* Step 1: Select Investor Type */}
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Select Investor Type</h2>
              
              <div className="space-y-3">
                {["Private Investor", "Bank", "NBFC"].map((type) => (
                  <label key={type} className="flex items-center border rounded-lg px-4 py-3 cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="investorType"
                      value={type}
                      checked={investorType === type}
                      onChange={(e) => setInvestorType(e.target.value)}
                      className="mr-3"
                      required
                    />
                    <span className="font-medium text-gray-700">{type}</span>
                  </label>
                ))}
              </div>

              <button type="submit" className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition">
                Continue
              </button>
            </form>
          )}

          {/* Step 2: Verification (Dynamic) */}
          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                {investorType === "Private Investor" ? "Private Investor Verification" : "Bank/NBFC Verification"}
              </h2>

              {investorType === "Private Investor" && (
                <>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Aadhaar Number</label>
                    <input
                      type="text"
                      value={aadhaar}
                      onChange={(e) => setAadhaar(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">PAN Number</label>
                    <input
                      type="text"
                      value={pan}
                      onChange={(e) => setPan(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                </>
              )}

              {(investorType === "Bank" || investorType === "NBFC") && (
                <>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Bank/NBFC Name</label>
                    <input
                      type="text"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Branch Address</label>
                    <input
                      type="text"
                      value={branchAddress}
                      onChange={(e) => setBranchAddress(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">RBI License / NBFC Registration No.</label>
                    <input
                      type="text"
                      value={licenseNo}
                      onChange={(e) => setLicenseNo(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Authorized Officer Name</label>
                    <input
                      type="text"
                      value={officerName}
                      onChange={(e) => setOfficerName(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Officer Email</label>
                    <input
                      type="email"
                      value={officerEmail}
                      onChange={(e) => setOfficerEmail(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Officer Phone</label>
                    <input
                      type="tel"
                      value={officerPhone}
                      onChange={(e) => setOfficerPhone(e.target.value)}
                      className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-1">Upload Authorization Document (PDF)</label>
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => setBankDoc(e.target.files[0])}
                      className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                             file:rounded-lg file:border-0
                             file:text-sm file:font-semibold
                             file:bg-green-50 file:text-green-600
                             hover:file:bg-green-100"
                      required
                    />
                  </div>
                </>
              )}

              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  Back
                </button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Submit & Next
                </button>
              </div>
            </form>
          )}

          {/* Step 3: Browse Opportunities */}
          {step === 3 && (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Browse Opportunities</h2>
              <p className="text-gray-500">View MSME loan requests (demo for hackathon)</p>
              <div className="bg-gray-100 rounded-lg p-6 text-gray-600">Loan Requests will appear here</div>
              
              <div className="flex justify-between">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  Back
                </button>
                <button onClick={handleNext} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Next
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Make Offers */}
          {step === 4 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Make an Offer</h2>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Investment Amount (₹)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Interest Rate (%)</label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Terms & Conditions</label>
                <textarea
                  value={terms}
                  onChange={(e) => setTerms(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  Back
                </button>
                <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                  Submit Offer
                </button>
              </div>
            </form>
          )}

          {/* Step 5: Complete Payment */}
          {step === 5 && (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold text-green-600">Payment Completed ✅</h2>
              <p className="text-gray-500">You have successfully funded an MSME loan.</p>
              <button onClick={() => setStep(1)} className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
                Fund Another MSME
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
