import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./styles";
import Body from "./components/Body";

import useStateTheme from "./hooks/useStateTheme";

function App() {
  const [theme, toggleTheme] = useStateTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Body onChangeBody={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
