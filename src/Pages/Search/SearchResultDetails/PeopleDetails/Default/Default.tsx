import React from "react";
import { toast } from "react-toastify";

const Default = (props: any) => {
  const { isConnectionSent, refetch, people, currentUser, isSent } = props;
  console.log("is sent from defaault: ", isSent);
  console.log("isConnectionSent: ", isConnectionSent);
  const handleConnectionAction = () => {
    // switch (isConnectionSent) {
    //   case true:
    //     // to for cancel request
    //     const info = {
    //       senderEmail: currentUser?.email,
    //       recieverEmail: people?.email,
    //     };

    //     fetch("http://localhost:5000/caancelconnection", {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //         info: JSON.stringify(info),
    //       },
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         if (data?.modifiedCount) {
    //           toast.error(`${people?.name} request canceled`);
    //           refetch();
    //         }
    //       });
    //     break;
    //   case false:
    //     // to do for add connection

    //     const connectionInfo = {
    //       senderaInfo: {
    //         senderEmail: currentUser?.email,
    //         senderName: currentUser?.displayName,
    //         senderPhoto: currentUser?.photoURL,
    //       },
    //       receiverEmail: people?.email,
    //     };
    //     fetch("http://localhost:5000/addconnecion", {
    //       method: "PUT",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(connectionInfo),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         if (data?.modifiedCount) {
    //           // to do : set state is connection sen
    //           toast.success("connection sent successfully");
    //           refetch();
    //         }
    //       });
    //     break;
    // }
    switch (isSent) {
      case -1:
        // to do for add connection

        const connectionInfo = {
          senderaInfo: {
            senderEmail: currentUser?.email,
            senderName: currentUser?.displayName,
            senderPhoto: currentUser?.photoURL,
          },
          receiverEmail: people?.email,
        };
        fetch("http://localhost:5000/addconnecion", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(connectionInfo),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.modifiedCount) {
              // to do : set state is connection sen
              toast.success("connection sent successfully");
              refetch();
            }
          });
        break;
      default:
        // to for cancel request
        const info = {
          senderEmail: currentUser?.email,
          recieverEmail: people?.email,
        };

        fetch("http://localhost:5000/caancelconnection", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            info: JSON.stringify(info),
          },
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.modifiedCount) {
              toast.error(`${people?.name} request canceled`);
              refetch();
            }
          });
    }
  };
  return (
    <button
      style={{
        fontSize: "20px",
      }}
      onClick={handleConnectionAction}
    >
      {isSent !== -1 ? "cancel request" : "add connection"}
    </button>
  );
};

export default Default;
