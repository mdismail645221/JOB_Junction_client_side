import React from "react";
import NewsFeeds from "./NewsFeeds/NewsFeeds";
import Box from "@mui/material/Box/Box";
import HomeLeft from "./HomeLeft/HomeLeft";
import HomeRight from "./HomeRight/HomeRight";
const Home = () => {
  return (
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
        <HomeLeft />
      </Box>
      <div>
        {/* <Typography variant="h1">this is h1</Typography>
        <input type="checkbox" onClick={() => setSelectTheme(!selectTheme)} /> */}
        {/* <Outlet /> */}
        <NewsFeeds></NewsFeeds>
      </div>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <HomeRight />
      </Box>
    </Box>
  );
};

export default Home;
