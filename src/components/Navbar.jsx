import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function Navbar() {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <nav
      className="
        bg-blue-500 dark:bg-gray-900 
        text-white flex items-center justify-between 
        px-6 py-6 shadow-md transition
      "
    >
      {/* Logo / Title */}
      <h2 className="text-2xl font-bold tracking-wide">Edunova</h2>

      {/* Nav Links */}
      <ul className="flex space-x-6 text-lg font-medium">
        <li>
          <Link
            to="/"
            className="hover:text-yellow-300 dark:hover:text-gray-300 transition duration-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/courses"
            className="hover:text-yellow-300 dark:hover:text-gray-300 transition duration-200"
          >
            Courses
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="hover:text-yellow-300 dark:hover:text-gray-300 transition duration-200"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/signup"
            className="hover:text-yellow-300 dark:hover:text-gray-300 transition duration-200"
          >
            Signup
          </Link>
        </li>
      </ul>

      {/* 🌗 Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="
          px-3 py-1 rounded-md 
          bg-white text-blue-600
          dark:bg-gray-700 dark:text-white
          font-semibold shadow
          hover:opacity-80 transition
        "
      >
        {theme === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>
    </nav>
  );
}
