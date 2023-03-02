import { Box, styled } from "@mui/material";

// resume container 
export const RESUMECONTAINER = styled(Box)(({theme})=> ({
    width: '100%',
    background: '#fff',
    padding: '1rem 1rem',
    '&  .title': {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '1rem 0px'
    },
    '& .info': {
        fontSize: '1rem',
        color: '#141414',
        textAlign: 'justify'
    },
    '& span': {
        fontSize: '1.25rem',
        fontWeight: 'bold'
    },
    '& ul': {
        margin: 0
    }
}))


export const USERINFO = styled(Box)(({theme})=> ({
    background: '#fff',
    '& .userName': {
        fontSize: '2rem',
        textTransform: 'uppercase',
        fontWeight: 700,

    },
    '& .userDetails': {
        fontSize: '1.5rem',
        fontWeight: 700,
    },
    '& .userLocation': {
        fontSize: '1.5rem',
        fontWeight: 700,
    },
    '& ul': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: "1rem 0px",
    },
    '& ul li': {
        listStyle: 'none',
        padding: '0 1rem',
        borderRight: '2px solid #eeeeee'
    },
    '& ul li:nth-child(5)': {
        listStyle: 'none',
        padding: '0 1rem',
        borderRight: 'none'
    },
    '& ul li a': {
        padding: '1rem',
        textDecoration: 'none',
        color: "#0000EE",
        fontWeight: 700,
        fontSize: '1rem'

    }
}))


// career object for styled
export const USERCAREETOBJECT = styled(Box)(({theme})=> ({
    '& .careerTitle, .title': {
        fontSize: '1.25rem',
        fontWeight: 'bold'
    },
    '& .careerInfo, .info': {
        fontSize: '1rem',
        color: '#141414',
        textAlign: 'justify'
    },
}))


// Skills & Tools for styed
export const SkillSORTOOLS = styled(Box)(({theme})=> ({
    '& ul li span': {
        fontSize: '1.25rem',
        fontWeight: 'bold'
    },
    '& ul': {
        margin: 0,
        // padding: 0,
    }
}))


// Experience for styled
export const EXPERIENCE =styled(Box)(({theme})=> ({
    
    '& .allLinks': {
        display: 'flex',
        alignItems: 'center'
    },
    '& .allLinks li': {
        listStyle: 'none',
        borderRight: '2px solid #ddd',
        padding: '0 1rem'
    },
    '& .allLinks li:nth-child(3)': {
        
        borderRight: 'none',
    },
    '& .allLinks li a': {
        // padding: '1rem',
        textDecoration: 'none',
        color: "#0000EE",
        fontWeight: 700,
        fontSize: '1rem'

    }
}))