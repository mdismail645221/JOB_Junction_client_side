import React from "react";
import { Link } from "react-router-dom";
import { ACTIONMENUCONTAINER, GROUPLI, TYPEACTIONCONTAINER } from "./SearchActionType.styled";
import { Box, Button } from '@mui/material'
import DrawerForFilterAction from "./DrawerForFilterAction/DrawerForFilterAction";

interface TPROPS {
  setSearchBarIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchActionType: React.FC = () => {


  // ----------------------------------------------------
  const [age, setAge] = React.useState('');

  const handleChange = (event:any) => {
    setAge(event.target.value);
  };


  const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
  });


  const toggleDrawer = (anchor:any , open:any) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
              (event as React.KeyboardEvent).key === 'Shift')
      ) {
          return;
      }

      setState({ ...state, [anchor]: open });
  };


  // ------------------------------------------------

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
              <Link to="#" onClick={toggleDrawer('right', true)}>All Filters</Link>
             {/* <Button>All Filters</Button> */}
             {/* <Link to="#">Modal All filters</Link> */}
          </Box>
        </Box>
      </TYPEACTIONCONTAINER>



      {/* modal  */}

      <DrawerForFilterAction 
          age={age}
          setAge={setAge}
          handleChange={handleChange}
          state={state} 
          setState={setState}
          toggleDrawer={toggleDrawer}

      />
      
      

    </Box>
  );
};

export default SearchActionType;
