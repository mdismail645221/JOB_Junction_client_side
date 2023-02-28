import { styled, Box, Stack } from "@mui/material";

export const JOBSCONTAINER = styled(Stack)(({ theme }) => ({
  // background:'#eeeeee',
  padding: "1.50rem 1rem",
  overflow: "scroll",
  height: "100%",

  "& .title": {
    fontWeight: "bold",
    fontSize: "1.25rem",
    color: "black",
  },
  "& .card": {
    border: "1px dashed #ff1714",
    borderRadius: "7px",
    boxShadow: "1px 2px 3px #ff1714",
    padding: "5px 8px",
  },
  "& .btn-submit": {
    background: "#ff1714",
    color: "#fff",
    fontWeight: "medium",

    border: "2px solid #ff1714",
    borderRadius: "50px",
    minWidth: "200px",
  },
  "& .btn-submit:hover": {
    background: "#ff1714",
    color: "#fff",
    fontWeight: "bold",
    minWidth: "200px",
    border: "2px solid #ff1714",
    borderRadius: "50px",
    boxShadow: "1px 1px 3px #ff1714",
  },
}));
