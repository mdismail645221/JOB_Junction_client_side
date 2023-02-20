import React from 'react';
import { STARTINGLOADING } from './StartingLoading.styled';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const StartingLoading = () => {
    return (
        <STARTINGLOADING>
            <Box sx={{ width: '300px' }}>
                <img src="" alt='JOB junction' />
                <LinearProgress />
            </Box>
        </STARTINGLOADING>
    );
};

export default StartingLoading;