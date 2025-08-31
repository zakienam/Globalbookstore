
import { useState, useEffect } from "react";

// Custom hook: Debounce input value
// It delays updating the state until the user has stopped typing for "delay" ms
export default function useDebounce(value, delay) {
  // State to store the debounced value
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer to update debouncedValue after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value); 
    }, delay);

    // Cleanup: clear timeout if value changes before delay ends
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);  

  return debouncedValue;  
}
