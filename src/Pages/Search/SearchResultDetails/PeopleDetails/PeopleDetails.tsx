import React, { useContext, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { MyContext } from "../../../../context/MyProvider/MyProvider";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
const PeopleDetails = () => {
  const { currentUser } = useContext(MyContext);
  const [isConnectionSent, setIsConnectionSent] = useState(false);

  const _id = useLoaderData();
  console.log("_id: ", _id);
  const {
    data: people,
    error,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isRefetchError,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: [_id],
    queryFn: async () => {
      if (_id) {
        const res = await fetch(
          `http://localhost:5000/searchpeople?_id=${_id}`
        );
        const data = await res.json();
        const pendingUSer: [] = data?.pendingReq;
        const isSent = pendingUSer.findIndex(
          ({ senderEmail }) => senderEmail === currentUser?.email
        );
        if (isSent === -1) {
          setIsConnectionSent(false);
        } else {
          setIsConnectionSent(true);
        }

        return data;
      }
    },
  });

  const handleConnectionAction = () => {
    switch (isConnectionSent) {
      case true:
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
        break;
      case false:
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
    }
  };

  return (
    <div>
      {people && (
        <div>
          <h1>{people?.name}</h1>
          <img
            src={people?.profilePhoto}
            alt=""
            style={{ width: "50ppx", height: "50px" }}
          />
          <h1>view profile</h1>
          <button
            style={{
              fontSize: "20px",
            }}
            onClick={handleConnectionAction}
          >
            {isConnectionSent ? "cancel request" : "add connection"}
          </button>
        </div>
      )}
    </div>
  );
};

export default PeopleDetails;
