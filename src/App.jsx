
import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import Books from "./Pages/Books";
import useDebounce from "./hook/useDebounce";
import HeroSection from "./Components/HeroSection";
import Footer from "./Components/Footer";

function App() {
  // State to store current search input (default = "harry potter")
  const [search, setSearch] = useState("harry potter");

  // Custom hook: debounce the search input (wait 500ms before triggering)
  // Helps prevent API calls on every keystroke
  const debouncedSearch = useDebounce(search, 500);

  // Function to receive search term from Header component
  const receiveSearch = (value) => {
    setSearch(value);
  };
    
  return (
    <>
      {/* Pass callback to Header for updating search */}
      <Header fined={receiveSearch} />
      <HeroSection fined={receiveSearch} />

      {/* Pass debounced search term to Books page */}
      <Books getSearch={debouncedSearch} />
      <Footer/>
    </>
  );
}

export default App;
