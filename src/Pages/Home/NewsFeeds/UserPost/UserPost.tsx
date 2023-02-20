import { Box, TextField } from '@mui/material';
import Paper from '@mui/material/Paper';
import React from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoOutlinedIcon from '@mui/icons-material/PhotoOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import MapsHomeWorkOutlinedIcon from '@mui/icons-material/MapsHomeWorkOutlined';
import { PostField, PostTop, PostContainer, PostBottom, PostBtnGruop } from './UserPost.styled';

const UserPost = () => {
    return (
        <PostContainer>
            {/* PostTOp start */}
            <PostTop>
                <img src="https://i.ibb.co/4MnMYkJ/Joseph-Gray.png" alt="Joseph-Gray" />
                <PostField className="postField">
                    <span>Start Post</span>
                </PostField>
            </PostTop>
            {/* PostTop End */}

            {/* postBottom start */}.
            <PostBottom sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                // borderTop: '1.5px solid #eee'
            }}>
                {/* Photo btn */}
                <PostBtnGruop>
                    <IconButton>
                        <PhotoOutlinedIcon  />
                    </IconButton>
                    <span>Photo</span>
                </PostBtnGruop>
                <PostBtnGruop>

                    {/* Video btn */}
                    <IconButton>
                        <OndemandVideoOutlinedIcon/>
                    </IconButton>
                    <span>Video</span>
                </PostBtnGruop>

                {/* Job btn */}
                <PostBtnGruop>
                    <IconButton>
                        <WorkOutlineOutlinedIcon/>
                    </IconButton>
                    <span>Job</span>
                </PostBtnGruop>

                {/* WriteArticle btn */}
                <PostBtnGruop>
                    <IconButton>
                        <MapsHomeWorkOutlinedIcon/>
                    </IconButton>
                    <span>Write article</span>
                </PostBtnGruop>
            </PostBottom>
        </PostContainer>
    );
};

export default UserPost;