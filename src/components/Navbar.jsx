import React from 'react';
import { AppBar, Stack, Typography } from '@mui/material';
import Logout from './Logout';
import colors from '../colors';
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
    const { isAuthenticated } = useAuth0()
    return (
        <AppBar sx={sxAppBar} position='sticky' >
            <Stack direction="row" sx={sxStack}>
                <Typography fontSize="1.2rem" >
                    Finance
                </Typography>
                {isAuthenticated &&
                    <Logout />
                }
            </Stack>
        </AppBar>
    );
}
const sxStack = {
    justifyContent: 'space-between',
    alignItems: 'center',
    m: 1,
    mx: 2
}

const sxAppBar = {
    background: colors.primary
}
export default Navbar;