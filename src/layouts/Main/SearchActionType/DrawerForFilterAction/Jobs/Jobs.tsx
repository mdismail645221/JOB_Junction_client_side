import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SearchContext } from "../../../../../context/SearchPovider/SearchPovider";
import { JOBSCONTAINER } from "./Jobs.styled";

const Jobs = () => {
  const { setFilterInfo } = React.useContext(SearchContext);
  const [experienceLevel, setExperienceLevel] = useState<any>({});
  const [jobType, setJobType] = useState<any>({});
  const [workFrom, setWorkFrom] = useState<any>({});
  const [isEasyApply, setIsEasyApply] = useState(false);
  const [sortBy, setSortBy] = useState("newest first");
  const [datePosted, setDatePosted] = useState("Any time");
  const [location, setLocation] = useState("world Wide");
  const handleExperienceLevelChange = (e: any) => {
    const newExperienceLevel = { ...experienceLevel };
    const field = e.target.value;
    if (!e.target.checked) {
      delete newExperienceLevel[field];
      setExperienceLevel(newExperienceLevel);
      return;
    }
    newExperienceLevel[field] = e.target.checked;
    setExperienceLevel(newExperienceLevel);
    // console.log(field, "=", e.target.checked);
  };
  const handleJobTypeChange = (e: any) => {
    const newJobType = { ...jobType };
    const field = e.target.value;
    if (!e.target.checked) {
      delete newJobType[field];
      setJobType(newJobType);
      return;
    }
    newJobType[field] = e.target.checked;
    setJobType(newJobType);
    // console.log(field, "=", e.target.checked);
  };
  const handleWorkFromChange = (e: any) => {
    const newWorkFrom = { ...workFrom };
    const field = e.target.value;
    if (!e.target.checked) {
      delete newWorkFrom[field];
      setWorkFrom(newWorkFrom);
      return;
    }
    newWorkFrom[field] = e.target.checked;
    setWorkFrom(newWorkFrom);
    // console.log(field, "=", e.target.checked);
  };
  const handleFilterSubmit = () => {
    const filterInfo = {
      jobType,
      experienceLevel,
      workFrom,
      isEasyApply,
      sortBy,
      datePosted,
      location,
    };
    setFilterInfo(filterInfo);
  };
  return (
    <JOBSCONTAINER spacing={3}>
      {/* sort start */}
      <Box sx={{ marginX: "auto" }}>
        <FormControlLabel
          className="title"
          onChange={(e: any) => setIsEasyApply(e.target.checked)}
          value="Easy Apply"
          control={<Checkbox defaultChecked />}
          label="Easy Apply"
        />
      </Box>

      <Box className="card">
        <Typography className="title" component="p">
          Sort by
        </Typography>
        <RadioGroup onChange={(e) => setSortBy(e.target.value)}>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControlLabel
              value="newest first"
              control={<Radio />}
              label="newest first"
            />
            <FormControlLabel
              value="oldest first"
              control={<Radio />}
              label="oldest first"
            />
          </Box>
        </RadioGroup>
      </Box>

      {/* sort end */}

      {/* Date posted start */}
      <RadioGroup
        className="card"
        onChange={(e) => setDatePosted(e.target.value)}
      >
        <Box>
          <Typography className="title" component="p">
            Date Posted
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControlLabel
              value="Any time"
              control={<Radio />}
              label="Any Time"
            />
            <FormControlLabel
              value="Past 24 hours"
              control={<Radio />}
              label="Past 24 hours"
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControlLabel
              value="Last 3 days"
              control={<Radio />}
              label="Last 3 days"
            />
            <FormControlLabel
              value="Last 7 days"
              control={<Radio />}
              label="Last 7 days"
            />
          </Box>
        </Box>
      </RadioGroup>

      {/* Date posted end */}

      {/* Experience level start */}
      <Box className="card">
        <Typography className="title" component="p">
          Experience level
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControlLabel
            onChange={handleExperienceLevelChange}
            control={<Checkbox />}
            label="Internship"
            value="Internship"
          />
          <FormControlLabel
            onChange={handleExperienceLevelChange}
            control={<Checkbox />}
            label="Entry level"
            value="Entry level"
          />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControlLabel
            onChange={handleExperienceLevelChange}
            value="Mid senior"
            control={<Checkbox />}
            label="Mid senior"
          />
          <FormControlLabel
            onChange={handleExperienceLevelChange}
            value="Senior"
            control={<Checkbox />}
            label="Senior"
          />
        </Box>
      </Box>
      {/* Experience level end */}

      {/* job type section start */}
      <Box className="card">
        <Typography className="title" component="p">
          Job type
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControlLabel
            onChange={handleJobTypeChange}
            value="Full-time"
            control={<Checkbox />}
            label="Full-time"
          />
          <FormControlLabel
            onChange={handleJobTypeChange}
            value="Part-time"
            control={<Checkbox />}
            label="Part-time"
          />
          <FormControlLabel
            onChange={handleJobTypeChange}
            value="Contract"
            control={<Checkbox />}
            label="Contract"
          />
        </Box>
      </Box>
      {/* job type section end */}

      {/* Work From start  */}
      <Box className="card">
        <Typography className="title" component="p">
          Work From
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-around" }}>
          <FormControlLabel
            onChange={handleWorkFromChange}
            value="Home"
            control={<Checkbox />}
            label="Home"
          />
          <FormControlLabel
            onChange={handleWorkFromChange}
            value="Office"
            control={<Checkbox />}
            label="Office"
          />
          <FormControlLabel
            onChange={handleWorkFromChange}
            value="Hybrid"
            control={<Checkbox />}
            label="Hybrid"
          />
        </Box>
      </Box>
      {/* Work From end  */}

      {/* location input start  */}
      <Box className="card">
        <Typography className="title" component="p">
          Location
        </Typography>
        <TextField
          sx={{ margin: "10px 0" }}
          size="small"
          fullWidth
          onChange={(e) => setLocation(e.target.value)}
          type="text"
        />
      </Box>
      {/* location input end  */}

      {/* <h1
        onClick={() =>
          console.log(
            "jobType:",
            jobType,
            "\nexperienceLevel:",
            experienceLevel,
            "\nworkFrom:",
            workFrom,
            "\nisEasyApply:",
            isEasyApply,
            "\nsortBy:",
            sortBy,
            "\ndatePosted:",
            datePosted,
            "\nlocation:",
            location
          )
        }
      >
        test
      </h1> */}
      <Box
        sx={{ paddingBottom: "2rem", display: "grid", placeItems: "center" }}
      >
        <Button
          className="btn-submit"
          onClick={handleFilterSubmit}
          sx={{ ":hover": { cursor: "pointer" } }}
        >
          Submit
        </Button>
      </Box>
    </JOBSCONTAINER>
  );
};

export default Jobs;
