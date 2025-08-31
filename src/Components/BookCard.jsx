import React, { useState } from "react";

const BookCard = ({ bData }) => {
  // State to toggle between short and full title
  const [showFull, setShowFull] = useState(false);

  // Shorten title if it's too long (> 26 characters)
  const shortTitle =
    bData.title.length > 26 ? bData.title.slice(0, 26) + "..." : bData.title;

  return (
    <>
      {/* Card wrapper - Flowbite + Tailwind styling */}
      <div className="w-full max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300 dark:bg-gray-900 dark:border-gray-700 transform hover:-translate-y-2 overflow-hidden">
        
        {/* Book cover - full width */}
        <a href="#" className="block overflow-hidden">
          <img
            className="w-full h-72 object-contain object-top hover:scale-105 transition-transform duration-500"
            src={
              bData.cover_i
                ? `https://covers.openlibrary.org/b/id/${bData.cover_i}-L.jpg`
                : "https://via.placeholder.com/300x400?text=No+Cover"
            }
            alt="Book Cover"
          />
        </a>

        {/* Book details */}
        <div className="px-6 pb-6 pt-4 space-y-3">
          {/* Title (click to toggle short/full) */}
          <h5
            onClick={() => setShowFull(!showFull)}
            className="text-lg sm:text-xl md:text-2xl font-semibold leading-snug tracking-tight text-gray-900 dark:text-white cursor-pointer hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            {showFull ? bData.title : shortTitle}
          </h5>

          {/* Author name */}
          <h5 className="text-base sm:text-lg md:text-xl font-medium text-amber-600 dark:text-amber-400">
            {bData.author_name}
          </h5>

          {/* Edition count + first publish year */}
          <div className="flex flex-col sm:flex-row sm:justify-between text-sm sm:text-base font-medium text-gray-600 dark:text-gray-400 gap-1 sm:gap-0">
            <p>Edition: {bData.edition_count}</p>
            <p>First Published: {bData.first_publish_year}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCard;
