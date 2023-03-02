import React from "react";

const IsSentMeConnection = () => {
  return (
    <div>
      <h1>accept</h1>
      <h1>ignore</h1>
    </div>
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
