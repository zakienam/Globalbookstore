import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../Components/BookCard";  

const Books = ({ getSearch }) => {
  // State to store API response
  const [bookList, setBookList] = useState([]);

  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 20; // number of books per page
   
  // Format search term (replace spaces with '+')
  const newSearch = getSearch.split(" ").join("+");

  // Fetch book data from API
  async function getData() {
    const url = `${import.meta.env.VITE_API_URL}/search.json?title=${newSearch}`;
    try { 
      setIsLoading(true);  
      const response = await axios.get(url);
      setBookList(response.data.docs);
      console.log(response.data.docs);
    } catch (error) {
      console.log(error);  
    } finally {
      setIsLoading(false);
    }
  }

  
  // Pagination Logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = bookList.slice(indexOfFirstBook, indexOfLastBook);

  // Total pages = total books / books per page
  const totalPages = Math.ceil(bookList.length / booksPerPage);

  
  // Fetch data whenever search term changes
  useEffect(() => {
    if (newSearch) {
      getData();
      setCurrentPage(1); // reset to first page on new search
    }
  }, [newSearch]);

  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth' //'auto'for instant scroll
    });
  },[currentPage])

  return (
    <>
      {isLoading ? (
        // ---------- Loading Spinner UI ----------
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : bookList.length === 0 ? (
        // ---------- No Data UI ----------
        <div className="flex flex-col items-center justify-center h-64 text-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/7486/7486760.png"
            alt="No Data"
            className="w-20 h-20 mb-4 opacity-80"
          /> 
          <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
            No Books Found
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Try searching with another title 
          </p>
        </div>
      ) : (
        // ---------- Book List UI ----------
        <div className="container mx-auto px-4 py-8">
          {/* Grid layout for book cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
  {currentBooks.map((item) => (
    <BookCard key={item.key} bData={item} />
  ))}
</div>

          {/* ---------- Pagination UI ---------- */}
          <div className="flex flex-wrap justify-center mt-8 gap-2">
            {/* Prev button */}
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition"
            >
              Prev
            </button>

            {/* Page numbers */}
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg border shadow-sm transition ${
                    currentPage === i + 1
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Next button */}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 shadow-sm hover:bg-gray-100 dark:hover:bg-gray-700 disabled:opacity-50 transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Books;
