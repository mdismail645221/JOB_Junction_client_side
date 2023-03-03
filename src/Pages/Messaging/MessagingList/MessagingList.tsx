import { Box, Paper, Typography, IconButton } from "@mui/material";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { useContext } from "react";
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
import InputBase from "@mui/material/InputBase";
import { NavLink } from "react-router-dom";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import SearchIcon from "@mui/icons-material/Search";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import { useQuery } from "@tanstack/react-query";
import { MyContext } from "../../../context/MyProvider/MyProvider";
import EachList from "./EachList/EachList";
interface EachInfo {
  userLogo: string;
  userName: string;
  message: string;
}

const MessagingList = () => {
  const { currentUser } = useContext(MyContext);
  const [open, setOpen] = React.useState(false);
  const [chatLists, setChatLists] = React.useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  const {
    data,
    error,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isRefetchError,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: [],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/messagelists?myEmail=${currentUser?.email}`
      );
      const data = await res.json();
      setChatLists(data);
      console.log(data);
      return data;
    },
  });

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
              <TextField
                id="standard-textarea"
                label="Multiline Placeholder"
                placeholder="Placeholder"
                multiline
                variant="standard"
              />
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
          {chatLists?.length !== 0 &&
            chatLists?.map((eachList: any) => (
              <EachList key={eachList?._id} eachList={eachList} />
            ))}
        </Box>
      </Box>
    </MESSAGINGLISTCONTAINER>
  );
};

export default MessagingList;
