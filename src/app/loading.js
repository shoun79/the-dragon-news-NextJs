import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const LoadingPage = () => {
    return (
        <Box sx={{ display: 'flex', marginTop: '30px', justifyContent: 'center' }}>
            <CircularProgress />
        </Box>
    );
};

export default LoadingPage;