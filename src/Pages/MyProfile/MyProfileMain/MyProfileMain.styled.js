import { Box, styled } from "@mui/material";


export const MY_PROFILE_CONTAINER = styled(Box)(({ theme }) => ({
    width: "100%",
    marginTop: "1em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    '& .userImg_and_bgImg_container': {
        position: "relative",
        top: "0",
        left: "0"
    },
    '& .Card': {
        background: '#fff',
        border: "1px dashed #ff1714",
        borderRadius: "7px",
        boxShadow: "1px 2px 3px #ff1714",
        // padding: "5px 8px",

    }
}))


export const BACKGROUND_PROFILE_IMG_CONTAINER = styled(Box)(({ theme }) => ({
    width: '100%',
    position: 'relative',
    top: '0',
    left: '0',
    '& button': {
        position: 'absolute',
        bottom: '-40px',
        right: '10px',
        color: '#ff1714',
        border: '1px solid #ff1714'
    }
    // zIndex: '-1'
}))