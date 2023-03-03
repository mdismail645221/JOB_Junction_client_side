import { Box } from "@mui/material";
import React from "react";

const IsMyFriend = () => {
  return (
    <Box sx={{ 
      '& h1': {
        fontSize: '1.50rem',
        color: '#1717',
        fontWeight: 700,

      }
    }}>
      <h1>you are connected</h1>
    </Box>
  );
};

export default IsMyFriend;
