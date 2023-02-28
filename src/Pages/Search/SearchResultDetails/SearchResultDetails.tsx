import React from "react";
import { useLoaderData } from "react-router-dom";

const SearchResultDetails = () => {
  const _id = useLoaderData();
  console.log("_id: ", _id);
  return (
    <div>
      <h1>this is search result details</h1>
    </div>
  );
};

export default SearchResultDetails;
