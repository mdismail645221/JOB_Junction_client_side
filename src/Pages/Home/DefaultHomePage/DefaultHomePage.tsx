import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import {
  FORGOTPASSWORD,
  HOMEPAGECONTAINER,
  HOMEPAGESIGNIN,
  LEFTSIDECONTAINER,
  SIGNINBUTTON,
  SOCIALSIGNCONTAINER,
} from "./DefaultHomePage.styled";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import { MyContext } from "../../../context/MyProvider/MyProvider";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { Link } from "react-router-dom";

const DefaultHomePage = () => {
  const { emailPasswordSignIn, currentUser, isLoading } = useContext(MyContext);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignInLoading, setIsSignInLoading] = useState(false);
  const [googleSignInError, setGoogleSignInError] = useState("");
  const [emailPasswordSignInError, setEmailPasswordSignInError] = useState("");
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location?.state?.from?.pathname || "/feed";
  type Inputs = {
    email: string;
    password: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  if (isLoading) {
    return (
      <Box sx={{ width: "100%", height: "100vh" }}>
        <Loader type="" />
      </Box>
    );
  } else if (currentUser && currentUser?.uid) {
    navigate("/feed");
  }

  // password shoing toggle function implement
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  console.log("showPassword", showPassword);

  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    // console.log(data);
    setEmailPasswordSignInError("");
    setGoogleSignInError("");

    setIsSignInLoading(true);
    const { email, password } = data;
    emailPasswordSignIn(email, password)
      .then((userCredential: any) => {
        // Signed in
        const user = userCredential.user;
        console.log("signin user: ", user);
        console.log("user sign in succesfully");
        setIsSignInLoading(false);
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 100);

        // ...
      })
      .catch((error: any) => {
        const errorCode = error?.code;
        const errorMessage = error.message;
        // console.log(errorMessage);
        console.log("user is not sign in succesfully");
        setIsSignInLoading(false);
        setEmailPasswordSignInError(errorMessage);
      });
  };
  return (
    <HOMEPAGECONTAINER
      sx={{
        display: "grid",
        gridTemplateColumns: {
          sx: "1fr",
          md: "5fr 7fr",
          height: "100vh",
        },
      }}
    >
      <HOMEPAGESIGNIN>
        <Stack spacing={3} paddingX="2rem">
          <Typography
            sx={{
              fontSize: {
                sx: "1rem",
                md: "1.50rem",
              },
              fontWeight: 400,
              lineHeight: "2rem",
              color: "#ff1744a3",
            }}
            component="h3"
          >
            Wellcome to your <br></br> professional community
          </Typography>
          <form onSubmit={handleSubmit(handleFormSubmit)}>
            <Stack direction="column" spacing={3}>
              <div>
                <TextField
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                  })}
                  fullWidth
                  id="outlined-basic"
                  label="Email"
                />
              </div>
              {errors?.email && (
                <p role="alert" style={{ color: "red", fontWeight: 700 }}>
                  {/* Name is required */}
                  {errors?.email?.message}
                </p>
              )}

              {/* password input field container */}
              <Box>
                <Box sx={{ position: "relative" }}>
                  <TextField
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Please enter your password",
                      },
                    })}
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                  />
                  {errors?.password && (
                    <p role="alert" style={{ color: "red", fontWeight: 700 }}>
                      {/* Name is required */}
                      {errors?.password?.message}
                    </p>
                  )}
                  {/* hide or showing  password toggle btn   */}
                  <IconButton
                    className="showHideBtn"
                    sx={{ position: "absolute", top: 0, right: 0 }}
                    onClick={handleClickShowPassword}
                  >
                    <Button>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </Button>
                  </IconButton>
                </Box>
              </Box>

              {/* forgot password  */}
              <FORGOTPASSWORD>
                <Typography href="#" component="a">
                  Forgot Password?
                </Typography>
              </FORGOTPASSWORD>

              {/* signin button */}
              <SIGNINBUTTON>
                <Button type="submit" disabled={isSignInLoading}>
                  Sign in
                </Button>
              </SIGNINBUTTON>
              {emailPasswordSignInError && (
                <p role="alert" style={{ color: "red", fontWeight: 700 }}>
                  {emailPasswordSignInError}
                </p>
              )}
              {isSignInLoading && (
                <>
                  <Box sx={{ width: "100%" }}>
                    <Loader type="progressor" />
                  </Box>
                </>
              )}
              {/* dividar */}
              <Box>
                <Divider>
                  <Chip label="OR" />
                </Divider>
              </Box>

              {/* goggleBtn */}
              <SOCIALSIGNCONTAINER>
                <Box className="goggleSignBtn">
                  <GoogleIcon />
                  <Typography sx={{ paddingLeft: "10px" }} component="a">
                    Sign in with Google
                  </Typography>
                </Box>
                <Box className="LinkedinBtn">
                  <Typography component="a">
                    New to linkedin?{" "}
                    <Link style={{ textDecoration: "none" }} to="/signup">
                      Join now
                    </Link>
                  </Typography>
                </Box>
              </SOCIALSIGNCONTAINER>
            </Stack>
          </form>
        </Stack>
      </HOMEPAGESIGNIN>

      {/* home page gif animated img ==left side== */}
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
        }}
      >
        <LEFTSIDECONTAINER>
          <div>
            <img
              src="https://cdn.dribbble.com/users/1292677/screenshots/6139167/media/fcf7fd0c619bb87706533079240915f3.gif"
              alt="userCodding"
            />
          </div>
          {/* <iframe src="https://giphy.com/embed/qgQUggAC3Pfv687qPC" width="480" height="360" frameBorder="0"  allowFullScreen></iframe> */}
        </LEFTSIDECONTAINER>
      </Box>
    </HOMEPAGECONTAINER>
  );
};

export default DefaultHomePage;
