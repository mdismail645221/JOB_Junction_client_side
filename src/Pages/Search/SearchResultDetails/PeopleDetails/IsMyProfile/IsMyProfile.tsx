import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { CONTAINER } from "../IsSentMeConnection/IsSentMeConnection.styled";

const IsMyProfile = () => {
  return (
    <CONTAINER sx={{
      '& a': {
        textDecoration: 'none',
        textTransform: 'uppercase'
      }
    }}>
      {/* <h1>thi is your profile</h1> */}
      <Button>
        <Link className="hoverEffect" to="/my-profile">my profile</Link>
        <span>my profile</span>
      </Button>
    </CONTAINER>
  );
};

export default IsMyProfile;
