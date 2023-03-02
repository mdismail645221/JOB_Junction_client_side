import React from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import SentimentSatisfiedSharpIcon from '@mui/icons-material/SentimentSatisfiedSharp';
// import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import { COMMENT_CONTAINER, COMMENT_INPUT_CONTAINER } from './UserComment.styled';

const UserComment = () => {
    return (
        <COMMENT_CONTAINER>
            <COMMENT_INPUT_CONTAINER>
                <Avatar alt="raju" src="https://i.ibb.co/RTLpQDw/ismail-fb-img.png" />
                <Box sx={{flexGrow: 1}}>
                    {/* comment input field start */}
                    <Box sx={{display: 'flex', flexWrap: 'nowrap'}}>
                        <TextField fullWidth size='small' type='text' />
                        <IconButton>
                            <SentimentSatisfiedSharpIcon/>
                        </IconButton>
                        <IconButton>
                            <PhotoCameraOutlinedIcon/>
                        </IconButton>
                        <IconButton>
                            <GifBoxOutlinedIcon/>
                        </IconButton>
                    </Box>
                     {/* comment input field end */}
                </Box>
            </COMMENT_INPUT_CONTAINER>
        </COMMENT_CONTAINER>
    );
};

export default UserComment;