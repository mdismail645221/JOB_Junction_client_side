import React from 'react';
import { Avatar, Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Recommened = () => {

    const datas = [
        {
            name: "React Developer",
            image: "https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI",
            c_name: "American Technology Consulting - ATC",
            location: "Chicago, IL (Hybrid)",
            time: "12 Hour's ago"
        },
        {
            name: "React Developer",
            image: "https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI",
            c_name: "American Technology Consulting - ATC",
            location: "Chicago, IL (Hybrid)",
            time: "12 Hour's ago"
        }
    ]


    return (
        <div style={{ border: "3px solid gray", borderRadius: "2em", width: "40vw", margin: "0 auto" }}>

            {/* recommendetion start */}
            <div>

                {/* header section */}
                <Box sx={{ m: 1, p: 2 }} >
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                        Recommended for you
                    </Typography>
                    <Typography variant="body2">
                        Based on your profile and search history
                    </Typography>
                </Box>


                {/* {datas.map((i, j) => {
                    return <h1>{j}</h1>
                }) } */}


                {/* divider */}
                <Divider variant="middle" />

                {/* card start */}
                {/* card no 1 */}
                <Box sx={{ margin: ".5em 1em", display: "flex", alignItems: "center", gap: "1em" }}>
                    <Avatar
                        variant='square'
                        alt="image"
                        src="https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI"
                        sx={{ width: 56, height: 56 }}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%", gap: "1em" }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: "orange", m: "0", p: "0" }}>
                                React Developer
                            </Typography>

                            <Typography variant='body2'>
                                American Technology Consulting - ATC
                            </Typography>
                            <Typography variant='subtitle2' sx={{ color: "gray" }}>
                                Chicago, IL (Hybrid)
                            </Typography>
                            <Typography variant='body2' sx={{ color: "green" }}>
                                12 Hour's ago
                            </Typography>
                        </Box>
                        <Box>
                            <TurnedInNotIcon />
                        </Box>

                    </div>
                </Box>

                {/* divider */}
                <Divider variant="middle" />

                {/* card no 2 */}
                <Box sx={{ margin: ".5em 1em", display: "flex", alignItems: "center", gap: "1em" }}>
                    <Avatar
                        variant='square'
                        alt="image"
                        src="https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI"
                        sx={{ width: 56, height: 56 }}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%", gap: "1em" }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: "orange", m: "0", p: "0" }}>
                                React Developer
                            </Typography>

                            <Typography variant='body2'>
                                American Technology Consulting - ATC
                            </Typography>
                            <Typography variant='subtitle2' sx={{ color: "gray" }}>
                                Chicago, IL (Hybrid)
                            </Typography>
                            <Typography variant='body2' sx={{ color: "green" }}>
                                12 Hour's ago
                            </Typography>
                        </Box>
                        <Box>
                            <TurnedInNotIcon />
                        </Box>

                    </div>
                </Box>

                {/* divider */}
                <Divider variant="middle" />

                {/* card no 3 */}
                <Box sx={{ margin: ".5em 1em", display: "flex", alignItems: "center", gap: "1em" }}>
                    <Avatar
                        variant='square'
                        alt="image"
                        src="https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI"
                        sx={{ width: 56, height: 56 }}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%", gap: "1em" }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: "orange", m: "0", p: "0" }}>
                                React Developer
                            </Typography>

                            <Typography variant='body2'>
                                American Technology Consulting - ATC
                            </Typography>
                            <Typography variant='subtitle2' sx={{ color: "gray" }}>
                                Chicago, IL (Hybrid)
                            </Typography>
                            <Typography variant='body2' sx={{ color: "green" }}>
                                12 Hour's ago
                            </Typography>
                        </Box>
                        <Box>
                            <TurnedInNotIcon />
                        </Box>

                    </div>
                </Box>

                {/* divider */}
                <Divider variant="middle" />

                {/* card no 4 */}
                <Box sx={{ margin: ".5em 1em", display: "flex", alignItems: "center", gap: "1em" }}>
                    <Avatar
                        variant='square'
                        alt="image"
                        src="https://media.licdn.com/dms/image/C4D0BAQHP4eEyShE6Ew/company-logo_100_100/0/1664197000461?e=1684972800&v=beta&t=8lGBkOzB3mOCqL7E85-HBBWjg55AxI4l5aifj2phjFI"
                        sx={{ width: 56, height: 56 }}
                    />
                    <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%", gap: "1em" }}>
                        <Box>
                            <Typography variant='h6' sx={{ color: "orange", m: "0", p: "0" }}>
                                React Developer
                            </Typography>

                            <Typography variant='body2'>
                                American Technology Consulting - ATC
                            </Typography>
                            <Typography variant='subtitle2' sx={{ color: "gray" }}>
                                Chicago, IL (Hybrid)
                            </Typography>
                            <Typography variant='body2' sx={{ color: "green" }}>
                                12 Hour's ago
                            </Typography>
                        </Box>
                        <Box>
                            <TurnedInNotIcon />
                        </Box>

                    </div>
                </Box>

                {/* divider */}
                <Divider variant="middle" />

                <Button sx={{p: "10px", color: "gray", fontWeight: "700" }} fullWidth variant="text">
                    Show All
                    <ArrowForwardIcon/>
                </Button>




            </div>
        </div>
    );
};

export default Recommened;