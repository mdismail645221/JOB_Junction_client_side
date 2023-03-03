import React, { useContext } from "react";
import { Box, Paper } from "@mui/material";
import {
  MESSAGINGCHATINGCONTAINER,
  CALLVIDEOSECTION,
  USERMESSAGEINFO,
} from "./MessagingDetails.styled";
import Typography from "@mui/material/Typography";
import CallIcon from "@mui/icons-material/Call";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import AttachmentIcon from "@mui/icons-material/Attachment";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TextsmsIcon from "@mui/icons-material/Textsms";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import MoodIcon from "@mui/icons-material/Mood";
import { CHATINGINPUT } from "../MessagingList/MessagingList.styled";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { MyContext } from "../../../context/MyProvider/MyProvider";
const MessagingDetails = () => {
  const { currentUser } = useContext(MyContext);
  const chatId = useLoaderData();
  console.log("chatId: ", chatId);

  const {
    data: messages,
    error,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isRefetchError,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: [chatId],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/search-messages?chatId=${chatId}`
      );
      const data = await res.json();
      console.log("result: ", data);
      return data;
    },
  });

  interface MessageList {
    userName: string;
    logo: string;
    message: string;
    time: string;
    day: string;
  }

  return (
    <MESSAGINGCHATINGCONTAINER
      sx={{ position: "relative", paddingY: ".75rem", paddingBottom: "70px" }}
    >
      {/* top side. its name and logo. call, video, information button initial */}
      <Paper
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <CALLVIDEOSECTION direction="row" spacing={2}>
          {/* client images */}
          <Box>
            <img
              style={{ width: "50px", borderRadius: "100%" }}
              src="https://i.ibb.co/jvj33G3/jhankar-mahbub.png"
              alt="jhankar-mahbub"
            />
          </Box>
          {/* client name  */}
          <Box>
            <Typography component="h4">jhankar Mahbub</Typography>
          </Box>
        </CALLVIDEOSECTION>
        {/* call video convention information section */}
        <Box>
          <IconButton>
            <CallIcon fontSize="medium" />
          </IconButton>
          <IconButton>
            <VideocamOutlinedIcon fontSize="medium" />
          </IconButton>
          <IconButton>
            <InfoIcon fontSize="medium" />
          </IconButton>
        </Box>
      </Paper>

      {/* client or your messaging list section */}
      {/* sx={{ overflowY: 'scroll', height: '100vh' }} */}
      {/* chating section start */}
      <Box sx={{ overflowY: "scroll", height: 500, margin: "1rem" }}>
        {messages?.map((eachMessage: any) => {
          return (
            <Box key={eachMessage?._id}>
              {
                eachMessage?.sender?.email !== currentUser?.email ? (
                  // <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginY: "0.75rem",
                      mr: { lg: "150px", md: "100px", sm: "50px", xs: "30px" },
                    }}
                  >
                    <Box>
                      <img
                        style={{
                          width: "25px",
                          borderRadius: "100%",
                          marginRight: "0.75rem",
                        }}
                        src=""
                        alt="jhankar-mahbub"
                      />
                    </Box>
                    <USERMESSAGEINFO>
                      <Typography component="p">
                        {eachMessage?.message}
                      </Typography>
                    </USERMESSAGEINFO>
                  </Box>
                ) : (
                  // </Box>

                  // <Box>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-end",
                      marginY: "0.75rem",
                      ml: { lg: "150px", md: "100px", sm: "50px", xs: "30px" },
                    }}
                  >
                    <USERMESSAGEINFO sx={{ marginRight: "0.75rem" }}>
                      <Typography component="p">
                        {eachMessage?.message}
                      </Typography>
                    </USERMESSAGEINFO>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <img
                        style={{
                          width: "25px",
                          borderRadius: "100%",
                          marginRight: "0.75rem",
                        }}
                        src=""
                        alt="jhankar-mahbub"
                      />
                    </Box>
                  </Box>
                )

                //</Box>
              }
            </Box>
          );
        })}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& button": {
              color: "#FF1744",
            },
            position: "absolute",
            bottom: "10px",
            width: "100%",
            left: "0",
            zIndex: "999",
          }}
        >
          {/* Plus icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <AddCircleIcon />
            </IconButton>
            {/* attacth icons */}
            <IconButton>
              <AttachmentIcon />
            </IconButton>
            <IconButton>
              <TextsmsIcon />
            </IconButton>
            {/* voice icons */}
            <IconButton>
              <KeyboardVoiceIcon />
            </IconButton>
            {/* smile icons */}
            <IconButton>
              <MoodIcon />
            </IconButton>
          </Box>
          {/* middle section chat input filed start */}
          <Box sx={{ flexGrow: 1 }}>
            <Box>
              <CHATINGINPUT type="text" placeholder="Aa" />
            </Box>
          </Box>
          {/* chat input filed end */}

          {/* voice icons this right section  */}
          <Box>
            {/* voice icons */}
            <IconButton>
              <KeyboardVoiceIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
      {/* chating section end */}
    </MESSAGINGCHATINGCONTAINER>
  );
};

export default MessagingDetails;
