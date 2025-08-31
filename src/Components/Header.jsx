import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-amber-100 via-white to-amber-50 shadow-sm fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-amber-600 hover:text-amber-700 transition-colors duration-300 cursor-pointer">
          BookStore
        </h1>

        {/* Future nav (optional) */}
        <nav className="hidden sm:flex gap-6 text-gray-700 font-medium">
          <span className="hover:text-amber-600 transition-colors duration-200 cursor-pointer">
            Home
          </span>
        </nav>

        {/* Mobile menu placeholder */}
        <button className="sm:hidden p-2 rounded-md hover:bg-amber-100 transition-colors duration-200">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6 text-amber-600"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
