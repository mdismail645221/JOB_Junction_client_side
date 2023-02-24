import { styled, Box, Paper } from "@mui/material";

// export const INVITATION = styled(Box)(({ theme }) => ({
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     border: '1px solid #ddd',
//     height: '35px'
// }))

export const PostContainer = styled(Box)(({ theme }) => ({
  padding: "1rem 2rem",
  border: "1px solid #dddddd",
}));

export const PostTop = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const PostField = styled(Paper)(({ theme }) => ({
  flexGrow: "1",
  padding: "0.75rem 2rem",
  border: "1px solid #dddddd",
  borderRadius: "50px",
  cursor: "pointer",
  marginLeft: "1rem",
  transition: ".5ms",
  ":hover": {
    background: "rgba(255, 0, 0, 0.1)",
  },
}));

// PostBottom
export const PostBottom = styled(Box)(({ theme }) => ({}));

export const PostBtnGruop = styled(Box)(({ theme }) => ({
  cursor: "pointer",
  padding: "0.25rem 1rem",
  border: "1px solid #fff",
  fontWeight: "600",
  fontSize: "0.75rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "nowrap",
  ":hover": {
    fontWeight: "400",
    background: "rgba(255, 0, 0, 0.1)",
    borderRadius: "50px",
    boxShadow: "1px 1px 1px rgba(255, 0, 0, 0.1)",
    border: "1px solid rgba(255, 0, 0, 0.1)",
  },
}));
