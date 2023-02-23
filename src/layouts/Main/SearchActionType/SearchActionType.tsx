import React from "react";
import { Link } from "react-router-dom";
import { ACTIONMENUCONTAINER, GROUPLI, TYPEACTIONCONTAINER } from "./SearchActionType.styled";
import { Box } from '@mui/material'
import DrawerForFilterAction from "./DrawerForFilterAction/DrawerForFilterAction";

interface TPROPS {
  setSearchBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchActionType: React.FC = () => {

  return (
    <Box>
      <TYPEACTIONCONTAINER>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative' }}>
          {/* action all nev items*/}
          <ACTIONMENUCONTAINER sx={{ width: '90%' }}> {/*this is ul element */}
            <li className="btn-action"><Link to="#">People</Link></li>
            <li className="btn-action"><Link to="#">Jobs</Link></li>
            <li className="btn-action"><Link to="#">Companies</Link></li>
            <GROUPLI sx={{
              display: ['none',
                'block',]
            }} className="btn-action"><Link to="#">Groups</Link></GROUPLI>
            <li className="btn-action"><Link to="#">Posts</Link></li>
            <li className="btn-action"><Link to="#">Products</Link></li>
            <li className="btn-action"><Link to="#">Services</Link></li>
            <li className="btn-action"><Link to="#">Events</Link></li>
            <li className="btn-action"><Link to="#">Courses</Link></li>
            <li className="btn-action"><Link to="#">Schools</Link></li>
            {/* <li className="btn-action"><Link to="#">All Filters</Link></li> */}
          </ACTIONMENUCONTAINER>

          {/* filter button */}
          <Box sx={{ width: '10%', display: 'grid', placeItems: 'center' }}>

          </Box>

          <Box className="btn-action fillter-btn" sx={{ position: 'absolute', top: 15, right: [0, 0, 0, 32], padding: '0px' }}>
            {/* <Link  to="#">Right</Link> */}
            <DrawerForFilterAction  />
             {/* <Link to="#">All filters</Link> */}
          </Box>
        </Box>
      </TYPEACTIONCONTAINER>
      
      

    </Box>
  );
};

export default SearchActionType;
