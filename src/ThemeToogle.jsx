import React from "react";
import { useGlobalContext } from "./GlobalContext";
import { FaMoon, FaRegSun } from "react-icons/fa";

const ThemeToogle = () => {
  const { isDarkTheme, setisDarkTheme } = useGlobalContext();
  return (
    <div className="dark-tooggle" onClick={() => setisDarkTheme(!isDarkTheme)}>
      {isDarkTheme ? <FaMoon size={24} /> : <FaRegSun size={24} />}
    </div>
  );
};

export default ThemeToogle;
