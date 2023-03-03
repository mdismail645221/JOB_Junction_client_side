import { Box, Button } from "@mui/material";
import React from "react";
import { CONTAINER } from "./IsSentMeConnection.styled";

const IsSentMeConnection = () => {
  return (
    <CONTAINER>
      <Box>
        <Button>
          Accept
          <span className="hoverEffect">Accept</span>
        </Button>
      </Box>
      <Box>
        <Button>
          Ignore
          <span className="hoverEffect">Ignore</span>
        </Button>
      </Box>
    </CONTAINER>
  );
};

export default IsSentMeConnection;

// {isMyProfile ? (
//     <div>
//       {/* <h1>thi is your profile</h1> */}
//       <Link to="/my-profile">my profile</Link>
//     </div>
//   ) : (
//     <div>
//       {isMyFriends ? (
//         <div>
//           <h1>you are connected</h1>
//         </div>
//       ) : (
//         <button
//           style={{
//             fontSize: "20px",
//           }}
//           onClick={handleConnectionAction}
//         >
//           {isConnectionSent ? "cancel request" : "add connection"}
//         </button>
//       )}
//     </div>
//   )}
