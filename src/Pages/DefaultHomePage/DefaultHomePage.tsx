import { Box, Button, IconButton, InputAdornment, OutlinedInput, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { HOMEPAGECONTAINER, HOMEPAGESIGNIN } from './DefaultHomePage.styled';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const DefaultHomePage = () => {
    const [showPassword, setShowPassword] = useState(false)

    // password shoing toggle function implement
    const handleClickShowPassword  = () => {
        setShowPassword(!showPassword)
    }

    console.log("showPassword", showPassword)

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };



    return (
        <HOMEPAGECONTAINER sx={{
            display: 'grid',
            gridTemplateColumns: {
                sx: "1fr",
                md: "5fr 7fr",
                height: "100vh"
            }
        }}>
            <HOMEPAGESIGNIN>
                <Stack spacing={3}>
                    <Typography>
                        Wellcome to your <br></br> professional community
                    </Typography>
                    <form action="">
                        <Stack direction="column" spacing={3} sx={{background: '#ddd'}}>
                            <div>
                                <TextField fullWidth id="outlined-basic" label="Email or Phone Number" variant="outlined" />
                            </div>
                            <Box>
                                <Box sx={{position: 'relative'}}>
                                    <TextField 
                                        fullWidth
                                    id="outlined-basic" label="Password"
                                     variant="outlined"
                                        type={showPassword ? 'text' : 'password'}
                                      />
                                    <IconButton 
                                        sx={{position: 'absolute', top: 0, right: 0}}
                                        onClick={handleClickShowPassword}
                                    >
                                        <Button>
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    </IconButton>
                                </Box>
                            </Box>
                        </Stack>

                        {/* <div>
                            <TextField id="outlined-basic"
                                label="Email or Phone Number"
                                variant="outlined"
                                type={showPassword ? 'text' : 'password'}
                                onClick={handleClickShowPassword}
                            />
                        </div> */}
                    </form>
                </Stack>
            </HOMEPAGESIGNIN>
            <Box sx={{
                display: {
                    xs: "none",
                    md: "block",
                },
            }}>02</Box>
        </HOMEPAGECONTAINER>
    );
};

export default DefaultHomePage;