import { Paper, styled } from "@mui/material";

export const TYPEACTIONCONTAINER = styled(Paper)(({ theme }) => ({
  // defualt css
  "& li": {
    listStyle: "none",
    cursor: "pointer",
  },
  "& a": {
    textDecoration: "none",
    display: "inline-block",
    color: "#000000",
  },
  "& .selected-type": {
    background: "#c7c6c6",
    fontWeight: "600",
    boxShadow: "1.5px 1.5px 1.5px  #dddddd",
  },
  "& .btn-action": {
    padding: "8px 12px",
    border: "2px solid #ddd",
    borderRadius: "50px",
    color: "#444444",
  },
  "& .btn-action:hover": {
    background: "#eee",
    fontWeight: "600",
    boxShadow: "1.5px 1.5px 1.5px  #dddddd",
  },

  // filter btn for styled
  "& .fillter-btn a": {
    background: "transparent",
    border: "none",
    cursor: "pointer",
    color: "#444444",
  },
  "& .fillter-btn": {
    cursor: "pointer",
    // padding: '0px',
  },

  padding: "0 37px",
  width: "100%",
  height: "70px",
  overflow: "hidden",
}));

//  ACTION MENU ITEMS CONTAINER NAVBAR
export const ACTIONMENUCONTAINER = styled("ul")(({ theme }) => ({
  // defualt css
  display: "flex",
  // justifyContent: 'space-between',
  alignItems: "center",
  // width: '100%',
  flexWrap: "wrap",
  margin: "-2px",
  padding: 0,
  "& li": {
    margin: "1rem 0.25rem",
  },
}));
export const GROUPLI = styled("li")(({ theme }) => ({}));
