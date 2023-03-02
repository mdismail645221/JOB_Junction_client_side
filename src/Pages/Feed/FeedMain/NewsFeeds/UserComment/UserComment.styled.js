import { Box, Stack, styled } from "@mui/material";



export const COMMENT_CONTAINER = styled(Stack)(({theme})=> ({
    backgroundColor: '#FFF',
    margin : '2rem 1rem',

    '& .input-area': {
        background: '#eee',
        border: '1px solid #ddd',
        borderRadius: '50px',
        margin: '0 10px'
    },
    '& .css-1d3z3hw-MuiOutlinedInput-notchedOutline': {
        border: 'none'
    },

    '& .send-btn button': {
        background: '#ff1714',
        color: '#fff'
    }
}))

export const COMMENT_INPUT_CONTAINER = styled(Box)(({theme})=> ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    // flexWrap: 'wrap'
}))


// ------------user comment for styled -----------------//

export const USER_COMMENT_CONTAINER = styled(Box)(({theme})=> ({
    display: 'flex',
    '& .comment': {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        border: '1px solid #ddd',
        borderRadius: '25px',
        background: '#eee',
        flexGrow: 1,
        overflow: 'hidden',
        padding: '.75rem 1.25rem',
        marginLeft: '10px'
    },
    '& .userName h3': {
        fontSize: '0.98rem',
        fontWeight: 'bold'
    }
}))