import { Stack, styled, Box} from "@mui/material";


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

    '& .submit_btn button': {
        backgroundColor: '#ff1714',
        color: '#fff',
        padding: '5px 15px',
        borderRadius: '50px'
    },
    '& .submit_btn:hover button': {
        backgroundColor: '#ff1714',
        boxShadow: '1px 1px 5px #ff1714',
        color: '#fff',
        padding: '5px 15px',
        borderRadius: '50px'
    },


}))

export const MODAL_BODY = styled(Box)(({theme})=> ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    backgroundColor: '#fff',
    border: '3px solid #ff1714',
    borderRadius: '25px',
    boxShadow: '2px 2px 10px #fff',
    padding: '1.25rem',
    '@media (max-width:600px)': {
        width: '100%',
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