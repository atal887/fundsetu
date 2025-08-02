import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import LoanForm from "./components/LoanForm";
import InvestorForm from "./components/InvestorForm";
import CivilScore from "./components/CivilScore";
import GSTFiling from "./components/GSTFiling";
import Profile from "./components/Profile.jsx";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loan" element={<LoanForm />} />
        <Route path="/invest" element={<InvestorForm />} />
        <Route path="/cibil" element={<CivilScore />} />
        <Route path="/gst-filing" element={<GSTFiling />} />


        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Router>
  );
}
