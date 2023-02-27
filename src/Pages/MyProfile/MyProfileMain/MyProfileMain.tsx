import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "@emotion/react";
const MyProfileMain = () => {
  return (
    <div
      style={{
        width: "100%",
        marginTop: "1em",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", width: "100%", margin: "auto" }}>
        <div style={{ width: "100%", margin: "auto" }}>
          <Card sx={{ width: "100%", margin: "auto", borderRadius: "1em" }}>
            {/* <CardMedia
                component="img"
                alt="green iguana"
                height="340"
                width="100%"
                image={banner}
              /> */}
            <div style={{ position: "relative", top: "0", left: "0" }}>

              <Box sx={{ width:"100%"}}>

                <img width={'100%'} src="https://media.licdn.com/dms/image/D4D16AQH_CGCjTm6Emw/profile-displaybackgroundimage-shrink_350_1400/0/1670523661007?e=1682553600&v=beta&t=KoznlnUvCWqc8grw-_qkCsQ3-JcT2UdQaKHNLHA2E4E" alt="" />
              </Box>

              <div>
                <Avatar
                  alt="Remy Sharp"
                  src="https://media.licdn.com/dms/image/D4E35AQHygES8XXsYyA/profile-framedphoto-shrink_400_400/0/1670448958563?e=1677693600&v=beta&t=KcnVIjdz-651DPeR_lDflwxL4tJZhQebEeU9yF1Mg0U"
                  style={{
                    position: "absolute",
                    bottom: "-40px",
                    left: "-10px",
                  }}
                  sx={{
                    width: 156,
                    height: 156,
                    margin: "0px 40px",
                    border: "3px solid white",
                  }}
                />
              </div>
            </div>
            <CardContent style={{ margin: "2em 20px" }}>
              <Typography gutterBottom variant="h5" sx={{ m: 0 }} component="div">
                MD IKTIUP MAHMUD SEYAM
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Web Developer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                #Talk about html css js and react
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Chittagong,Bangladesh.{" "}
                <Link
                  to={""}
                  style={{
                    textDecoration: "none",
                    color: "red",
                    fontWeight: "700",
                  }}
                >
                  Contact Info
                </Link>
              </Typography>
            </CardContent>
            <CardActions style={{ margin: "-2em  0 0 1.5em", }}>
              <Stack spacing={2} direction="row">
                <Button
                  variant="contained"
                  style={{
                    borderRadius: "20px",
                    color: "white",
                    background: "red",
                  }}
                >
                  Open to
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: "20px",
                    color: "red",
                    background: "white",
                    border: "2px solid red",
                  }}
                >
                  Add Profile Section
                </Button>
                <Button
                  variant="outlined"
                  style={{
                    borderRadius: "20px",
                    color: "red",
                    background: "white",
                    border: "2px solid red",
                  }}
                >
                  More
                </Button>
              </Stack>
            </CardActions>
            <div style={{ display: "flex", marginLeft: "1.6em", marginBottom: "1em" }}>
              {/* a card on top section*/}
              <Card
                sx={{
                  width: '50%',
                  background: "#fca9a9",
                  margin: "20px 10px",
                  height: "70px",
                  pb: "7em"
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 20, m: 0 }} color="black" gutterBottom>
                    Open to work
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ color: "black", ml: ".5em" }} variant={"outlined"} color="error" size="small">Learn More</Button>
                </CardActions>
              </Card>


              {/* another card on top section */}
              <Card
                sx={{
                  width: '50%',
                  background: "#fca9a9",
                  margin: "20px 10px",
                  height: "70px",
                  pb: "7em",

                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 20, m: 0 }} color="black" gutterBottom>
                    Open to work
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ color: "black", ml: ".5em" }} variant={"outlined"} color="error" size="small">Learn More</Button>
                </CardActions>
              </Card>



            </div>
          </Card>
          <div
            style={{
              background: "white",
              padding: "5px 20px 20px 20px",
              margin: "10px 0px",
              borderRadius: "20px"
            }}
          >
            <h2 style={{ color: "black", marginLeft: "0.8em" }}>Analytics</h2>
            <h4 style={{ marginLeft: '1em' }}>Private to you</h4>
            <div style={{ display: "flex" }}>

              {/* a card */}
              <Card
                sx={{
                  width: '33%',
                  background: "#fca9a9",
                  margin: "0px 10px 10px 0",
                  ml: "1em"
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 20, m: 0 }} color="black" gutterBottom>
                    Open to work
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ color: "black", ml: ".5em" }} variant={"outlined"} color="error" size="small">Learn More</Button>
                </CardActions>
              </Card>

              {/* another card */}
              <Card
                sx={{
                  width: '33%',
                  background: "#fca9a9",
                  margin: "0px 10px 10px 0",
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 20, m: 0 }} color="black" gutterBottom>
                    More about me
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ color: "black", ml: ".5em" }} variant={"outlined"} color="error" size="small">Learn More</Button>
                </CardActions>
              </Card>

              {/* a card */}
              <Card
                sx={{
                  width: '33%',
                  background: "#fca9a9",
                  margin: "0px 10px 10px 0",
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 20, m: 0 }} color="black" gutterBottom>
                    Providing Services
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{ color: "black", ml: ".5em" }} variant={"outlined"} color="error" size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          </div>




          {/* another section */}
          {/* <div
            style={{
              background: "gray",
              padding: "5px 20px",
              margin: "1px 0px",
              borderRadius: "1em"
            }}
          >
            <h2 style={{ color: "black" }}>Resource</h2>
            <h6>Private to you</h6>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Card
                sx={{
                  width: "89%",
                  background: "#4640A0",
                  margin: "5px 10px",
                  height: "50px",
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                    Open To Work
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Card
                sx={{
                  width: "89%",
                  background: "#fca9a9",
                  margin: "5px 10px",
                  height: "50px",
                }}
              >
                <CardContent>
                  <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                    Providing Services
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
              <Link style={{ textDecoration: "none" }} to={""}>
                <h3 style={{ textAlign: "center", color: "black" }}>
                  See All Resource
                </h3>
              </Link>
            </div>
          </div> */}
        </div>

        {/* <div style={{ width: "40%" }}></div> */}
      </div>
    </div>
  );
};

export default MyProfileMain;
