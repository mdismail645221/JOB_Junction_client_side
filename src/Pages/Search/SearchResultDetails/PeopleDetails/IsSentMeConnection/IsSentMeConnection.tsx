import React from "react";
import { CONTAINER } from "./IsSentMeConnection.styled";

const IsSentMeConnection = () => {
  return (
    <CONTAINER>
      <h1>accept</h1>
      <h1>ignore</h1>
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
