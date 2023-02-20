import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import banner from '../../assests/myprofile/baner.jpg'
import profile from '../../assests/myprofile/profile.jpg'
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import { ThemeContext } from "@emotion/react";



const MyProfile = () => {


  return (
    <div>
        <div style={{display:"flex",width:"80%", margin:"auto"}}>
        
          <div style={{width:"60%", margin:"auto"}}>
              <Card sx={{ width:"100%", margin:"auto" }}>
              {/* <CardMedia
                component="img"
                alt="green iguana"
                height="340"
                width="100%"
                image={banner}
              /> */}
              <div style={{position:"relative",top: "0",left: "0"}}>
                <img src={banner} width="100%"/>
                <div>
                  <Avatar
                      alt="Remy Sharp"
                      src={profile}
                      style={{position:"absolute",bottom:"-40px",left:"-10px"}}
                      sx={{ width: 156, height: 156,margin:"0px 40px", border:"2px solid blue" }}
                    />
                </div>
              
              </div>
              <CardContent style={{margin:"50px 20px"}}>
                <Typography gutterBottom variant="h4" component="div">
                  Dipankar Gupta
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Web Developer
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Talk about html css js and react
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Chittagong,Bangladesh. <Link to={''} style={{textDecoration:"none",color:"blue", fontWeight:"700"}}>Contact Info</Link>
                </Typography>
              </CardContent>
              <CardActions style={{marginTop:"-50px"}}>
                <Stack spacing={2} direction="row" >
                  
                  <Button variant="contained" style={{borderRadius:"20px",color:"white",background:"blue"}}>Open to</Button>
                  <Button variant="outlined" style={{borderRadius:"20px",color:"blue",background:"white",border:"2px solid blue"}}>Add Profile Section</Button>
                  <Button variant="outlined" style={{borderRadius:"20px", color:"black",background:"white",border:"2px solid black"}}>More</Button>
                </Stack>
              </CardActions>
              <div style={{display:"flex"}}> 
                <Card sx={{ minWidth: 330, background:"gray", margin:"20px 10px", height:"70px" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                      Open To Work
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card sx={{ minWidth: 330, background:"gray", margin:"20px 10px", height:"70px" }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                        Providing Services
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>

              </div>
            </Card>
            <div style={{background:"gray", padding:"5px 20px",margin:"10px 0px"}}>
              <h2 style={{color:"white"}}>Analytics</h2>
              <h6>Private to you</h6>
              <div style={{display:"flex"}}> 
                <Card sx={{ minWidth: 210, background:"gray", margin:"0px 10px", height:"70px" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                      Open To Work
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card sx={{ minWidth: 210, background:"gray", margin:"0px 10px", height:"70px" }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                        Providing Services
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth: 210, background:"gray", margin:"0px 10px", height:"70px" }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                        Providing Services
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
              </div>
            </div>
            <div style={{background:"gray", padding:"5px 20px",margin:"1px 0px"}}>
              <h2 style={{color:"white"}}>Resource</h2>
              <h6>Private to you</h6>
              <div style={{display:"flex",flexDirection:"column"}}> 
                <Card sx={{ width:"89%", background:"#4640A0", margin:"5px 10px", height:"50px" }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                      Open To Work
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
                <Card sx={{ width:"89%", background:"#4640A0", margin:"5px 10px", height:"50px" }}>
                    <CardContent>
                      <Typography sx={{ fontSize: 15 }} color="black" gutterBottom>
                        Providing Services
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Link style={{textDecoration:"none"}} to={""}><h3 style={{textAlign:"center",color:"black"}}>See All Resource</h3></Link>
              </div>
            </div>  
          </div>
            
          <div style={{width:"40%"}}></div>
        </div>
       
    </div>
  );
};

export default MyProfile;
