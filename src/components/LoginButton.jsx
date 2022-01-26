import React from "react";
import { Button } from '@mui/material';
import { useAuth0 } from "@auth0/auth0-react";
import colors from "../colors";

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <Button
            type="submit"

            variant="contained"
            sx={sxButton}
            onClick={() => loginWithRedirect()}
        >
            Login
        </Button>
    )


};

const sxButton = {
    mt: 3,
    mb: 2,
    border: `1px solid ${colors.primary}`,
    bgcolor: colors.primary,
    ":hover":
    {
        bgcolor: colors.white,
        color: colors.primary
    },
}

export default LoginButton;