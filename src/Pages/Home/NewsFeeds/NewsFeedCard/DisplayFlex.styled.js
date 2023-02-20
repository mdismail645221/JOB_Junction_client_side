import { styled } from "@mui/material";


export const LCRSBTN = styled('div')(({ theme }) => ({
    // background: 'red',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    transition: '.3ms',
    padding: '1rem 1rem',
    
    ':hover': {
        backgroundColor: '#eee',
        '& svg': {
            color: 'red',
            // transfrom: ''
        }

    }

}))
