import { Box , styled} from "@mui/material";



export const CONTAINER = styled(Box)(({ theme }) => ({
    display: 'grid',
    placeItems: 'center',
    '& button': {
        position: 'relative',
        border: '2px solid #ff1714',
        color: 'black',
        fontSize: '1.25rem',
        padding: '8px 15px',
        borderRadius: '50px'
    },
    '& .hoverEffect': {
        background: 'red',
        position: 'absolute',
        width: '5%',
        height: '100%',
        top: '0',
        left: '0',
        margin: '0px',
        opacity: '0',
        transition: '1s',
        color: '#fff',
        display: 'grid',
        placeItems: 'center',
        fontSize: '1rem',
        padding: '8px 15px',
        borderRadius: '50px'
    },
    
    '& button:hover> .hoverEffect': {
        background: '#ff1417',
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        left: '0',
        margin: '0px',
        opacity: '1',
        transition: '1s',
        color: '#fff',
        fontSize: '.90rem',
        padding: '8px 15px',
        borderRadius: '50px',
        boxShadow: '1.5px 3.5px 7px #ff1714'
    },
}))