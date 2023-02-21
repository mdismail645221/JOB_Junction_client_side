import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import banner from "../../assests/myprofile/baner.jpg";
import profile from "../../assests/myprofile/profile.jpg";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "@emotion/react";
import MyProfileMain from "./MyProfileMain/MyProfileMain";
import MyProfileRight from "./MyProfileRight/MyProfileRight";

const MyProfile = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "7fr 3fr",
        },
      }}
    >
      <Box>
        <MyProfileMain />
      </Box>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <MyProfileRight />
      </Box>
    </Box>
  );
};

export default MyProfile;
