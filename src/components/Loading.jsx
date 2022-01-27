import React from 'react';
import { CircularProgress, Box } from '@mui/material';

function Loading() {
    return (
        <Box sx={sxBox}>
            <CircularProgress />
        </Box>
    );
}
const sxBox = {
    m: '5rem',
    display: 'flex',
    justifyContent: 'center',
}
export default Loading;