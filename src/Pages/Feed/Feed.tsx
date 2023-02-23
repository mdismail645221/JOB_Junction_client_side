import React from "react";
import Box from "@mui/material/Box/Box";
import FeedLeft from "./FeedLeft/FeedLeft";
import FeedMain from "./FeedMain/FeedMain";
import FeedRight from "./FeedRight/FeedRight";
const Feed = () => {
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
        <FeedLeft />
      </Box>
      <div>
        {/* <Typography variant="h1">this is h1</Typography>
    <input type="checkbox" onClick={() => setSelectTheme(!selectTheme)} /> */}
        {/* <Outlet /> */}
        <FeedMain />
      </div>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <FeedRight />
      </Box>
    </Box>
  );
};

export default Feed;
