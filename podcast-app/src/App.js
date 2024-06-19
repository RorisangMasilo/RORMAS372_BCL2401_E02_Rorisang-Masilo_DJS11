import React, { useState, BrowserRouter } from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";

const Container = styled.div`
  display: flex;
  background: ${({ theme }) => theme.bgLight};
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
`;

function App() {
  // Hooks
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <themeProvider theme={darkMode ? darkTheme : lightTheme}>
      <BrowserRouter>
        <Container>
          {menuOpen && (
            <Sidebar
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            ></Sidebar>
          )}
          <Frame>
            <NavBar>
              menuOpen={menuOpen}
              setMenuOpen={setMenuOpen}
              setDarkMode={setDarkMode}
              darkMode={darkMode}
            </NavBar>
            PODCAST
          </Frame>
        </Container>
      </BrowserRouter>
    </themeProvider>
  );
}

export default App;
