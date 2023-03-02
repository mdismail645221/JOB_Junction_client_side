import { Box, styled } from "@mui/material";



export const COMMENT_CONTAINER = styled(Box)(({theme})=> ({
    backgroundColor: '#FFF',
    margin : '5rem 0'
}))

export const COMMENT_INPUT_CONTAINER = styled(Box)(({theme})=> ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap'
}))