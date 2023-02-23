import {Box, styled, Paper} from '@mui/material'
import { alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export const MESSAGINGLISTCONTAINER = styled(Box)(({theme})=> ({
    background: "#ddd",
    '& a': {
        textDecoration: 'none',
        color: '#000000'
    }
}))

// message 
export const TOPMESSAGE = styled(Paper)(({theme})=> ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}))

export const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    // marginRight: theme.spacing(2),
    marginLeft: 0,
    border: "1px solid black",
    width: "100%",
    // [theme.breakpoints.up("sm")]: {
    //     marginLeft: theme.spacing(3),
    //     width: "auto",
    // },
    margin: 0
}));


export const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("md")]: {
            width: "20ch",
        },
    },
}));

