import React from 'react';
import Button from '../components/Button';
import { Container, Typography } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";

function LoginScreen() {
    const { loginWithRedirect } = useAuth0();

    return (
        <Container component="main" maxWidth="s" sx={sxContainer}>
            <Typography sx={sxText}>
                You need to login to access this page.
            </Typography>
            <Button label='Login' onClick={() => loginWithRedirect()} />
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