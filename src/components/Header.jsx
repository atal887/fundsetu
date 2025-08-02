import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Load user from localStorage initially
        const storedUser = localStorage.getItem("fundsetuUser");
        if (storedUser) setUser(JSON.parse(storedUser));

        // 🔹 Listen for login/logout events
        const handleUserChange = () => {
            const updatedUser = localStorage.getItem("fundsetuUser");
            setUser(updatedUser ? JSON.parse(updatedUser) : null);
        };

        window.addEventListener("userUpdated", handleUserChange);

        return () => {
            window.removeEventListener("userUpdated", handleUserChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("fundsetuUser");
        setUser(null);

        // 🔹 Notify all components about logout
        window.dispatchEvent(new Event("userUpdated"));
        navigate("/");
    };

    const handleLoginClick = () => {
        // Trigger Home.jsx modal
        window.dispatchEvent(new CustomEvent("openLoginModal"));
    };

    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">

                {/* Logo */}
                <Link
                    to="/"
                    className="text-2xl font-extrabold text-gray-800 tracking-wide hover:text-gray-900"
                >
                    FundSetu
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8 text-gray-600 font-medium">
                    <Link to="/about" className="hover:text-gray-900 transition">About</Link>
                    <Link to="/support" className="hover:text-gray-900 transition">Support</Link>
                    <Link to="/contact" className="hover:text-gray-900 transition">Contact Us</Link>

                    <button
                        onClick={() => {
                            const storedUser = localStorage.getItem("fundsetuUser");
                            if (storedUser) {
                                window.location.href = "/profile";
                            } else {
                                window.dispatchEvent(new CustomEvent("openLoginModal"));
                            }
                        }}
                        className="hover:text-gray-900 transition"
                    >
                        Profile
                    </button>
                </nav>


                {/* Login / Logout */}
                {user ? (
                    <button
                        onClick={handleLogout}
                        className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition font-medium shadow-sm"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleLoginClick}
                        className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg transition font-medium shadow-sm"
                    >
                        Login
                    </button>
                )}
            </div>
        </header>
    );
}
