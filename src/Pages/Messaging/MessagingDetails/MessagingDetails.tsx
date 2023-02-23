import React from "react";
import { Box, Paper } from "@mui/material";
import { MESSAGINGCHATINGCONTAINER, CALLVIDEOSECTION, USERMESSAGEINFO } from "./MessagingDetails.styled";
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';
import AttachmentIcon from '@mui/icons-material/Attachment';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import TextsmsIcon from '@mui/icons-material/Textsms';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MoodIcon from '@mui/icons-material/Mood';
import { CHATINGINPUT } from "../MessagingList/MessagingList.styled";

const MessagingDetails = () => {


  interface MessageList {
    userName: string,
    logo: string
    message: string
    time: string,
    day: string
  }

  const messagingLists: MessageList[] = [
    {
      userName: 'Mohammad Ismail',
      logo: "https://i.ibb.co/RTLpQDw/ismail-fb-img.png",
      message: 'Kemon asen sir',
      time: "",
      day: ""
    },
    {
      userName: 'Jhankar Mahbub',
      logo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      message: 'Alhumdurilla. kemn aso tmi?',
      time: "",
      day: ""
    },
    {
      userName: 'Mohammad Ismail',
      logo: "https://i.ibb.co/RTLpQDw/ismail-fb-img.png",
      message: 'Alhumdurilla sir. Sir, ami apnar web development course ti kore onek kicu gain koreci. akhn job placement aci.',
      time: "",
      day: ""
    },
    {
      userName: 'Mohammad Ismail',
      logo: "https://i.ibb.co/RTLpQDw/ismail-fb-img.png",
      message: 'sir, apnar proti onek kitoggo thakbe. thoya korben sir.',
      time: "",
      day: ""
    },
    {
      userName: 'Jhankar Mahbub',
      logo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      message: 'Well. Arektu kosto koro. new new technology learn korte thako. InshaAllah valo kicu hobe. tmr jonno thoya roilo.',
      time: "",
      day: ""
    },
    // ------
    {
      userName: 'Jhankar Mahbub',
      logo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      message: 'Well. Arektu kosto koro. new new technology learn korte thako. InshaAllah valo kicu hobe. tmr jonno thoya roilo.',
      time: "",
      day: ""
    },
    {
      userName: 'Jhankar Mahbub',
      logo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      message: 'Well. Arektu kosto koro. new new technology learn korte thako. InshaAllah valo kicu hobe. tmr jonno thoya roilo.',
      time: "",
      day: ""
    },
    {
      userName: 'Jhankar Mahbub',
      logo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      message: 'Well. Arektu kosto koro. new new technology learn korte thako. InshaAllah valo kicu hobe. tmr jonno thoya roilo.',
      time: "",
      day: ""
    },
    {
      userName: 'Jhankar Mahbub',
      logo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      message: 'Well. Arektu kosto koro. new new technology learn korte thako. InshaAllah valo kicu hobe. tmr jonno thoya roilo.',
      time: "",
      day: ""
    },
    {
      userName: 'Jhankar Mahbub',
      logo: "https://i.ibb.co/jvj33G3/jhankar-mahbub.png",
      message: 'Well. Arektu kosto koro. new new technology learn korte thako. InshaAllah valo kicu hobe. tmr jonno thoya roilo.',
      time: "",
      day: ""
    },
  ]


  return (
    <MESSAGINGCHATINGCONTAINER sx={{  position: 'relative',  paddingY: '.75rem', paddingBottom: '70px' }}>
      {/* top side. its name and logo. call, video, information button initial */}
      <Paper sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <CALLVIDEOSECTION direction="row" spacing={2}>
          {/* client images */}
          <Box>
            <img style={{ width: '50px', borderRadius: '100%' }} src="https://i.ibb.co/jvj33G3/jhankar-mahbub.png" alt="jhankar-mahbub" />
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
      <Box sx={{ overflowY: 'scroll', height: 500, margin: '1rem'}} >
        {
          messagingLists.map((message, i) => {
            return (
              <Box key={i} sx={{ display: 'flex', alignItems: 'center', marginY: '0.75rem' }}>
                <Box>
                  <img style={{ width: '25px', borderRadius: '100%', marginRight: '0.75rem' }} src={message?.logo} alt="jhankar-mahbub" />
                </Box>
                <USERMESSAGEINFO>
                  <Typography component='p'>{message?.message}</Typography>
                </USERMESSAGEINFO>
              </Box>
            )
          })
        }


        <Box sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            '& button': {
              color: '#FF1744'
            },
            position: "absolute",
            bottom: '10px',
            width: '100%',
            left: '0',
            zIndex: '999'
        }}>
          {/* Plus icons */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton>
              <AddCircleIcon />
            </IconButton>
            {/* attacth icons */}
            <IconButton>
              < AttachmentIcon />
            </IconButton>
            <IconButton>
              < TextsmsIcon />
            </IconButton>
            {/* voice icons */}
            <IconButton>
              < KeyboardVoiceIcon />
            </IconButton>
            {/* smile icons */}
            <IconButton>
              < MoodIcon />
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
              < KeyboardVoiceIcon />
            </IconButton>
          </Box>
        </Box>

      </Box>
      {/* chating section end */}


    </MESSAGINGCHATINGCONTAINER>
  );
};

export default MessagingDetails;
