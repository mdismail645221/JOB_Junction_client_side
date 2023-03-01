import React from "react";
import { SearchContext } from "../../../../context/SearchPovider/SearchPovider";

const DefaultList = () => {
  const { searchType } = React.useContext(SearchContext);
  return (
    <div>
      <h1>{searchType} is not implemented yet</h1>
    </div>
  );
};

export default DefaultList;
