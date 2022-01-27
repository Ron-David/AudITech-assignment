import React from "react";
import { Button as MButton } from '@mui/material';
import colors from "../config/colors";

const Button = ({ onClick, label }) => {

    return (
        <MButton
            variant="contained"
            sx={sxButton}
            onClick={onClick}
        >
            {label}
        </MButton>
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

export default Button;