import React from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

function CheckIcon({ isChecked }) {

    return isChecked ? <CheckOutlinedIcon color='success' /> : <CloseOutlinedIcon color='error' />

}

export default CheckIcon;