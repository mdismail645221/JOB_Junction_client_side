import { styled, Box, Stack} from "@mui/material";



export const JOBSCONTAINER = styled(Stack)(({theme})=> ({
    background:'#eeeeee',
    padding: '0 1rem',
    overflow: 'scroll',
    height: '500px',
    


    '& .title': {
        fontWeight: 'bold',
        fontSize: '1.25rem',
        color: 'black'
    },
    '& .card': {
        border:'1px dashed #ff1714',
        borderRadius: '7px',
        boxShadow: '1px 2px 3px #ff1714',
        padding: '5px 8px'
    },
}))