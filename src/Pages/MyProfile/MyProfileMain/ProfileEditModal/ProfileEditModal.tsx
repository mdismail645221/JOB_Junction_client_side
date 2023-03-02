import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { EDIT_CONTAINER, ISERT_FIELD } from './ProfileEditModal.styled';
import { IconButton, TextField } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import GetAppIcon from '@mui/icons-material/GetApp';

const ProfileEditModal = (props: any) => {

    const { open, setOpen, handleOpen, handleClose } = props

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };



    return (
        <div>
            {/* <Button >Open modal</Button> */}
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <EDIT_CONTAINER spacing={3}>
                        <Box className="edit-intro">
                            <Typography component="h2" className="title">Edit intro</Typography>
                            <IconButton className='clear-btn' onClick={handleClose}>
                                <ClearIcon />
                            </IconButton>
                        </Box>


                        {/* profile img input start */}
                        <Box>
                            <Typography component="h2" className="titleLabel">Profile Photo</Typography>
                            <ISERT_FIELD>
                                <label htmlFor="file-input">
                                    <IconButton>
                                        <GetAppIcon />
                                    </IconButton>
                                </label>
                                <input id="file-input" type="file" />
                                {/* <TextField id="file-input" size='small' fullWidth type="file" /> */}
                            </ISERT_FIELD>
                        </Box>
                        {/* LOCATION input end */}

                        {/* cover photo  input start */}
                        <Box>
                            <Typography component="h2" className="titleLabel">Cover Photo</Typography>
                            <ISERT_FIELD>
                                <label htmlFor="file-input">
                                    <IconButton>
                                        <GetAppIcon />
                                    </IconButton>
                                </label>
                                <input id="file-input" type="file" />
                                {/* <TextField id="file-input" size='small' fullWidth type="file" /> */}
                            </ISERT_FIELD>
                        </Box>
                        {/*cover photo  input end */}

                        {/* name input start */}
                        <Box>
                            {/* <Typography component="h2">YOUR NAME</Typography> */}
                            <TextField size='small' fullWidth type="text" label='your name' />
                        </Box>
                        {/* name input end */}

                        {/* title input start */}
                        <Box>
                            {/* <Typography component="h2">YOUR TITLE</Typography> */}
                            <TextField size='small' fullWidth type="text" label='your title' />
                        </Box>
                        {/* title input end */}

                        {/* CITY input start */}
                        <Box>
                            {/* <Typography component="h2">CITY</Typography> */}
                            <TextField size='small' fullWidth type="text" label='city' />
                        </Box>
                        {/* CITY input end */}

                        {/* LOCATION input start */}
                        <Box>
                            {/* <Typography component="h2">LOCATION</Typography> */}
                            <TextField size='small' fullWidth type="text" label='location' />
                        </Box>
                        {/* LOCATION input end */}

                    </EDIT_CONTAINER>
                </Box>
            </Modal>
        </div>
    );
};

export default ProfileEditModal;