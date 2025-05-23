// src/context/AppContext.jsx
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const switchLanguage = (lng) => setLang(lng);

  return (
    <AppContext.Provider value={{ lang, isDark, toggleTheme, switchLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

// Hooks provided to components
export const useAppContext = () => useContext(AppContext);