import React from "react";
import { useTheme } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      {isDarkMode ? "🌞 " : "🌙"}
    </button>
  );
};

export default ThemeToggleButton;
