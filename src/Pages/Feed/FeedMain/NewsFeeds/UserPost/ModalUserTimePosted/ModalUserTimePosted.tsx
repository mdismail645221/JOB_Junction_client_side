import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ClearIcon from "@mui/icons-material/Clear";
import {
  DEFAULTIMGINFO,
  MODALBODY,
  MODALCONTAINAER,
  MODALTEXTAREA,
  MODALTITLE,
  POSTBUTTONCONTAINER,
} from "./ModalUserTimePosted.styled";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import QueuePlayNextIcon from "@mui/icons-material/QueuePlayNext";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import { MyContext } from "../../../../../../context/MyProvider/MyProvider";
import { SubmitHandler, useForm } from "react-hook-form";
import uploadImageToImageBB from "../../../../../../utilities/uploadImageToImageBB/uploadImageToImageBB";
import { toast } from "react-toastify";
import moment from "moment";
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalUserTimePosted = (props: any) => {
  const { currentUser } = React.useContext(MyContext);
  // console.log("props", props)
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  type Inputs = {
    postDescription: string;
    imgFile: FileList;
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    const { postDescription, imgFile } = data;
    const image = imgFile[0];
    const postDate = moment().format();
    console.log(postDescription, "\n", postDate, image);
    if (image) {
      // image upload to image BB
      uploadImageToImageBB(image)
        .then((res: any) => res.json())
        .then((imageData) => {
          // console.log("image data", imageData);
          const imageLink = imageData?.data?.display_url;
          // console.log("imageLink", imageLink);
          // if image succesfully uploaded the image link have a link otherwise have a undefined value
          // if image succesfully uploaded , then ,
          if (imageLink) {
            const timelinePosts = {
              userEmail: currentUser?.email,
              userName: currentUser?.displayName,
              title: "mern stack developer",
              profilePhotoURL: currentUser?.photoURL,
              postDescription: postDescription,
              postImage: imageLink,
              postDate: postDate,
              allLikes: [],
            };
            console.log(timelinePosts);

            reset();
          } else {
            toast.error("something went wrong, please try again");
            return;
          }
        });
    } else {
      const timelinePosts = {
        userEmail: currentUser?.email,
        userName: currentUser?.displayName,
        title: "mern stack developer",
        profilePhotoURL: currentUser?.photoURL,
        postDescription: postDescription,
        postDate: postDate,
        allLikes: [],
      };
      console.log(timelinePosts);
      //   todo: fetch here

      reset();
    }
  };
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
                <Box component="p" sx={{ flexGrow: 1 }}>
                  Create a post
                </Box>
                <Box>
                  <IconButton onClick={props.handleClose}>
                    <ClearIcon />
                  </IconButton>
                </Box>
              </MODALTITLE>
              {/* // DEFAULTIMGINFO   */}
              <DEFAULTIMGINFO>
                <Box sx={{ paddingRight: "0.75rem" }}>
                  <Avatar
                    sx={{ width: "50px", height: "50px", borderRadius: "100%" }}
                    src={currentUser?.photoURL}
                    alt={currentUser?.displayName}
                  />
                </Box>
                <Box>
                  <Typography>{currentUser?.displayName}</Typography>
                  <Typography>
                    Front-end developer | MERN Stack web developer
                  </Typography>
                </Box>
              </DEFAULTIMGINFO>

              <form onSubmit={handleSubmit(handleFormSubmit)}>
                {/* modal text area  */}
                <MODALTEXTAREA>
                  <TextareaAutosize
                    {...register("postDescription", {
                      required: "postDescription is required",
                    })}
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

                    {/* <IconButton>
                      <AddPhotoAlternateIcon />
                      <input type="file" name="" id="" />
                    </IconButton> */}
                    <div
                      style={{
                        display: "inline",
                      }}
                    >
                      <IconButton>
                        <label htmlFor="file-input">
                          <AddPhotoAlternateIcon />
                        </label>
                      </IconButton>

                      <input
                        {...register("imgFile")}
                        id="file-input"
                        type="file"
                        style={{ display: "none" }}
                      />
                    </div>

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
                    <Button type="submit">Post Now</Button>
                  </Box>
                </POSTBUTTONCONTAINER>
              </form>
            </MODALBODY>
          </MODALCONTAINAER>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default ModalUserTimePosted;
