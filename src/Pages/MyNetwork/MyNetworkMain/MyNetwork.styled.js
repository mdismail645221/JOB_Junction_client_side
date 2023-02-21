import { styled, Box, Paper, Stack } from "@mui/material";


export const INVITATION = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ddd',
    height: '35px'
}))

export const PROFILEINFOACCEPT = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    border: '1px solid #ddd',
    'h5, h6': {
        padding: 0,
        margin: 0,
        fontSize: '1rem'
    }
}))

export const ACCEPTIGNORE = styled(Stack)(({ theme }) => ({
    '& .accept-btn': {
        outline: 'none',
        border: 'none',
        backgroundColor: 'transparent',
        transition: '03ms',
        padding: '8px 15px',
        cursor: 'pointer'

    },
    '& .accept-btn:hover': {
        background: '#eee',
        borderRadius: "10px",
        cursor: 'pointer'
    },
    '& .ignore-btn': {
        backgroundColor: 'transparent',
        border: '1.5px solid darkred',
        borderRadius: '50px',
        padding: '8px 15px',
        color: 'darkred',
        cursor: 'pointer'
    },
    '& .ignore-btn:hover': {
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        border: '1.5px solid darkred',
        borderRadius: '50px',
        padding: '8px 15px',
        color: 'darkred',
        cursor: 'pointer',
        boxShadow: '1px 1px 1px darkred'
    }

}))

export const SHOWMOREBTN = styled(Box)(({ theme }) => ({
    padding: '1em 0',
    cursor: 'pointer',
    borderBottom: "1px solid #ddd",
    ':hover': {
        background: 'rgba(255, 0, 0, 0.1)'
    },
    '& button': {
        background: 'transparent',
        border: 'none',
    },
    '& button a': {
        background: 'transparent',
        display: 'inline-block',
        color: 'darkred',
        fontWeight: '700',
        textDecoration: 'none'

    }
}))

