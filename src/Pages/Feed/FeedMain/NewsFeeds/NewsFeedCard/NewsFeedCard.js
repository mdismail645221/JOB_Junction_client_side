import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
// import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";
import { Box } from "@mui/material";
import { DisplayFlex, LCRSBTN } from "./DisplayFlex.styled";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import UserComment from "../UserComment/UserComment";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function NewsFeedCard({ data }) {
  // destructure all newsFeed
  const {
    postDescription,
    postImage,
    allLikes,
    occupation: title,
    times: postDate,
    profilePhotoURL: userLogo,
    userName,
  } = data;

  return (
    // single NewsFeed Cards
    <Box>
      <Card sx={{width: '100%'}}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe">
              <img style={{width: '100%'}} src={userLogo} alt={userName} />
            </Avatar>
          }
          action={
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <IconButton aria-label="settings">
                <AddIcon />
              </IconButton>
              <a href="/#">Follow</a>
            </Box>
          }
          title={userName}
          subheader={title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {postDescription.length > 150
              ? `${postDescription.slice(0, 150)}....`
              : postDescription}
          </Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="194"
          image={postImage}
          alt="Paella dish"
        />

        {/*all like comment share container  */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.75rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1em",
              fontWeight: 600,
            }}
          >
            <Box
              sx={{
                display: "flex",
                // justifyContent: 'center',
                alignItems: "center",
              }}
            >
              <FavoriteIcon fontSize="small" />
              <ThumbUpOutlinedIcon fontSize="small" />
              <SentimentVeryDissatisfiedOutlinedIcon fontSize="small" />
            </Box>
            <Box>
              <span>{allLikes} other likes</span>
            </Box>
          </Box>

          {/* comments & shate  */}
          {/* <Box>{allComments}comments</Box> */}
        </Box>

        {/* like, comment, repost, share */}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1.5px solid #eee",
          }}
        >
          {/* like btn */}
          <LCRSBTN>
            <IconButton>
              <ThumbUpOutlinedIcon fontSize="small" />
            </IconButton>
            <span>Like</span>
          </LCRSBTN>
          <LCRSBTN>
            {/* comment btn */}
            <IconButton>
              <TextsmsOutlinedIcon fontSize="small" />
            </IconButton>
            <span>comments</span>
          </LCRSBTN>

          {/* repost btn */}
          <LCRSBTN>
            <IconButton>
              <RepeatOutlinedIcon fontSize="small" />
            </IconButton>
            <span>Reposts</span>
          </LCRSBTN>

          {/* send btn */}
          <LCRSBTN>
            <IconButton>
              <SendOutlinedIcon fontSize="small" />
            </IconButton>
            <span>Send</span>
          </LCRSBTN>
        </Box>
      </Card>
    </Box>
  );
}
