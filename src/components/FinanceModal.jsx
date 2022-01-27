import React from 'react';
import { Modal as MuiModal, Typography, Box, Container } from '@mui/material';
import colors from '../config/colors';
import _ from 'lodash';
import CheckIcon from './CheckIcon';
import { titles } from '../services/financeServices';

const divider = () => {
    return <div style={sxDivider} />
}

const handleTypes = data => {
    switch (typeof data) {
        case 'boolean':
            return <CheckIcon isChecked={data} />
        case 'object':
            return (
                <React.Fragment >
                    <Typography variant='body2' sx={sxText}>
                        fmt: {data.fmt}
                    </Typography>
                    <Typography variant='body2' sx={sxText}>
                        raw: {data.raw}
                    </Typography>
                </React.Fragment>)
        case 'string':
            return data.replace('/', ", ").replace('_', '-')
        default:
            return data
    }
}

function FinanceModal({ data, visibility, handleClose }) {
    return (
        <MuiModal
            open={visibility}
            onClose={handleClose}
        >

            <Box sx={sxBox}>
                <Typography fontWeight='bold' sx={{ fontSize: '1.3rem' }} >
                    {data.fullExchangeName}
                </Typography>

                {titles.map(title => {
                    if (!data[title.key] && typeof data[title.key] !== 'boolean') return
                    return (
                        <React.Fragment key={title.key}  >
                            {divider()}
                            <Container>
                                <Typography variant='body2' mt='1rem' fontWeight='bold' >
                                    {title.label}:
                                </Typography>
                                <Container sx={sxContainer} >
                                    {handleTypes(data[title.key])}
                                </Container>
                            </Container>
                        </React.Fragment>
                    )
                })}
            </Box>
        </MuiModal >
    );
}
const sxContainer = {
    display: 'flex',
    justifyContent: 'end'

}
const sxBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    color: `${colors.grey}`,
    outline: 'none',
    bgcolor: colors.primary,
    boxShadow: `0 0 10px 1px ${colors.primary}`,
    p: 3,
    overflow: 'scroll',
    maxHeight: '60vh',
    borderRadius: '0px'
}

const sxDivider = {
    border: `1px solid ${colors.secondary}`,
    width: '100%',
    margin: '0.5rem'
}

const sxText = {
    p: '0.5rem',
    mx: '5px',
    width: '100%',
    border: `1px dotted ${colors.secondary}`
}
export default FinanceModal;