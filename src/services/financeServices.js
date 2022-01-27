import { useState, useEffect } from "react";
import axios from "axios";
import config from '../config/config.json'
import _ from 'lodash';

export const titles = [
    // { key: 'fullExchangeName', label: 'Full Exchange Name' },
    { key: 'exchange', label: 'Exchange' },
    { key: 'exchangeDataDelayedBy', label: 'Exchange Data Delayed By' },
    { key: 'exchangeTimezoneName', label: 'Exchange Timezone Name' },
    { key: 'exchangeTimezoneShortName', label: 'Exchange Timezone Short Name' },
    { key: 'firstTradeDateMilliseconds', label: 'First Trade Date Milliseconds' },
    { key: 'gmtOffSetMilliseconds', label: 'GMT OffSet Milliseconds' },
    { key: 'language', label: 'Language' },
    { key: 'market', label: 'Market' },
    { key: 'marketState', label: 'Market State' },
    { key: 'quoteSourceName', label: 'Quote Source Name' },
    { key: 'quoteType', label: 'Quote Type' },
    { key: 'region', label: 'Region' },
    { key: 'sourceInterval', label: 'Source Interval' },
    { key: 'symbol', label: 'Symbol' },
    { key: 'tradeable', label: 'Tradeable' },
    { key: 'triggerable', label: 'Triggerable' },

    { key: 'regularMarketChange', label: 'Regular Market Change' },
    { key: 'regularMarketChangePercent', label: 'Regular Market Change Percent' },
    { key: 'regularMarketPreviousClose', label: 'Regular Market Previous Close' },
    { key: 'regularMarketPrice', label: 'Regular Market Price' },
    { key: 'regularMarketTime', label: 'Regular Market Time' },

]

export const columns = [
    {
        label: '#',
        key: '_id',
        numeric: true,
        align: 'center',
    },
    {
        label: 'Name',
        key: 'fullExchangeName',
    },
    {
        label: 'Exchange',
        key: 'exchange',
    },
    {
        label: 'Timezone Name',
        key: 'exchangeTimezoneName',

    },
    {
        label: 'Symbol',
        key: 'symbol',
        align: 'center'
    },
    {
        label: 'Tradeable',
        key: 'tradeable',
        align: 'center'
    },
]

const keyMaker = (items) => {
    let count = 0
    return _(items).map(i => i = { _id: count++, ...i }).value()
}

const options = {
    headers: {
        'accept': 'application/json',
        'X-API-KEY': config.apiToken
    }
}

export const useFinanceFetch = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        setIsLoading(true)
        try {
            let { data: list } = await axios.get(config.apiEndPoint, options)
            setIsLoading(false);
            list = _.get(list, 'marketSummaryResponse.result')
            list = keyMaker(list)
            list = _.orderBy(list, ['_id'], ['asc'])
            setData(list)
        } catch (error) { }

    }

    return { data, setData, isLoading, fetchData }
};