import React from "react";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../../context/SearchPovider/SearchPovider";

const PeopleList = () => {
  const { searchResultList } = React.useContext(SearchContext);
  return (
    <div>
      {/* <h1>people search</h1> */}
      {searchResultList?.map((eachResult: any, index: any) => (
        <div key={eachResult?._id}>
          <Link to={`/search/${eachResult?._id}`}>
            <h1>{eachResult?.name}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;
