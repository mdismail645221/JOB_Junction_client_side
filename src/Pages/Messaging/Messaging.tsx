import { Box } from "@mui/system";
import React from "react";
import MessagingDetails from "./MessagingDetails/MessagingDetails";
import MessagingList from "./MessagingList/MessagingList";

const Messaging = () => {
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
        <MessagingList />
      </Box>

      <Box sx={{}}>
        <MessagingDetails />
      </Box>
    </Box>
  );
};

export default Messaging;
