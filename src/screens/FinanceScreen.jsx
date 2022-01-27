import React, { useState } from 'react';
import {
    CircularProgress, Link, Box,
    TableContainer, TableBody, TableRow, TableCell, Table
} from '@mui/material';
import _ from 'lodash'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

import colors from '../config/colors';
import FinanceModal from '../components/FinanceModal';
import CheckIcon from '../components/CheckIcon';
import { useFinanceFetch, columns } from '../services/financeServices';
import Loading from '../components/Loading';

function FinanceScreen() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedRow, setSelectedRow] = useState('')
    const [sortOrder, setSortOrder] = useState({ path: '_id', order: 'asc' })
    const { data, setData, isLoading } = useFinanceFetch()

    const handleRowSelect = row => {
        setSelectedRow(row)
        setModalOpen(true)
    }

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const handleHeadClick = key => {
        let sorted
        let order = 'asc'
        if (key === sortOrder.path) {
            order = sortOrder.order === 'asc' ? 'desc' : 'asc'
            sorted = _.orderBy(data, [key], [order])
        } else {
            sorted = _.orderBy(data, [key], [order])
        }
        setSortOrder({ path: key, order })
        setData(sorted)
    }

    const sortIcon = column => {
        if (column === sortOrder.path) {
            return sortOrder.order === 'asc' ? <KeyboardArrowUpOutlinedIcon fontSize="0.4rem" /> : <KeyboardArrowDownOutlinedIcon fontSize="0.4rem" />
        }
        return
    }


    if (isLoading) return <Loading />

    return (
        <Box sx={sxBox}>
            {!true && <CircularProgress />}
            {selectedRow && <FinanceModal data={selectedRow} visibility={modalOpen} handleClose={handleModalClose} />}
            <TableContainer sx={sxTable}>
                <Table
                    size={'medium'}
                >

                    <TableBody>
                        <TableRow >

                            {columns.map(cell => {
                                return <TableCell align={cell.align} key={cell.label} onClick={() => handleHeadClick(cell.key)}>
                                    <Link sx={sxLink} >
                                        {cell.label}{sortIcon(cell.key)}
                                    </Link>
                                </TableCell>
                            })}
                        </TableRow>

                        {data.map(cell => {
                            return (
                                <TableRow
                                    hover
                                    key={cell._id}
                                    onClick={() => handleRowSelect(cell)}
                                >
                                    <TableCell align='center'>{cell._id + 1}</TableCell>
                                    <TableCell>{cell.fullExchangeName}</TableCell>
                                    <TableCell>{cell.exchange}</TableCell>
                                    <TableCell>{cell.exchangeTimezoneName.replace("/", ", ").replace("_", "-")}</TableCell>
                                    <TableCell align='center' >{cell.symbol}</TableCell>
                                    <TableCell align='center'> <CheckIcon isChecked={cell.tradeable} /> </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box >
    );
}

const sxBox = {
    flexGrow: 1,
    mt: '1rem',
    display: 'flex',
    justifyContent: 'center'
}

const sxLink = {
    color: 'black',
    cursor: 'pointer',
    fontWeight: 'bold',
    textDecoration: 'underline',
    display: 'flex',
    alignItems: 'center'
}

const sxTable = {
    maxWidth: '90vw',
    display: 'flex',
    overflow: 'scroll',
    m: '1rem',
    boxShadow: `0 0 3px 2px ${colors.grey}`,
    borderRadius: '10px'
}
export default FinanceScreen;