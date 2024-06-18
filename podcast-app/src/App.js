import React, { useState } from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";

const Container = styled.div`
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
`;

function App() {
  // Hooks
  const [darkMode, setDarkMode] = useState(true);

  return (
    <themeProvider theme={darkTheme}>
      <Container>Podcast</Container>
    </themeProvider>
  );
}

export default App;
