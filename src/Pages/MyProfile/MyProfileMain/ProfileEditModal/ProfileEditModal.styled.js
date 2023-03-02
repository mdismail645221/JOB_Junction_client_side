import { Stack, styled } from "@mui/material";


export const EDIT_CONTAINER = styled(Stack)(({theme})=> ({
    
    '& .edit-intro': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    '& .clear-btn': {
        border: '1px solid #ff1714',
        transition: '1s'
    },
    '& .clear-btn:hover': {
        border: '1px solid #ff1714',
        backgroundColor: '#ff1714',
        color: '#fff',
        fontWeight: 'bold',
        transition: '8ms'
    },
    '& .title': {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '1.25rem'
    },
    '& .titleLabel': {
        color: 'black',
        fontWeight: 'bold',
        fontSize: '1rem'
    },


}))


export const ISERT_FIELD = styled(Stack)(({theme})=> ({
    '& #file-input': {
        display: 'none'
    },
    '& label': {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1.5px dashed #ddd',
        borderRadius: '5px',
        padding: '.75rem',
        boxShadow: '1px 1px 7px #ddd',
        transition: '7ms'
    },
    '& label:hover button': {
        color: '#ff1714',
        boxShadow: '2px 2px 10px #ff1714',
        transition: '7ms'
    },
    '& label:hover ': {
        color: '#ff1714',
        cursor: 'pointer',
        transition: '7ms',
        boxShadow: '2px 2px 10px #ddd',
    }
}))