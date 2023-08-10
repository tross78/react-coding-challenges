import React, { useState, useContext } from 'react';
import DarkModeContext from './DarkModeContext';  // Adjust the path based on your directory structure

export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prevMode => {
    document.documentElement.classList.toggle('dark-mode', !prevMode);
    return !prevMode;
  });

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

// Custom hook for easier access to dark mode context
export function useDarkMode() {
  return useContext(DarkModeContext);
}