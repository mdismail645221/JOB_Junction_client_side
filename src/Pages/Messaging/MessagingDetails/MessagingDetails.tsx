import React from "react";
import { Box, Paper } from "@mui/material";
import { MESSAGINGCHATINGCONTAINER, CALLVIDEOSECTION, USERMESSAGEINFO } from "./MessagingDetails.styled";
import Typography from "@mui/material/Typography";
import CallIcon from '@mui/icons-material/Call';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import IconButton from "@mui/material/IconButton";
import InfoIcon from '@mui/icons-material/Info';

const MessagingDetails = () => {


  interface MessageList  {
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
  ]


  return (
    <MESSAGINGCHATINGCONTAINER>
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
      <Box sx={{ margin: '1rem', overflowY: 'scroll', height: '100vh' }} >
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
        <Box>
          
        </Box>
      </Box>


    </MESSAGINGCHATINGCONTAINER>
  );
};

export default MessagingDetails;
