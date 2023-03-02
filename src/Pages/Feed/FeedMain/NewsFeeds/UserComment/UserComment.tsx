import React, { useContext } from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { COMMENT_CONTAINER, COMMENT_INPUT_CONTAINER, USER_COMMENT_CONTAINER } from './UserComment.styled';


const UserComment = () => {

    // const { currentUser:any } = useContext();

    return (
        <COMMENT_CONTAINER spacing={3}>
            <COMMENT_INPUT_CONTAINER>
                <Avatar alt="raju" src="https://i.ibb.co/RTLpQDw/ismail-fb-img.png" />
                <Box className="input-area" sx={{ flexGrow: 1 }}>
                    {/* comment input field start */}
                    <Box sx={{ display: 'flex', flexWrap: 'nowrap' }}>
                        <TextField placeholder='write a comment' fullWidth size='small' type='text' />
                        <IconButton>
                            <SentimentSatisfiedSharpIcon />
                        </IconButton>
                        <IconButton>
                            <PhotoCameraOutlinedIcon />
                        </IconButton>
                        <IconButton>
                            <GifBoxOutlinedIcon />
                        </IconButton>
                    </Box>
                    {/* comment input field end */}
                </Box>
                <Box className="send-btn">
                    <Button>Send</Button>
                </Box>
            </COMMENT_INPUT_CONTAINER>

            <USER_COMMENT_CONTAINER>
                <Box>
                    <Avatar alt="raju" src="https://i.ibb.co/4Wk94qt/sumit-shah-logo.png" />
                </Box>
                <Box className="comment">
                    <Box className="userName">
                        <Typography component="h3">Sumit Shah</Typography>
                    </Box>
                    <Box>
                        <Typography component="p">Have a good day.</Typography>
                    </Box>
                </Box>
            </USER_COMMENT_CONTAINER>

        </COMMENT_CONTAINER>
    );
};

export default UserComment;