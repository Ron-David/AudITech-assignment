import React from 'react';
import LoginButton from '../components/LoginButton';
import { Container, Typography } from '@mui/material';
import colors from '../colors';

function LoginScreen(props) {
    return (
        <Container component="main" maxWidth="s" sx={sxContainer}>
            <Typography sx={sxText}>
                You need to login to access this page.
            </Typography>
            <LoginButton />
        </Container>
    );
}
const sxContainer = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    my: '2rem'
}

const sxText = {
    fontSize: "1.2rem",
    display: 'flex',
    alignItems: 'center'
}
export default LoginScreen;