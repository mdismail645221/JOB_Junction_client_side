// import React from 'react';
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { IconButton, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";

// 'top' | 'left' | 'bottom' |
type Anchor = "right";

const DrawerForFilterAction = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  // LIST

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: "500px" }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      {/* jobs sections */}
      <Box
        sx={{
          margin: "2rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "1rem",
        }}
      >
        {/* filter jobs section element */}
        <Box>
          <Typography component="p">
            Filter only
            <Select
              sx={{ border: "none" }}
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Jobs</em>
              </MenuItem>
              {/* <MenuItem value="jobs">Jobs</MenuItem> */}
              <MenuItem value="people">People</MenuItem>
              <MenuItem value="post">Posts</MenuItem>
              <MenuItem value="companies">Companies</MenuItem>
              <MenuItem value="groups">Groups</MenuItem>
              <MenuItem value="events">Events</MenuItem>
              <MenuItem value=" services">Services</MenuItem>
            </Select>
            <span>By</span>
          </Typography>
        </Box>
        {/* Close btn start*/}
        <Box>
          <IconButton onKeyDown={toggleDrawer(anchor, false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Close btn end */}
      </Box>
    </Box>
  );

  return (
    <Box sx={{ padding: "0px" }}>
      <React.Fragment>
        <Link to="#" onClick={toggleDrawer("right", true)}>
          All Filters
        </Link>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </Box>
  );
};

export default DrawerForFilterAction;
