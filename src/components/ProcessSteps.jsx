export default function ProcessSteps() {
  const msmeSteps = [
    ["Verify Your Business", "Submit GST & Aadhaar for instant verification"],
    ["Submit Loan Request", "Upload contract, breakdown expenses, set amount"],
    ["Receive Offers", "Get instant offers from verified investors"],
    ["Chat & Negotiate", "Discuss terms directly with investors"],
    ["Get Funded", "Receive instant payment confirmation"],
  ];

  const investorSteps = [
    ["Verify Identity", "Aadhaar verification & investor type selection"],
    ["Browse Opportunities", "View verified MSME loan requests"],
    ["Make Offers", "Set amount, interest rate & terms"],
    ["Negotiate Deal", "Chat with MSME owners directly"],
    ["Complete Payment", "Secure payment with proof confirmation"],
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">How FundSetu Works</h2>
        <p className="text-gray-500 mt-2">Two simple workflows for MSMEs and Investors</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {/* MSME Flow */}
        <div>
          <h3 className="text-xl font-semibold text-blue-600 mb-6">Get Funded in 5 Steps</h3>
          <div className="space-y-4">
            {msmeSteps.map((step, idx) => (
              <div key={idx} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full mr-4">
                  {idx + 1}
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">{step[0]}</p>
                  <p className="text-sm text-gray-500">{step[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Investor Flow */}
        <div>
          <h3 className="text-xl font-semibold text-green-600 mb-6">Invest in 5 Steps</h3>
          <div className="space-y-4">
            {investorSteps.map((step, idx) => (
              <div key={idx} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition">
                <div className="w-8 h-8 flex items-center justify-center bg-green-600 text-white font-bold rounded-full mr-4">
                  {idx + 1}
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">{step[0]}</p>
                  <p className="text-sm text-gray-500">{step[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
