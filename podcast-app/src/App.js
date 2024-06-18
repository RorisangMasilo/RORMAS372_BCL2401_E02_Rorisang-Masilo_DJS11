import React, { useState, BrowserRouter } from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/SideBar";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bg};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

function App() {
  // Hooks
  const [darkMode, setDarkMode] = useState(true);

  return (
    <themeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          <Sidebar></Sidebar>
          Podcast
        </Container>
      </BrowserRouter>
    </themeProvider>
  );
}

export default App;
