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
import { IconButton, Paper, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CloseIcon from "@mui/icons-material/Close";
import People from "./People/People";
import Jobs from "./Jobs/Jobs";
import Companies from "./Companies/Companies";
import Groups from "./Companies/Groups/Groups";
import Posts from "./Posts/Posts";
import Products from "./Products/Products";
import Services from "./Services/Services";
import Events from "./Events/Events";
import Courses from "./Courses/Courses";
import Schools from "./Schools/Schools";
import { SearchContext } from "../../../../context/SearchPovider/SearchPovider";

// 'top' | 'left' | 'bottom' |
type Anchor = "right";

const DrawerForFilterAction = (props: any) => {
  // Search type LIST
  const { searchType, setSearchType } = React.useContext(SearchContext);

  const list = (anchor: Anchor) => (
    <Box role="presentation">
      {/* jobs sections start */}
      <Box
        sx={{
          margin: "1rem 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingX: "1rem",
          // position: 'fixed',
        }}
      >
        {/* filter jobs section element */}
        <Box>
          <Typography component="p">
            Filter only
            <Select
              defaultValue={searchType}
              sx={{
                border: "none",
                color: "#FF1714",
                padding: "0",
                margin: "14px",
                "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
                  {
                    padding: "4px 32px 4px 19px",
                  },
              }}
              onChange={(e) => setSearchType(e.target.value)}
              // inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="People">People</MenuItem>
              <MenuItem value="Jobs">Jobs</MenuItem>
              <MenuItem value="Companies">Companies</MenuItem>
              <MenuItem value="Groups">Groups</MenuItem>
              <MenuItem value="Posts">Posts</MenuItem>
              <MenuItem value="Products">Products</MenuItem>
              <MenuItem value="Services">Services</MenuItem>
              <MenuItem value="Events">Events</MenuItem>
              <MenuItem value="Courses">Courses</MenuItem>
              <MenuItem value="Schools">Schools</MenuItem>
            </Select>
            <span>By</span>
          </Typography>
        </Box>

        {/* Close btn start*/}
        <Box>
          <IconButton onClick={props.toggleDrawer(anchor, false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {/* Close btn end */}
      </Box>
      {/* jobs sections end */}

      {/* to do : seyam vy start here */}
    </Box>
  );
  let searchTypeComponent: any;
  switch (searchType) {
    case "People": {
      searchTypeComponent = <People />;
      break;
    }
    case "Jobs": {
      searchTypeComponent = <Jobs />;
      break;
    }
    case "Companies": {
      searchTypeComponent = <Companies />;
      break;
    }
    case "Groups": {
      searchTypeComponent = <Groups />;
      break;
    }
    case "Posts": {
      searchTypeComponent = <Posts />;
      break;
    }
    case "Products": {
      searchTypeComponent = <Products />;
      break;
    }
    case "Services": {
      searchTypeComponent = <Services />;
      break;
    }
    case "Events": {
      searchTypeComponent = <Events />;
      break;
    }
    case "Courses": {
      searchTypeComponent = <Courses />;
      break;
    }
    case "Schools": {
      searchTypeComponent = <Schools />;
      break;
    }
    // default: {
    //    //statements;
    //    break;
    // }
  }

  return (
    <React.Fragment>
      <Drawer
        sx={{
          ".css-1160xiw-MuiPaper-root-MuiDrawer-paper": {
            top: "65px",
            minWidth: "500px",
            position: "absolute",
            overflow: "scroll",
          },
        }}
        anchor={"right"}
        open={props.state["right"]}
      >
        <Box
          sx={{
            borderBottom: `2.5px solid #ddd`,
            boxShadow: `3px 10px 20px #ddd`,
          }}
        >
          {list("right")}
        </Box>
        <Box>{searchTypeComponent}</Box>
      </Drawer>
    </React.Fragment>
  );
};

export default DrawerForFilterAction;
