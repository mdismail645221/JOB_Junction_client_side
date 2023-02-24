import { Box, LinearProgress } from "@mui/material";
import React from "react";
import { RotatingLines, MagnifyingGlass } from "react-loader-spinner";

const Loader = ({ type }) => {
  if (type === "radial") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </Box>
    );
  } else if (type === "search") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="MagnifyingGlass-loading"
          wrapperStyle={{}}
          wrapperclassName="MagnifyingGlass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      </Box>
    );
  } else if (type === "progressor") {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          className=" w-3/4 mx-auto"
          sx={{
            width: "75%",
            marginX: "auto",
          }}
        >
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RotatingLines
          strokeColor="grey"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </Box>
    );
  }
};

export default Loader;
