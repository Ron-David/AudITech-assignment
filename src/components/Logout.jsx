import React from 'react';
import { Typography, Link } from '@mui/material';

import { useAuth0 } from "@auth0/auth0-react";
import colors from '../config/colors';

function Logout() {
    const { logout } = useAuth0();

    return (
        <Link onClick={() => logout({ returnTo: window.location.origin })} color={colors.white} sx={sxLink}>
            <Typography>
                Logout
            </Typography>
        </Link>
    );
}

const sxLink = {
    cursor: 'pointer'
}
export default Logout;