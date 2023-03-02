import React from "react";
import { SearchContext } from "../../../../context/SearchPovider/SearchPovider";

const DefaultDetails = () => {
  const { searchType } = React.useContext(SearchContext);
  return (
    <div>
      <h1>{searchType} Details</h1>
    </div>
  );
};

export default DefaultDetails;
