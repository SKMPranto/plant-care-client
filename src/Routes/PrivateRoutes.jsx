import React, { use } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import Spinner from '../Components/Spinner';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {
    const location = useLocation()
    const {user, loading} = use(AuthContext);

    if(loading) {
        return <Spinner></Spinner>
    }
    if(!user){
        return <Navigate state={location.pathname} to="/auth/login"></Navigate>
    }
    return children
};

export default PrivateRoutes;