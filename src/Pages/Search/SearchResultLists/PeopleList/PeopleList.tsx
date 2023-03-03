import { Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../../context/SearchPovider/SearchPovider";
import { PEOPLE_CONTAINER } from "./PeopleList.styled";

const PeopleList = () => {
  const { searchResultList } = React.useContext(SearchContext);
  return (
    <PEOPLE_CONTAINER spacing={1}>
      {/* <h1>people search</h1> */}
      {searchResultList?.map((eachResult: any, index: any) => (
        <Box key={eachResult?._id}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "activeColor" : undefined
            } to={`/search/${eachResult?._id}`}>
            <Box className="userName_container">
              <Typography component="h3">{eachResult?.name}</Typography>
              {/* <p className="btn-color"></p> */}
            </Box>
          </NavLink>
        </Box>
      ))}
    </PEOPLE_CONTAINER>
  );
};

export default PeopleList;
