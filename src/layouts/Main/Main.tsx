import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createMuiTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import darkTheme from "../Theme/DarkTheme";
import lightTheme from "../Theme/LightTheme";


const Main = () => {
  const [selectTheme,setSelectTheme]=useState(false);
  return (
    <ThemeProvider theme={selectTheme?lightTheme:darkTheme}>
      <CssBaseline/>
        <div>
          <Navbar />
          <Typography variant="h1">this is h1</Typography>
            <input type="checkbox" onClick={()=>setSelectTheme(!selectTheme)}/>
          <Outlet />
          <Footer />
        </div>
    </ThemeProvider>
    
  );
};

export default Main;
