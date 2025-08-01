export default function CivilScore() {
  const randomScore = Math.floor(Math.random() * 40) + 60; // 60-100

  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Civil Score</h2>
      <p className={`text-4xl font-bold ${randomScore > 75 ? "text-green-600" : "text-yellow-600"}`}>
        {randomScore}/100
      </p>
      <p className="text-sm text-gray-500 mt-2">
        {randomScore > 75 ? "Low Risk - Eligible for Instant Loan" : "Moderate Risk"}
      </p>
    </div>
  );
}
