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
import { MyContext } from "../../../context/MyProvider/MyProvider";
import EditIcon from '@mui/icons-material/Edit';
import { BACKGROUND_PROFILE_IMG_CONTAINER, MY_PROFILE_CONTAINER } from "./MyProfileMain.styled";
import ProfileEditModal from "./ProfileEditModal/ProfileEditModal";

const MyProfileMain = () => {

  // modal state
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { currentUser } = React.useContext(MyContext)

  const { displayName, photoURL } = currentUser

  // const 

  return (
    <MY_PROFILE_CONTAINER>
      <div style={{ display: "flex", width: "100%", margin: "auto" }}>
        <div style={{ width: "100%", margin: "auto" }}>
          <Card sx={{ width: "100%", margin: "auto", borderRadius: "1em" }}>
            {/* profile img or background img area start */}
            <BACKGROUND_PROFILE_IMG_CONTAINER className="userImg_and_bgImg_container">
              {/* background img  start */}
              <Box className="bgImgContainer" sx={{ width: "100%" }}>
                <img width={'100%'} src="https://media.licdn.com/dms/image/D5616AQEvdIjzJzVe8A/profile-displaybackgroundimage-shrink_350_1400/0/1670510690803?e=1683158400&v=beta&t=tmINKTLZRWsGia0F1I9AY-zIM6nCKJQl3UeOBTWf7dw" alt="" />
                <IconButton title="Edit" onClick={handleOpen}>
                  <EditIcon />
                </IconButton>
              </Box>

              {/* background img end */}

              {/* profile img start */}
              <div>
                <Avatar
                  className="profileImg"
                  alt={displayName}
                  src={photoURL}
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
              {/* profile img end */}

            </BACKGROUND_PROFILE_IMG_CONTAINER>
            {/* profile img or background img area end */}


            <CardContent style={{ margin: "2em 20px" }}>
              <Typography gutterBottom variant="h5" sx={{ m: 0 }} component="div">
                {displayName}
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
                className="Card"
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
                className="Card"
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
                className="Card"
                sx={{
                  width: '33%',
                  background: "#fca9a9",
                  margin: "0px 10px 10px 0",
                  ml: "1em"
                }}
              >
                <CardContent

                >
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
                className="Card"
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
                className="Card"
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

      {/* modal nested */}
      <ProfileEditModal 
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
       />

    </MY_PROFILE_CONTAINER>
  );
};

export default MyProfileMain;
