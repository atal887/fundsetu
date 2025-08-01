export default function GSTFiling() {
  const demoData = [
    { month: "Jan 2025", status: "Filed" },
    { month: "Feb 2025", status: "Filed" },
    { month: "Mar 2025", status: "Pending" },
    { month: "Apr 2025", status: "Filed" },
  ];

  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">GST Filing History</h2>
      <table className="w-full text-sm text-left border">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2 border">Month</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>
        <tbody>
          {demoData.map((item, idx) => (
            <tr key={idx} className="border-b">
              <td className="p-2 border">{item.month}</td>
              <td className={`p-2 border font-medium ${item.status === "Filed" ? "text-green-600" : "text-red-600"}`}>
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
