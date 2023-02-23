import { styled, Box, Paper } from "@mui/material";


export const NewsFeedContainer = styled(Box)(({ theme }) => ({
    background: '#eee',
    display: 'grid',
    gridTemplateColumns: 'repeat(1, 1fr)',
    gap: '1rem'

}))