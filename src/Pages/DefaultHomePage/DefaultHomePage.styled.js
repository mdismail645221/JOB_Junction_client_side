import styled from "@emotion/styled";
import { Stack, Box } from "@mui/material";



export const HOMEPAGECONTAINER = styled(Stack)(({ theme }) => ({
    padding: "4rem 0"
}))



export const HOMEPAGESIGNIN = styled(Stack)(({ theme }) => ({

    '& .showHideBtn button': {
        // background: 'red',
        fontWeight: 700,
        color: '#FF1744'
    },

    '& form #outlined-basic:focus': {
        border: 'none',
        // background: 'red',
        outline: 'none'
    }

}))


// forgoting password  for style
export const FORGOTPASSWORD = styled(Box)(({ theme }) => ({
    '& a': {
        textDecoration: 'none',
        color: '#444444',
        fontWeight: 600,
    }
}))



export const SIGNINBUTTON = styled(Box)(({ theme }) => ({
    background: "#FF1744",
    width: "100%",
    padding: '.25rem 1rem',
    border: '1.5px solid #FF1744',
    borderRadius: "50px",
    boxShadow: '1.5px 1.5px 1.5px #FF1744',
    ':hover': {
        background: "#FF1730",
    },
    '& button': {
        color: "#ffffff",
        fontWeight: 900,
        textAlign: 'center',
        width: '100%',
    }
}))


// #ff174414
// SOCIALSIGNCONTAINER
export const SOCIALSIGNCONTAINER = styled(Stack)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& .goggleSignBtn': {
        border: '1.8px solid #dddddd',
        padding: ".85rem 1rem",
        borderRadius: "5px",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '1px 1.5px 1.5px #dddddd',
        transition: "5ms",
        '& a': {
            textDecoration: 'none',
            color: '#444444',
            fontWeight: 600,
        },
        '& a:hover': {
            color: "#FF1744"
        }
    },
    '& .goggleSignBtn:hover': {
        border: '1.8px solid #FF1744',
        boxShadow: '1px 1px 1px #FF1744',
        color: "#FF1744"
    },
    
    '& .LinkedinBtn': {
        marginTop: '1rem',
        border: '1.8px solid #dddddd',
        padding: ".85rem 1rem",
        borderRadius: "5px",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        boxShadow: '1px 1.5px 1.5px #dddddd',
        '& a': {
            textDecoration: 'none',
            color: '#444444',
            fontWeight: 'bolder',
        },
        '& a:hover': {
            color: "#FF1744"
        }
    },
    '& .LinkedinBtn:hover': {
        border: '1.8px solid #FF1744',
        boxShadow: '1px 1px 1px #FF1744',
        transition: "5ms"
    }
}))


// left side gif image for style
export const LEFTSIDECONTAINER = styled(Box)(({ theme }) => ({
    // background: 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100%",
    '& div': {
        border: '1.5px solid #dddddd',
        boxShadow: '1.5px 1.5px 1px #eeeeee',
        borderRadius: "10px",
        padding: '10px'
    },
    '& img': {
        maxWidth: '400px',
        minWidth: '480px',
        maxHeight: '480px',
        borderRadius: '1rem',
        transition: '1s',
    },
    '& img:hover': {
        maxWidth: '400px',
        minWidth: '500px',
        borderRadius: '1rem'
    },
}))

