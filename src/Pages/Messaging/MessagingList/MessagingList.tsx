import { Box, Paper, Typography, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import React from "react";
import {
  MESSAGINGLISTCONTAINER,
  Search,
  SearchIconWrapper,
  SIGNLEMESSAGINGINFO,
  StyledInputBase,
  TOPMESSAGE,
} from "./MessagingList.styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import { NavLink } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
interface EachInfo {
  userLogo: string;
  userName: string;
  message: string;
}

const MessagingList = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const userInfo: EachInfo[] = [
    {
      userLogo: "https://i.ibb.co/4MnMYkJ/Joseph-Gray.png",
      userName: "Joseph-Gray",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/4Wk94qt/sumit-shah-logo.png",
      userName: "Sumit Saha",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
    {
      userLogo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      userName: "Jhankar Mahbub",
      message: "this is paragraph.this is paragraph. this is paragraph",
    },
  ];

  // handle conditional hover
  // const handleHover: string = () => {}
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <MESSAGINGLISTCONTAINER>
      <Box className="messaginContainer">
        <TOPMESSAGE>
          <Typography>Messaging</Typography>
          <Box>
            <IconButton onClick={handleOpen}>
              {/* <MoreHorizIcon /> */}
              <PersonAddIcon />
            </IconButton>
            <IconButton>
              {/* <SaveAsIcon /> */}
              <GroupAddIcon />
            </IconButton>
          </Box>
        </TOPMESSAGE>
        {/* modal is here start */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
        {/* modal is here end */}
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
        <Box paddingY={2} sx={{ overflowY: "scroll", height: "700px" }}>
          {userInfo.map((info, i) => {
            return (
              <NavLink key={i} to="#">
                <SIGNLEMESSAGINGINFO
                  sx={{
                    padding: "0.25rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {/* image left side */}
                  <Box>
                    <img
                      style={{
                        maxWidth: "50px",
                        borderRadius: "100%",
                        marginRight: "8px",
                      }}
                      src={info.userLogo}
                      alt="sumit shah"
                    />
                  </Box>
                  {/* userInfo ===right side=== */}
                  <Box sx={{ borderBottom: "1px solid #ddd" }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Typography sx={{ fontWeight: "medium" }} component="p">
                        {info.userName}
                      </Typography>
                      <Typography component="p">Feb 22</Typography>
                    </Box>
                    <Typography sx={{ color: "#555" }} component="p">
                      <span>You:</span>I am a MERN stack web developer. I would
                      like to...
                    </Typography>
                  </Box>
                </SIGNLEMESSAGINGINFO>
              </NavLink>
            );
          })}
        </Box>
      </Box>
    </MESSAGINGLISTCONTAINER>
  );
};

export default MessagingList;
