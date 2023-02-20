import * as React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { Link, TextField } from '@mui/material';
import { type } from '@testing-library/user-event/dist/type';
import { NavLink } from 'react-router-dom';




export default function SignUp() {


  const [userInfo, setUserInfo] = React.useState({ email: "", password: "" })

  const handleSignUP = () => {
    console.log(userInfo)
  }

  // const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   dispatch({
  //     type: 'setEmail',
  //     payload: event.target.value
  //   })
  //   console.log(event.target.value);
  // }

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let newUserInfo = {
      ...userInfo
    }
    // const field:String = e.target.name;
    // newUserInfo[field] = e.target.value
    newUserInfo.email = e.target.value
    setUserInfo(newUserInfo)
  }

  // const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
  //   dispatch({
  //     type: 'setPassword',
  //     payload: event.target.value
  //   })
  // }

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    let newUserInfo = {
      ...userInfo
    }
    // const field:String = e.target.name;
    // newUserInfo[field] = e.target.value
    newUserInfo.password = e.target.value
    setUserInfo(newUserInfo)
  }

  return (
    <Box sx={{ width: '50vw', bgcolor: 'background.paper', m: '0 auto' }}>

      {/* sign in form card */}

      <Box sx={{
        border: 1, borderRadius: 1
      }}>
        <Box sx={{ my: 3, mx: 2 }}>
          <Grid container alignItems="center">
            <Grid item xs>
              <Typography gutterBottom variant="h4" component="div">
                Make the most of your professional life
              </Typography>
            </Grid>

          </Grid>

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
            name='password'
            id="password"
            label="Password (6 or more characters)"
            variant="outlined"
            onChange={handlePasswordChange}
          />

          <Typography sx={{ my: 2 }} color="text.primary" variant="subtitle2" align='center'>
            By clicking Agree & Join, you agree to the JobJunction <Link href='https://www.linkedin.com/legal/user-agreement?trk=registration-frontend_join-form-user-agreement' target="_blank">User Agreement</Link>, <Link href='https://www.linkedin.com/legal/privacy-policy?trk=registration-frontend_join-form-privacy-policy' target="_blank">Privacy Policy</Link>, and <Link href='https://www.linkedin.com/legal/cookie-policy?trk=registration-frontend_join-form-cookie-policy' target="_blank">Cookie Policy</Link>.
          </Typography>

          <Button sx={{ m: "0 auto" }} onClick={handleSignUP} variant="contained">Agree & Join</Button>
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
          Already on JobJunction?
        </Typography>
        <Button component={NavLink} to="/signin"> Sign In</Button>
      </Box>
    </Box>
  );
}
