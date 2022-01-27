import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

import LoginScreen from './LoginScreen';
import FinanceScreen from './FinanceScreen';
import Loading from '../components/Loading';

function HomeScreen() {
    const { isAuthenticated, isLoading } = useAuth0()

    if (isLoading) return <Loading />

    return isAuthenticated ? <FinanceScreen /> : <LoginScreen />

}

export default HomeScreen;