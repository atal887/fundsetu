import { useState } from "react";

export default function GSTFiling() {
  const [months, setMonths] = useState([
    { month: "June 2025", status: "Filed" },
    { month: "July 2025", status: "Filed" },
    { month: "August 2025", status: "Unfiled" },
    { month: "September 2025", status: "Unfiled" },
  ]);

  const [selectedMonth, setSelectedMonth] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [filingCompleted, setFilingCompleted] = useState(false);
  const [summaryData, setSummaryData] = useState(null);

  const handleFileNow = (month) => {
    setSelectedMonth(month);
    setShowPopup(true);
  };

  const startAIChat = () => {
    setShowPopup(false);
    setShowChatbot(true);
    setMessages([
      { sender: "bot", text: `Let's start GST Filing for ${selectedMonth}. Please upload your invoices.` },
    ]);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileUploaded(true);
      setMessages((prev) => [
        ...prev,
        { sender: "user", text: `Uploaded: ${file.name}` },
        { sender: "bot", text: "Processing your invoices... Generating GSTR summary..." },
      ]);

      // Simulate AI processing
      setTimeout(() => {
        const summary = {
          totalSales: 250000,
          gstCollected: 45000,
          itcAvailable: 15000,
          netPayable: 30000,
        };
        setSummaryData(summary);

        setMessages((prev) => [
          ...prev,
          { sender: "bot", text: "GSTR Summary ready. Please review and download JSON for GST portal upload." },
        ]);
        setFilingCompleted(true);
      }, 2000);
    }
  };

  const downloadJSON = () => {
    const jsonData = JSON.stringify(summaryData, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `GSTR_Summary_${selectedMonth}.json`;
    link.click();
  };

  const finishFiling = () => {
    // ✅ Mark as AI-Generated, not Filed
    setMonths((prev) =>
      prev.map((m) =>
        m.month === selectedMonth ? { ...m, status: "AI-Generated" } : m
      )
    );

    // Close chatbot
    setShowChatbot(false);
    setSelectedMonth(null);
    setMessages([]);
    setFileUploaded(false);
    setFilingCompleted(false);
    setSummaryData(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28 px-6 lg:px-12">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
        GST Filing Dashboard
      </h2>

      {/* Dashboard */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-yellow-600 text-white">
            <tr>
              <th className="p-3 text-left">Month</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {months.map((m, idx) => (
              <tr key={idx} className="border-b hover:bg-gray-50">
                <td className="p-3">{m.month}</td>
                <td
                  className={`p-3 font-medium ${
                    m.status === "Filed"
                      ? "text-green-600"
                      : m.status === "AI-Generated"
                      ? "text-yellow-600"
                      : "text-red-500"
                  }`}
                >
                  {m.status}
                </td>
                <td className="p-3">
                  {m.status === "Unfiled" && (
                    <button
                      onClick={() => handleFileNow(m.month)}
                      className="px-4 py-1 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                    >
                      File Now
                    </button>
                  )}
                  {m.status === "AI-Generated" && (
                    <span className="text-gray-500 text-sm">Waiting for GST Portal Upload</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Popup for AI Filing */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-96 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              AI-Assisted GST Filing
            </h3>
            <p className="text-gray-600 mb-6">
              Do you want AI to help prepare your GST filing for {selectedMonth}?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={startAIChat}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
              >
                Yes
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chatbot */}
      {showChatbot && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg w-[32rem] max-h-[90vh] flex flex-col">
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
              AI GST Filing Assistant
            </h3>
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-3 rounded-lg max-w-xs ${
                    msg.sender === "bot"
                      ? "bg-yellow-100 text-gray-800 self-start"
                      : "bg-gray-200 text-gray-800 self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {!fileUploaded && (
              <input
                type="file"
                accept=".pdf,.jpg,.png"
                onChange={handleFileUpload}
                className="mb-4"
              />
            )}

            {filingCompleted && summaryData && (
              <>
                <div className="bg-gray-50 border rounded-lg p-4 mb-4 text-left">
                  <h4 className="font-semibold text-gray-800 mb-2">GSTR Summary</h4>
                  <p>Total Sales: ₹{summaryData.totalSales}</p>
                  <p>GST Collected: ₹{summaryData.gstCollected}</p>
                  <p>ITC Available: ₹{summaryData.itcAvailable}</p>
                  <p>Net GST Payable: ₹{summaryData.netPayable}</p>
                </div>

                <a
                  onClick={downloadJSON}
                  className="block w-full py-2 mb-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-center cursor-pointer"
                >
                  Download JSON for Filing
                </a>
                <button
                  onClick={finishFiling}
                  className="w-full py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
                >
                  Back to Dashboard
                </button>
              </>
            )}

            {!filingCompleted && fileUploaded && (
              <p className="text-sm text-gray-500 text-center">
                Processing your invoices...
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
