import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ClearIcon from '@mui/icons-material/Clear';
import { DEFAULTIMGINFO, MODALBODY, MODALCONTAINAER, MODALTEXTAREA, MODALTITLE, POSTBUTTONCONTAINER } from './ModalUserTimePosted.styled';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import QueuePlayNextIcon from '@mui/icons-material/QueuePlayNext';
import UploadFileIcon from '@mui/icons-material/UploadFile';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};




const ModalUserTimePosted = (props: any) => {
    // console.log("props", props)
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    return (
        <React.Fragment>
            <div>
                {/* <Button onClick={handleOpen}>Open modal</Button> */}
                <Modal
                    open={props.open}
                    onClose={props.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <MODALCONTAINAER sx={style}>
                        <MODALBODY spacing={2}>
                            {/* // Modal top  title  container for styled */}
                            <MODALTITLE>
                                <Box component="p" sx={{ flexGrow: 1 }}>Create a post</Box>
                                <Box>
                                    <IconButton onClick={props.handleClose}>
                                        <ClearIcon />
                                    </IconButton>
                                </Box>
                            </MODALTITLE>
                            {/* // DEFAULTIMGINFO   */}
                            <DEFAULTIMGINFO>
                                <Box sx={{ paddingRight: '0.75rem' }}>
                                    <Avatar sx={{ width: '50px', height: '50px', borderRadius: '100%' }} alt="ismail hossain" src="https://i.ibb.co/RTLpQDw/ismail-fb-img.png" />
                                </Box>
                                <Box>
                                    <Typography>Mohammad Ismail Hossain</Typography>
                                    <Typography>Front-end developer | MERN Stack web developer</Typography>
                                </Box>
                            </DEFAULTIMGINFO>

                            {/* modal text area  */}
                            <MODALTEXTAREA>
                                <TextareaAutosize
                                    aria-label="minimum height"
                                    minRows={5}
                                    placeholder="What do you want to talk about?"
                                    style={{ width: "100%" }}
                                />
                            </MODALTEXTAREA>

                            {/* IMG & video & document file and post button section */}
                            <POSTBUTTONCONTAINER>
                                <Box>
                                    {/* add photo icons */}
                                    <IconButton>
                                        <AddPhotoAlternateIcon />
                                    </IconButton>
                                    {/* video icons */}
                                    <IconButton>
                                        <QueuePlayNextIcon />
                                    </IconButton>
                                    {/* file icons */}
                                    <IconButton>
                                        <UploadFileIcon />
                                    </IconButton>
                                </Box>
                                {/* post button */}
                                <Box>
                                    <Button>Post Now</Button>
                                </Box>
                            </POSTBUTTONCONTAINER>

                        </MODALBODY>
                    </MODALCONTAINAER>
                </Modal>
            </div>
        </React.Fragment>
    );
};

export default ModalUserTimePosted;