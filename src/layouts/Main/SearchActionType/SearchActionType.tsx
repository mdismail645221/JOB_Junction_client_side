import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ACTIONMENUCONTAINER,
  GROUPLI,
  TYPEACTIONCONTAINER,
} from "./SearchActionType.styled";
import { Box, Button } from "@mui/material";

import DrawerForFilterAction from "./DrawerForFilterAction/DrawerForFilterAction";
import { SearchContext } from "../../../context/SearchPovider/SearchPovider";
const SearchActionType = () => {
  const { searchType, setSearchType, setFilterInfo } =
    React.useContext(SearchContext);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer =
    (anchor: any, open: any) =>
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

  // ------------------------------------------------
  return (
    <Box>
      <TYPEACTIONCONTAINER>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "auto 100px",
            gap: "40px",
            alignItems: "start",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* action all nev items*/}
          <ACTIONMENUCONTAINER
          // sx={{ width: "90%" }}
          >
            {/*this is ul element */}
            <li
              // className="btn-action selected-type"
              className={`btn-action ${
                searchType === "People" && "selected-type"
              }`}
              onClick={() => setSearchType("People")}
            >
              <Link to="#">People</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Jobs" && "selected-type"
              }`}
              onClick={() => setSearchType("Jobs")}
            >
              <Link to="#">Jobs</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Companies" && "selected-type"
              }`}
              onClick={() => setSearchType("Companies")}
            >
              <Link to="#">Companies</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Groups" && "selected-type"
              }`}
              onClick={() => setSearchType("Groups")}
            >
              <Link to="#">Groups</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Posts" && "selected-type"
              }`}
              onClick={() => setSearchType("Posts")}
            >
              <Link to="#">Posts</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Products" && "selected-type"
              }`}
              onClick={() => setSearchType("Products")}
            >
              <Link to="#">Products</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Services" && "selected-type"
              }`}
              onClick={() => setSearchType("Services")}
            >
              <Link to="#">Services</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Events" && "selected-type"
              }`}
              onClick={() => setSearchType("Events")}
            >
              <Link to="#">Events</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Courses" && "selected-type"
              }`}
              onClick={() => setSearchType("Courses")}
            >
              <Link to="#">Courses</Link>
            </li>
            <li
              className={`btn-action ${
                searchType === "Schools" && "selected-type"
              }`}
              onClick={() => setSearchType("Schools")}
            >
              <Link to="#">Schools</Link>
            </li>
            {/* <li className="btn-action"><Link to="#">All Filters</Link></li> */}
          </ACTIONMENUCONTAINER>

          {/* filter button */}
          {/* <Box
            sx={{ width: "10%", display: "grid", placeItems: "center" }}
          ></Box> */}

          <Box
            onClick={toggleDrawer("right", true)}
            className="btn-action fillter-btn"
            sx={{
              position: "relative",
              top: "14px",
            }}
          >
            <Link to="#">All Filters</Link>
            {/* <Button>All Filters</Button> */}
            {/* <Link to="#">Modal All filters</Link> */}
          </Box>
        </Box>
      </TYPEACTIONCONTAINER>

      {/* modal  */}

      <DrawerForFilterAction
        // setFilterInfo={setFilterInfo}
        state={state}
        toggleDrawer={toggleDrawer}
        // searchType={searchType}
        // setSearchType={setSearchType}
      />
    </Box>
  );
};

export default SearchActionType;
