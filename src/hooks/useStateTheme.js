import { useState, useEffect } from "react";

import light from "../styles/light";
import dark from "../styles/dark";

const useStateTheme = () => {
  const [theme, setTheme] = useState(initialTheme());
  function initialTheme() {
    const themeStorage = window.localStorage.getItem("@theme");
    return themeStorage ? JSON.parse(themeStorage) : light;
  }
  function toggleTheme() {
    setTheme(theme.name === "dark" ? light : dark);
  }
  useEffect(() => {
    window.localStorage.setItem("@theme", JSON.stringify(theme));
  }, [theme]);
  return [theme, toggleTheme];
};

export default useStateTheme;
