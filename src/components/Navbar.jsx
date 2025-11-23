import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-blue-500 dark:bg-gray-900 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h2 className="text-2xl font-bold">Edunova</h2>

        {/* Hamburger button (mobile) */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
          <li><Link to="/courses" className="hover:text-yellow-300">Courses</Link></li>
          <li><Link to="/explore" className="hover:text-yellow-300">Explore</Link></li>
          <li><Link to="/login" className="hover:text-yellow-300">Login</Link></li>
          <li><Link to="/signup" className="hover:text-yellow-300">Signup</Link></li>
        </ul>

        {/* Dark mode toggle */}
        <button
          onClick={toggleTheme}
          className="hidden md:block bg-white dark:bg-gray-700 text-blue-600 dark:text-white px-3 py-1 rounded-md"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>

      {/* Mobile Menu (when hamburger clicked) */}
      {open && (
        <div className="md:hidden mt-4 space-y-3 text-lg">
          <Link to="/" className="block hover:text-yellow-300">Home</Link>
          <Link to="/courses" className="block hover:text-yellow-300">Courses</Link>
          <Link to="/explore" className="block hover:text-yellow-300">Explore</Link>
          <Link to="/login" className="block hover:text-yellow-300">Login</Link>
          <Link to="/signup" className="block hover:text-yellow-300">Signup</Link>

          {/* Dark mode toggle (mobile) */}
          <button
            onClick={toggleTheme}
            className="bg-white dark:bg-gray-700 text-blue-600 dark:text-white px-3 py-1 rounded-md mt-3"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      )}
    </nav>
  );
}
