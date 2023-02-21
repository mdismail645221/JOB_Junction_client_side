import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Box from "@mui/material/Box/Box";
import { createMuiTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import darkTheme from "../Theme/DarkTheme";
import lightTheme from "../Theme/LightTheme";
import { Container } from "@mui/material";
const Main = () => {
  const [selectTheme, setSelectTheme] = useState(false);
  return (
    <ThemeProvider theme={selectTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: "#F3F2EF" }}>
        <Container maxWidth="lg">
          <Navbar />
          <Box>
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
