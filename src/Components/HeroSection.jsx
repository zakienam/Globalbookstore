import React, { useState } from "react";

const HeroSection = ({ fined }) => {
  const [findBook, setFindBook] = useState("");

  const handleChange = (e) => {
    const rawValue = e.target.value;
    setFindBook(rawValue);
    const cleaned = rawValue.trim().toLowerCase().replace(/\s+/g, "+");
    fined(cleaned);
  };

  return (
    <section className="relative w-full flex items-center justify-center text-center">
      {/* Background Image */}
      <img
        src="/image/bg.jpg"
        alt="Books Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 text-white max-w-2xl w-full pt-36 pb-20">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Discover Your Next Favorite Book
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl mb-6 text-gray-200">
          Explore millions of titles and find the stories that inspire you.
        </p>

        {/* Search Bar */}
        <div className="flex items-center w-full bg-white/90 rounded-full shadow-lg border border-gray-200">
          {/* Search Icon */}
          <svg
            className="w-5 h-5 text-gray-500 ms-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>

          {/* Input */}
          <input
            type="text"
            placeholder="Search for Knowledge..."
            value={findBook}
            onChange={handleChange}
            className="flex-1 px-4 py-3 text-sm sm:text-base md:text-lg text-gray-800 placeholder-gray-500 bg-transparent outline-none"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
