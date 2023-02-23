import { Box, styled, Paper } from "@mui/material";
import { Stack } from "@mui/system";



export const MESSAGINGCHATINGCONTAINER =styled(Box)(({theme})=> ({
    background: '#fff',
    border: '2px solid #eeeeee',
    
}))

export const CALLVIDEOSECTION = styled(Stack)(({theme})=> ({
    display: 'flex',
    alignItems: 'center'
}))

// user chat | messging section
export const USERMESSAGEINFO = styled(Box)(({theme})=> ({
    border: '1px solid #ddd',
    borderRadius: '25px',
    padding: '0.25rem 1rem',
    background: '#eeeeee'
}))