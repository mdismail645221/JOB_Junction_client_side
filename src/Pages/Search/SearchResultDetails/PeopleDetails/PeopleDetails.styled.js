import { Stack, styled } from "@mui/material";




export const PEOPLE_DETAILS_CONTAINER = styled(Stack)(({ theme }) => ({
    border: '2px solid #eee',
    boxShadow: '3px 1px 5px #ddd',
    color: '#000000',
    padding: '0.50rem 1rem',
    alignItems: 'center',

    '& .userName': {
        fontSize: '1.50rem',
        textTransform: 'uppercase',
        fontWeight: 'bold'
    },

    '& .userPhoto': {
        width: '70px',
        height: '70px',
        borderRadius: '50px',
        border: '2px solid #ff1714',
        boxShadow: '1px 1px 7px #ff1714'
    },

    '& .userTitle': {
        fontSize: '1rem',
        fontWeight: 600,
    }

}))