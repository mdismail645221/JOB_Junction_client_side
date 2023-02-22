import React from "react";
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import GradeIcon from '@mui/icons-material/Grade';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const HomeLeft = () => {
  return (
    <Box sx={{ display: { xs: "none", md: "block" }, mt: "1.5em" }}>

      <Box sx={{ border: "2px solid lightGray", backgroundColor: "white", borderRadius: "1em", height: '27em' }}>


        {/* image section */}
        <Box sx={{ position: "relative" }}>

          <img style={{ width: "18em", borderRadius: "1em 1em 0 0" }} src="https://media.licdn.com/dms/image/D4D16AQH_CGCjTm6Emw/profile-displaybackgroundimage-shrink_200_800/0/1670523661007?e=1682553600&v=beta&t=jiMIVKh3GZDTTWamr5oLrJBTYHRSJJBhEyPJ7QkPEQc" alt="" />

          <Box sx={{ ":hover": { cursor: "pointer" } }}>
            <img style={{ width: "4em", borderRadius: "100%", position: "absolute", top: "2em", left: "6em", border: "2px solid white" }} src="https://media.licdn.com/dms/image/D4E35AQHygES8XXsYyA/profile-framedphoto-shrink_400_400/0/1670448958563?e=1677578400&v=beta&t=9brrQkvv6HEms0K1yloBQgSXUeF5cnDJ1NxMf8Ofzfk" alt="" />
          </Box>

        </Box>


        {/* some info */}
        <Box sx={{ textAlign: "center", mt: "1.5em" }}>

          <Typography variant="h6" sx={{ m: "0 1em", fontWeight: "bold", ":hover": { textDecorationLine: "underline", cursor: "pointer" } }}>MD IKTIUP MAHMUD SEYAM</Typography>

          <Typography variant="caption" sx={{ mb: "5em", color: 'gray' }}>Web Developer || MERN Stack Developer</Typography>

          <Divider sx={{ m: "1.3em 0" }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "0 1em", ":hover": { backgroundColor: "#EBEBEB", } }}>
            <Typography sx={{ color: "gray", fontSize: "12px" }}>Who's viewed your profile</Typography>
            <Typography sx={{ color: "orange", fontSize: "12px" }} variant="subtitle2">661</Typography>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: "3px 1em", ":hover": { backgroundColor: "#EBEBEB" } }}>
            <Typography sx={{ color: "gray", fontSize: "12px" }}>Impressions on your post</Typography>
            <Typography sx={{ color: "orange", fontSize: "12px" }} variant="subtitle2">8597</Typography>
          </Box>

        </Box>

        {/* divider */}
        <Divider sx={{ m: "1.3em 0 0 0" }} />

        {/* 3rd section */}
        <Box sx={{ p: "1.3em 1em", ":hover": { backgroundColor: "#EBEBEB" } }}>
          <Typography sx={{ color: "gray", fontSize: "12px" }}>Access exclusive tools & insights</Typography>
          <Box sx={{ textDecoration: "underline", display: "flex", alignItems: "center" }}>
            <GradeIcon sx={{ color: "#E7A33E", m: '0', ":hover": { color: "#F8C77E" } }} />
            <Typography sx={{ color: "black", fontSize: "12px", fontWeight: "700" }}>Try premium for free</Typography>
          </Box>
        </Box>

        {/* divider */}
        <Divider sx={{ m: "0" }} />


        {/* my items */}
        <Box sx={{ p: ".7em 1em", ":hover": { backgroundColor: "#EBEBEB", borderRadius: "0 0 1em 1em" } }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <BookmarkIcon sx={{ color: "#E7A33E", m: '0', ":hover": { color: "#F8C77E" } }} />
            <Typography sx={{ color: "gray", fontSize: "14px" }}>My Items</Typography>
          </Box>
        </Box>

      </Box>
    </Box>
  );
};

export default HomeLeft;
