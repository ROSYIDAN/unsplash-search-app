import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isDarkTheme, setisDarkTheme] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  useEffect(() => {
    toogleDarkTheme();
  }, [isDarkTheme]);
  const toogleDarkTheme = () => {
    if (isDarkTheme) {
      document.documentElement.classList.add("dark-theme");
    } else {
      document.documentElement.classList.remove("dark-theme");
    }
    // console.log(isDarkTheme);
  };
  return (
    <GlobalContext.Provider
      value={{ isDarkTheme, setisDarkTheme, searchVal, setSearchVal }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
