import React, { useState, BrowserRouter, Routes, Route } from "react";
import styled, { themeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./utils/Themes";
import Sidebar from "./components/SideBar";
import NavBar from "./components/NavBar";
import Dashboard from "./pages/Dashboard";
import Search from "./pages/Search";
import DisplayPodcast from "./pages/DisplayPodcast";
import Favourites from "./pages/Favourite";
import PodcastDetails from "./pages/PodcastDetails";
import Profile from "./pages/profile";

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
            <Routes>
              <Route path="/" exact element={<Dashboard />}></Route>
              <Route path="/search" exact element={<Search />}></Route>
              <Route path="/Profile" exact element={<Profile />}></Route>
              <Route path="/Favourites" exact element={<Favourites />}></Route>
              <Route
                path="/podcast/:id"
                exact
                element={<PodcastDetails />}
              ></Route>
              <Route
                path="/showpodcasts/:type"
                exact
                element={<DisplayPodcast />}
              ></Route>
            </Routes>
            PODCAST
          </Frame>
        </Container>
      </BrowserRouter>
    </themeProvider>
  );
}

export default App;
