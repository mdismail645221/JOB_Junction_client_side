import { Box, Checkbox, FormControlLabel, Radio, Typography } from "@mui/material";
import React from "react";

const Jobs = () => {
  return (
    <Box>
      {/* sort start */}
      <Box>
        <Typography component="p">Sort by</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </Box>
      </Box>
      {/* sort end */}

      {/* Date posted start */}
      <Box>
        <Typography component="p">Date Posted</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </Box>
      </Box>
      {/* Date posted end */}

      {/* Experience level start */}
      <Box>
        <Typography component="p">Experience level</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel control={<Checkbox defaultChecked />} label="Internship" />
          <FormControlLabel control={<Checkbox defaultChecked />} label="Entry level" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="Associate" />
          <FormControlLabel value="male" control={<Checkbox defaultChecked />} label="Mid-Senior level" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="Director" />
          <FormControlLabel value="male" control={<Checkbox defaultChecked />} label="Executive" />
        </Box>
      </Box>
      {/* Experience level end */}

      {/* job type section start */}
      <Box>
        <Typography component="p">Job type</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="Full-time" />
          <FormControlLabel value="male" control={<Checkbox defaultChecked />} label="Part-time" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="Contract" />
          <FormControlLabel value="male" control={<Checkbox defaultChecked />} label="Temporary" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="Volunteer" />
          <FormControlLabel value="male" control={<Checkbox defaultChecked />} label="Internship" />
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="Other" />
        </Box>
      </Box>
      {/* job type section end */}

      {/* On-site/remote start  */}
      <Box>
        <Typography component="p">On-site/remote</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="On-site" />
          <FormControlLabel value="male" control={<Checkbox defaultChecked />} label="Remote" />
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="Hybrid" />
        </Box>
        {/* <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
        </Box> */}
      </Box>
      {/* On-site/remote end  */}

      <Box>
        <Typography component="p">Easy Apply</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
          <FormControlLabel value="female" control={<Checkbox defaultChecked />} label="On site" />
        </Box>
      </Box>


      {/* location input  */}
      <Box>
        <Typography component="p">Location</Typography>
        <input type="text" />
      </Box>

      


    </Box>
  );
};

export default Jobs;
