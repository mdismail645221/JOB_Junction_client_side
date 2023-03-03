import { Stack, styled } from "@mui/material";



export const PEOPLE_CONTAINER = styled(Stack)(({ theme }) => ({
    backgroundColor: '#fff',
    padding: '1rem',
    overflowY: 'scroll',
    height: '100%',

    '& .activeColor': {
        color: '#ff1714',
        border: '1px solid #ff1714',
        boxShadow: '1px 1px 7px #ff1714',
        fontSize: '1.25rem',
        fontWeight: 900
    },
    
    '& a': {
        textDecoration: 'none',
        color: '#131313',
        display: 'block',
        margin: '.25rem .25rem',
        border: '1px solid #ddd',
        padding: '0.75rem 1rem',
        borderRadius: '10px',
        position: 'relative',
        transition: '7ms',
    },
    '& a:hover': {
        textDecoration: 'none',
        color: 'black',
        display: 'block',
    },
    '& .userName_container ': {
        // background: '#eee',
    },
    '& a:hover ': {
        // background: '#eee',
        background: '#eee',
        color: '#ff1714',
        fontWeight: 'bold',
        fontSize: '1.25rem'
    },
    // '& .userName_container p': {
    //     background: 'red',
    //     position: 'absolute',
    //     width: '0%',
    //     height: '100%',
    //     top: '0',
    //     left: '0',
    //     margin: '0px',
    //     opacity: '0',
    //     transition: '3s',
    // },
    // '& .userName_container:hover p': {
    //     background: 'red',
    //     position: 'absolute',
    //     width: '100%',
    //     height: '100%',
    //     top: '0',
    //     left: '0',
    //     margin: '0px',
    //     opacity: '.5',
    //     transition: '3s',
    //     color: '#fff'
    // },
}))