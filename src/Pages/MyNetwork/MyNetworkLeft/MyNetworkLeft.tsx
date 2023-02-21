import React from "react";
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import WomanIcon from '@mui/icons-material/Woman';
import Woman2Icon from '@mui/icons-material/Woman2';
import DateRangeIcon from '@mui/icons-material/DateRange';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";


const MyNetworkLeft = () => {

  // simple networks array of object for looping data
  const networksDatas = [
    {
      logo: "SensorOccupiedIcon",
      name: "Connectors",
      value: "140"
    },
    {
      logo: "ContactPageOutlinedIcon",
      name: "Contacts",
      value: "130"
    },
    {
      logo: "<PersonAddAltIcon/>",
      name: "Following & Followers",
      value: "8"
    },
    {
      logo: "<WomanIcon/><Woman2Icon/><WomanIcon/>",
      name: "Groups",
      value: "8"
    },
    {
      logo: "<DateRangeIcon/>",
      name: "Events",
      value: "15"
    },
    {
      logo: "<MenuBookIcon/>",
      name: "Pages",
      value: "200"
    },
    {
      logo: "<MenuBookIcon/>",
      name: "Newsletters",
      value: "300"
    },
    {
      logo: "<MenuBookIcon/>",
      name: "HashTags",
      value: "50"
    }
  ]

  return (
    <Stack spacing={1} sx={{padding: '10px 20px'}}>
      {
        networksDatas?.map(networkData => {
          return (

              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <IconButton size='medium'><SensorOccupiedIcon/></IconButton>
                  <Typography sx={{
                      fontSize: '1.20rem',
                      color: '#444444'
                  }}>{networkData?.name}</Typography>
                </Box>
                <Box>
                  <Typography sx={{
                    fontSize: '1.20rem',
                    color: '#444444'
                  }}>{networkData?.value}</Typography>
                </Box>
              </Box>
          )
        })
      }
    </Stack>
  );
};

export default MyNetworkLeft;
