import React from "react";
import { Box, Button, MenuItem, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import { NEXTBUTTON, POSTAJOBSCONTAINER, POSTCONTAINER } from "./PostAJob.styled";

const PostAJob = () => {


  const handleWorkplace = (event: any) => {
    console.log("event", event.target)

  };

  return (
    <POSTAJOBSCONTAINER>
      <POSTCONTAINER>
        <Stack direction='column' spacing={2}>
          <Box>
            <Typography className="title1" component='h3'>Find a great hire, fast</Typography>
            <Typography className="title2" component="p">Rated #1 in increasing quality of hire.1</Typography>
          </Box>
          {/* job title section */}
          <Stack>
            <label className="labelTitle">Job title</label>
            <TextField
              label=""
              id="outlined-size-small"
              size="small"
            />
          </Stack>
          {/* Company input field section */}
          <Stack>
            <label className="labelTitle">Company</label>
            <TextField
              label=""
              id="outlined-size-small"
              size="small"
            />
          </Stack>
          {/* Workplace type input field section */}
          <Stack>

            <label className="labelTitle">Workplace type</label>
            <select>
              <option value="On site">On site</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Remote">Remote</option>
            </select>
          </Stack>
          {/* Job location input field section */}
          <Stack>
            <label className="labelTitle">Job location</label>
            <TextField
              label=""
              id="outlined-size-small"
              size="small"
            />
          </Stack>

          {/* Job type select field section  */}
          <Stack>
            <label className="labelTitle">Job type</label>
            <select>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Contract">Contract</option>
              <option value="Volunteer">Volunteer</option>
              <option value="Internship">Internship</option>
            </select>
          </Stack>
          {/* next level button for description routes  */}.
          <NEXTBUTTON>
            <Button>Get Started for free</Button>
          </NEXTBUTTON>

        </Stack>
      </POSTCONTAINER>
    </POSTAJOBSCONTAINER>
  );
};

export default PostAJob;
