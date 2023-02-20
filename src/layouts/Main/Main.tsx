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

const Main = () => {
  const [selectTheme, setSelectTheme] = useState(false);
  return (
    <ThemeProvider theme={selectTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "3fr 6fr 3fr",
          },
        }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          this is left section
        </Box>
        <div>
          {/* <Typography variant="h1">this is h1</Typography>
        <input type="checkbox" onClick={() => setSelectTheme(!selectTheme)} /> */}
          <Outlet />
        </div>
        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
          }}
        >
          this is right section
        </Box>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default Main;
