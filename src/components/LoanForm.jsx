import { useState } from "react";

export default function LoanForm() {
  const [step, setStep] = useState(1);

  // Form data
  const [gst, setGst] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [amount, setAmount] = useState("");
  const [usage, setUsage] = useState("");
  const [file, setFile] = useState(null);

  const steps = [
    { title: "Verify Your Business", desc: "Submit GST & Aadhaar for instant verification" },
    { title: "Submit Loan Request", desc: "Upload contract, breakdown expenses, set amount" },
    { title: "Receive Offers", desc: "Get instant offers from verified investors" },
    { title: "Chat & Negotiate", desc: "Discuss terms directly with investors" },
    { title: "Get Funded", desc: "Receive instant payment confirmation" },
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
        <h1 className="text-2xl font-bold text-gray-800">MSME Loan Dashboard</h1>
        <p className="text-gray-500 text-sm">Follow the 5 steps to request funding</p>
      </div>

      {/* Stepper */}
      <div className="flex justify-center items-start gap-6 mb-10 overflow-x-auto">
        {steps.map((s, index) => (
          <div key={index} className="flex flex-col items-center w-48">
            <div className={`w-9 h-9 flex items-center justify-center rounded-full text-white font-semibold mb-2
              ${index + 1 <= step ? "bg-blue-600" : "bg-gray-300"}`}>
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
          
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Verify Your Business</h2>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">GST Number</label>
                <input
                  type="text"
                  value={gst}
                  onChange={(e) => setGst(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Aadhaar Number</label>
                <input
                  type="text"
                  value={aadhaar}
                  onChange={(e) => setAadhaar(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <button type="submit" className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition">
                Verify & Next
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleNext} className="space-y-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Submit Loan Request</h2>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Loan Amount (₹)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Fund Usage Details</label>
                <textarea
                  value={usage}
                  onChange={(e) => setUsage(e.target.value)}
                  rows="3"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 text-sm font-medium mb-1">Upload Contract / Proof Document</label>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                             file:rounded-lg file:border-0
                             file:text-sm file:font-semibold
                             file:bg-blue-50 file:text-blue-600
                             hover:file:bg-blue-100"
                  required
                />
              </div>

              <div className="flex justify-between">
                <button type="button" onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  Back
                </button>
                <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Submit & Next
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Receive Offers</h2>
              <p className="text-gray-500">Your loan request is now visible to investors and banks.</p>
              <p className="text-green-600 font-medium">💡 Offers will appear here</p>
              <div className="flex justify-between">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  Back
                </button>
                <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Chat & Negotiate</h2>
              <p className="text-gray-500">Chat simulation placeholder for hackathon demo.</p>
              <div className="flex justify-between">
                <button onClick={handleBack} className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
                  Back
                </button>
                <button onClick={handleNext} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Next
                </button>
              </div>
            </div>
          )}

          {step === 5 && (
            <div className="text-center space-y-4">
              <h2 className="text-xl font-semibold text-green-600">Get Funded ✅</h2>
              <p className="text-gray-500">Your loan has been successfully submitted and funded.</p>
              <button onClick={() => setStep(1)} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Start New Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
