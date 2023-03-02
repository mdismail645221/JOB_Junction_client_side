import React from "react";
import { Link } from "react-router-dom";

const IsMyProfile = () => {
  return (
    <div>
      {/* <h1>thi is your profile</h1> */}
      <Link to="/my-profile">my profile</Link>
    </div>
  );
};

export default IsMyProfile;
