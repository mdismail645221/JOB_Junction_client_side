import { Box, Stack, Avatar } from "@mui/material";
import React from "react";
import MyNetworkLeft from "./MyNetworkLeft/MyNetworkLeft";
import {
  ACCEPTIGNORE,
  INVITATION,
  PROFILEINFOACCEPT,
  SHOWMOREBTN,
} from "./MyNetworkMain/MyNetwork.styled";
import MyNetworkMain from "./MyNetworkMain/MyNetworkMain";

const MyNetwork = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "3fr 7fr",
        },
        marginTop: "1em"
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
        <MyNetworkLeft />
      </Box>

      <Box sx={{}}>
        <MyNetworkMain />
      </Box>
    </Box>
  );
};

export default MyNetwork;
