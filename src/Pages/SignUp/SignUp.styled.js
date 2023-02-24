import { Box, Stack, styled } from "@mui/material";
import Paper from "@mui/material/Paper";

export const FORMCONTAINER = styled("form")(({ theme }) => ({
  width: "500px",
  background: "#ffffff",
  padding: "1.50rem 1rem",
  border: "1px solid #dddddd",
  borderRadius: ".25rem",
  boxShadow: "2px 2px 4px #eeee",

  "& .sTitle": {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: "1.50rem",
    color: "#FF1744",
    paddingBottom: "1rem",
  },
}));

// password input field for styled
export const PASSWORDFEILDCONTAINER = styled(Paper)(({ theme }) => ({
  "& svg": {
    color: "#FF1744",
  },
}));

// submit button for styled
export const SUBMITBUTTON = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  alignItems: "center",
  "& button": {
    background: "#FF1744",
    color: "#ffffff",
    padding: ".75rem 1.75rem",
    border: "2px solid transparent",
    transition: "0.5rem",
  },
  "& button:hover": {
    background: "#FF1750",
    color: "#ffffff",
    padding: ".75rem 1.75rem",
    border: "2px solid #FF1744",
    borderRadius: "10px",
    transition: "0.5rem",
  },
}));

// social icons button for style
export const SOCIALICONSCONTAINER = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  "& button": {
    width: "40px",
    height: "40px",
    border: "2.5px solid #FF1744",
    transition: "1s",
    color: "#010101",
  },
  "& button:hover": {
    width: "40px",
    height: "40px",
    border: "2.5px solid #FF1744",
    background: "#FF1744",
    color: "#ffff",
    fontWeight: "bold",
  },

  "& span": {
    color: "#010101",
    fontSize: "1.75rem",
    padding: "0 1rem",
  },
}));
