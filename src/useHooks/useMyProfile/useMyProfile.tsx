import React, { useContext, useEffect } from "react";
import { MyContext } from "../../context/MyProvider/MyProvider";
import { useQuery } from "@tanstack/react-query";

export const useMyProfile = () => {
  const { currentUser } = useContext(MyContext);
  // const [isLoading, setIsLoading] = React.useState(true)
  const [myProfile, setMyProfile] = React.useState({});
  //   useEffect(()=>{
  // if(currentUser && currentUser?.uid){
  //     fetch(`http://localhost:5000/myprofile?uid=${currentUser?.uid}`)
  // }

  //   }, [currentUser])

  const {
    data,
    error,
    isError,
    isFetched,
    isFetching,
    isLoading,
    isRefetchError,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: [currentUser],
    queryFn: async () => {
      if (currentUser?.uid) {
        const res = await fetch(
          `http://localhost:5000/myprofile?uid=${currentUser?.uid}`
        );
        const data = await res.json();

        return data;
      } else {
        return "user not found";
      }
    },
  });

  return { data, isLoading, refetch };
};
