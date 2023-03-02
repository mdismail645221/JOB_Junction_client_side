import { Box, Paper, styled, Stack } from "@mui/material";

// 35.375rem
export const MODALCONTAINAER = styled(Paper)(({theme})=> ({
    [theme.breakpoints.up('sx')]: {
        width: '100%',
      },
    [theme.breakpoints.up('md')]: {
        width: '35.375rem',
      }, 
}))


// modal body for styled 
export const MODALBODY = styled(Stack)(({theme})=> ({
    display: 'flex',
    flexDirection: 'column',
}))

// Modal top  title  container for styled
export const MODALTITLE = styled(Box)(({theme})=> ({
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1.5px solid #ddd'
}))

// DEFAULTIMGINFO for styled 
export const DEFAULTIMGINFO = styled(MODALTITLE)(({theme})=> ({
    padding: '1rem 0',
    border: 'none',
}))


// modal text area for styled
export const MODALTEXTAREA = styled(Box)(({theme})=> ({
    margin: '1.50rem 0'
}))

//  {/* IMG & video & document file and post button section for styled */}
export const POSTBUTTONCONTAINER = styled(Box)(({theme})=> ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& button': {
        backgroundColor: '#FF1714',
        color: '#ffffff',
        fontWidth: 'medium',
        border: '1.5px solid #FF1714',
        marginRight: '10px'
    },
    '& button:hover': {
        backgroundColor: '#FF1714',
        color: '#ffffff',
        fontWidth: 'medium',
        border: '1.5px solid #FF1714',
        boxShadow: '2px 2px 10px #FF1714'
        
    }
}))