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
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";

// 'top' | 'left' | 'bottom' |
type Anchor = "right";

const DrawerForFilterAction = (props: any) => {
    // LIST

    const list = (anchor: Anchor) => (
        <Box
            sx={{ width: "500px" }}
            role="presentation"

        //   onKeyDown={props.toggleDrawer(anchor, false)}
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
                            value={props?.state}
                            onChange={props?.handleChange}
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
                    <IconButton
                        // onKeyDown={props.toggleDrawer(anchor, false)}
                        onClick={props.toggleDrawer(anchor, false)}
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>
                {/* Close btn end */}
            </Box>

        </Box>
    );

    return (
        <Box sx={{ padding: "0px", position: "relative", top: "1000px" }}>
            <React.Fragment>
                <Drawer
                    anchor={"right"}
                    open={props.state["right"]}
                //   onClose={props.toggleDrawer("right", false)}
                >
                    {list("right")}
                </Drawer>
            </React.Fragment>
        </Box>
    );
};

export default DrawerForFilterAction;
