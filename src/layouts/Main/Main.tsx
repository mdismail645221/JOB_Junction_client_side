import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { createMuiTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import darkTheme from "../Theme/DarkTheme";
import lightTheme from "../Theme/LightTheme";
import { Container } from "@mui/material";
import SearchActionType from "./SearchActionType/SearchActionType";
import DrawerForFilterAction from "./SearchActionType/DrawerForFilterAction/DrawerForFilterAction";
import "./main.style.css";
const Main = () => {
  const [selectTheme, setSelectTheme] = useState(false);
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);
  const [scrollStatus, setScrollStatus] = useState("");
  let lastScroll = window.scrollY;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (lastScroll <= 0) {
        // console.log("y scroll is zero");
        setScrollStatus("");
      }
      let currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        // console.log("scroll is down");
        setScrollStatus("scroll-down");
      }
      if (currentScroll < lastScroll) {
        // console.log("scroll is up");
        setScrollStatus("scroll-up");
      }
      lastScroll = window.scrollY;
    });
  }, []);
  return (
    <ThemeProvider theme={selectTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#F3F2EF" }}>
        <div id={scrollStatus} className="header">
          <Navbar setSearchBarIsOpen={setSearchBarIsOpen} />
        </div>

        <Container maxWidth="lg">
          {searchBarIsOpen && (
            <div style={{ paddingTop: "65px" }}>
              <SearchActionType />
            </div>
          )}

          <Box sx={{ pt: "80px" }}>
            {/* <Typography variant="h1">this is h1</Typography>
        <input type="checkbox" onClick={() => setSelectTheme(!selectTheme)} /> */}
            <Outlet />
          </Box>
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Main;
