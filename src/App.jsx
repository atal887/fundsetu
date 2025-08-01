import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LoanForm from "./components/LoanForm";
import InvestorForm from "./components/InvestorForm";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loan" element={<LoanForm />} />
        <Route path="/invest" element={<InvestorForm />} />
      </Routes>
    </Router>
  );
}
