import React from "react";
import { Box } from "@mui/system";
import SearchResultLists from "./SearchResultLists/SearchResultLists";
import { Outlet } from "react-router-dom";
const Search = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "4fr 7fr",
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
        <SearchResultLists />
      </Box>

      <Box sx={{}}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Search;
