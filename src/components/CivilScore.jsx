import { useState, useEffect } from "react";

export default function CivilScore() {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);
  const [score, setScore] = useState(null);
  const [fileName, setFileName] = useState("");
  const [loading, setLoading] = useState(false);

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("fundsetuUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  // Simulate score calculation
  const calculateScore = () => {
    setLoading(true);
    setTimeout(() => {
      const randomScore = Math.floor(Math.random() * 300) + 600; // 600-900
      setScore(randomScore);
      setStep(3);
      setLoading(false);
    }, 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 750) return "text-green-600";
    if (score >= 650) return "text-yellow-500";
    return "text-red-500";
  };

  const getTips = () => [
    "Maintain timely GST filings and repayments.",
    "Avoid taking multiple short-term loans at once.",
    "Keep your credit utilization low."
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6 lg:px-12">
      <div className="max-w-2xl mx-auto text-center mb-6">
        <h2 className="text-lg text-gray-600">
          Follow these steps to check your MSME Credit Score
        </h2>
      </div>

      {/* Horizontal stepper with dots on left */}
      <div className="flex justify-center space-x-12 mb-10">
        {["Verify GST", "Upload Statement", "Score Result"].map((label, idx) => (
          <div key={idx} className="flex items-center">
            {/* Dot */}
            <span
              className={`w-3 h-3 rounded-full mr-2 
                ${step >= idx + 1 ? "bg-purple-600" : "bg-gray-300"}`}
            ></span>
            {/* Label */}
            <span
              className={`font-medium ${
                step >= idx + 1 ? "text-purple-700" : "text-gray-500"
              }`}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* Card Container */}
      <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
        
        {/* Step 1 */}
        {step === 1 && user && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Confirm Your GST</h3>
            <p className="mb-4 text-gray-700">
              Please confirm your GST number to proceed.
            </p>
            <p className="font-semibold bg-gray-100 p-3 rounded-lg border text-center mb-6">
              {user.gst}
            </p>
            <button
              onClick={() => setStep(2)}
              className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Confirm
            </button>
          </>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Statement</h3>
            <p className="text-gray-700 mb-4">Upload your latest e-statement for analysis.</p>
            <input
              type="file"
              accept=".pdf,.jpg,.png"
              onChange={handleFileUpload}
              className="block w-full border p-2 rounded-lg mb-3"
            />
            {fileName && <p className="text-sm text-gray-500 mb-4">Uploaded: {fileName}</p>}

            <div className="flex justify-between gap-3">
              <button
                onClick={() => setStep(1)}
                className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                Back
              </button>
              <button
                onClick={calculateScore}
                disabled={!fileName || loading}
                className="flex-1 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition disabled:bg-gray-300"
              >
                {loading ? "Calculating..." : "Next →"}
              </button>
            </div>
          </>
        )}

        {/* Step 3 */}
        {step === 3 && score !== null && (
          <>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Credit Score</h3>
            <p className={`text-4xl font-bold mb-3 ${getScoreColor(score)}`}>{score}</p>

            {score >= 700 ? (
              <>
                <p className="text-green-600 font-semibold mb-2">
                  Great! Your credit score is healthy.
                </p>
                <p className="text-gray-500 text-sm">
                  This score is stored with us and will help you get loans easily.
                </p>
              </>
            ) : (
              <div>
                <p className="text-red-500 font-semibold mb-2">Your score is low.</p>
                <ul className="text-gray-600 mt-2 list-disc list-inside text-left">
                  {getTips().map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            <button
              onClick={() => {
                setStep(1);
                setScore(null);
                setFileName("");
              }}
              className="w-full mt-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Check Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}
