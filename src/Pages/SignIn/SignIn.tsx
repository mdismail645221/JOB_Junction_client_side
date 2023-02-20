// import { Button, Divider, TextField } from "@mui/material";
// import React from "react";

// const SignIn = () => {
//   return (
//     <>
//       <TextField id="outlined-basic" label="Email ID" variant="outlined" />
//       <br />
//       <TextField id="outlined-basic" label="Password" variant="outlined" />
//       <p>Forgot Password ?</p>

//       <Button variant="contained">Sign In</Button>

//       <Divider />
//     </>
//   );
// };

// export default SignIn;


import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { type } from '@testing-library/user-event/dist/type';
import { Link } from "react-router-dom";



export default function SignIn() {

  const [userInfo, setUserInfo] = React.useState({ email: "", password: "" })

  const handleLogIn = () => {
    console.log(userInfo)
  }

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let newUserInfo = {
      ...userInfo
    }
    newUserInfo.email = e.target.value
    setUserInfo(newUserInfo)
  }

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let newUserInfo = {
      ...userInfo
    }
    newUserInfo.password = e.target.value
    setUserInfo(newUserInfo)
  }

  return (
    <Box sx={{ width: '40vw', bgcolor: 'background.paper', m: "0 auto" }}>

      {/* sign in form card */}

      <Box sx={{
        border: 1, borderRadius: 1
      }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Sign In
              </Typography>
            </Grid>

          </Grid>
          <Typography color="text.secondary" variant="body2">
            Stay updated on your professional world
          </Typography>

          {/* Email and password input */}

          <TextField
            fullWidth
            sx={{ my: 2 }}
            name="email"
            id="email"
            label="Email ID"
            variant="outlined"
            onChange={handleEmailChange}
          />

          <TextField
            fullWidth
            name="password"
            id="password"
            label="Password"
            variant="outlined"
            onChange={handlePasswordChange}
          />

          <Typography sx={{ my: 2 }} color="primary" variant="subtitle2">
            Forgot Password ?
          </Typography>

          <Button onClick={handleLogIn} variant="contained">Sign In</Button>
        </Box>
        <Divider variant="middle" />
        <Box textAlign='center' sx={{ m: 2 }}>
          <Button variant="outlined">Sign In with Google</Button>
        </Box>
        <Box textAlign='center' sx={{ m: 2 }}>
          <Button variant="outlined">Sign In with Github</Button>
        </Box>
      </Box>

      <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Typography color="text.primary" variant="body2">
          New to JobJunction?
        </Typography>
        <Button component={Link} to="/SignUp">Join Now</Button>
      </Box>
    </Box>
  );
}