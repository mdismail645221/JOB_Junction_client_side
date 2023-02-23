import { Box, Paper, Typography, IconButton } from "@mui/material";
import React from "react";
import { MESSAGINGLISTCONTAINER, Search, SearchIconWrapper, SIGNLEMESSAGINGINFO, StyledInputBase, TOPMESSAGE } from "./MessagingList.styled";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { NavLink } from "react-router-dom";

interface EachInfo {
  userLogo: string,
  userName: string,
  message: string
};

const MessagingList = () => {


  const userInfo: EachInfo[] = [
    {
      userLogo: "https://i.ibb.co/4MnMYkJ/Joseph-Gray.png",
      userName: "Joseph-Gray",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/4Wk94qt/sumit-shah-logo.png",
      userName: "Sumit Saha",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph"
    },
  ]


  // handle conditional hover 
  // const handleHover: string = () => {}

  return (
    <MESSAGINGLISTCONTAINER>
      <Box className="messaginContainer">
        <TOPMESSAGE>
          <Typography>Messaging</Typography>
          <Box>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
            <IconButton>
              <SaveAsIcon />
            </IconButton>
          </Box>
        </TOPMESSAGE>

        {/* filter messsing  */}
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="search messages"
            name="searchInput"
            id="searchInput"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>


        {/* message user data */}
        <Box paddingY={2} sx={{ overflowY: 'scroll', height: '100vh' }}>
          {
            userInfo.map(info => {
              return (
                <NavLink to='#'>
                  <SIGNLEMESSAGINGINFO sx={{ padding: '0.25rem', display: 'flex', alignItems: 'center', }}>
                    {/* image left side */}
                    <Box>
                      <img style={{ maxWidth: '50px', borderRadius: '100%', marginRight: '8px' }} src={info.userLogo} alt="sumit shah" />
                    </Box>
                    {/* userInfo ===right side=== */}
                    <Box sx={{ borderBottom: '1px solid #ddd' }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography sx={{fontWeight: 'medium'}} component='p'>{info.userName}</Typography>
                        <Typography  component='p'>Feb 22</Typography>
                      </Box>
                      <Typography sx={{color: '#555'}} component='p'><span>You:</span>I am a MERN stack web developer. I would like to...</Typography>
                    </Box>
                  </SIGNLEMESSAGINGINFO>
                </NavLink>
              )
            })
          }

        </Box>

      </Box>



    </MESSAGINGLISTCONTAINER>
  );
};

export default MessagingList;
