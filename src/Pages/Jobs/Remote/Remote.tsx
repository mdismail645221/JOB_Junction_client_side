import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Remote = () => {

    const datas = [
        {
            name: "MERN Stack Developer",
            image: "https://media.licdn.com/dms/image/C4E0BAQHLbXvWKmvvrg/company-logo_100_100/0/1653297275586?e=1684972800&v=beta&t=hWwiLnqiMSuguqenJ3fHccUZnnJdtxbbHLneLb0eSTA",
            c_name: "American Technology Consulting - ATC",
            location: "Chicago, IL (Hybrid)",
            time: "12 Hour's ago"
        },
        {
            name: "MERN Developer",
            image: "https://media.licdn.com/dms/image/C560BAQFNcEA9mCxUIA/company-logo_100_100/0/1656879570827?e=1684972800&v=beta&t=YFQPK2hqUoMD9eVqhu9GHzLQiqZmc6urdm2q84go8F8",
            c_name: "CBTS",
            location: "Washington, DC (Remote)",
            time: "Now"
        },
        {
            name: "Web Developer",
            image: "https://media.licdn.com/dms/image/C560BAQGUNIyRZFaj0g/company-logo_100_100/0/1657049194250?e=1684972800&v=beta&t=eZ7KElFx61i25xGp5LJNiRQIfqZdcCpJwtTZvE6Eg74",
            c_name: "Brain Station 23",
            location: "Dhaka, Bangladesh (Remote)",
            time: "1 Hour's ago"
        },
        {
            name: "Foull Stack Developer",
            image: "https://media.licdn.com/dms/image/C4D0BAQF53y2mahFyEw/company-logo_100_100/0/1573672272355?e=1684972800&v=beta&t=vlGac1v0fGeoRT1Op3A0nwwYgaGQsIhoB6HyexyDj5U",
            c_name: "DICE",
            location: "San Francisco Bay Area (Remote)",
            time: "Now"
        }
    ]


    return (
        <div style={{ border: "2px solid lightGray", backgroundColor: "white", borderRadius: "1em", marginTop: "1em" }}>

            {/* recommendetion start */}
            <div>

                {/* header section */}
                <Box sx={{ m: 1, p: 2 }} >
                    <Typography variant="h5" sx={{ fontWeight: "600" }}>
                        Remote opportunities
                    </Typography>
                    <Typography variant="body2">
                        Because you expressed interest in remote work
                    </Typography>
                </Box>


                {/* data's map */}
                {datas.map((data, i) => <Box key={i}>
                    <Box sx={{ margin: ".5em 1em", display: "flex", alignItems: "center", gap: "1em" }}>

                        <Avatar
                            variant='square'
                            alt="image"
                            src={data.image}
                            sx={{ width: 56, height: 56 }}
                        />

                        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", width: "100%", gap: "1em" }}>
                            <Box>
                                <Typography variant='h6' sx={{ color: "red", m: "0", p: "0" }}>
                                    {data.name}
                                </Typography>

                                <Typography variant='body2'>
                                    {data.c_name}
                                </Typography>
                                <Typography variant='subtitle2' sx={{ color: "gray" }}>
                                    {data.location}
                                </Typography>
                                <Typography variant='body2' sx={{ color: "green" }}>
                                    {data.time}
                                </Typography>
                            </Box>

                            <Box sx={{ p: '7px', ":hover": { backgroundColor: "lightGray", borderRadius: "100%", cursor: "pointer" }, display: 'flex', placeItems: "center" }}>
                                <TurnedInNotIcon sx={{}} />
                            </Box>
                            
                        </div>

                        {/* divider */}
                    </Box>
                    <Divider variant="middle" />
                </Box>
                )}



                {/* show all button */}
                <Button sx={{ p: "10px", color: "gray", fontWeight: "700" }} fullWidth variant="text">
                    Show All
                    <ArrowForwardIcon />
                </Button>

            </div>
        </div>
    );
};

export default Remote;