import React from 'react';
import useAuth from '../hooks/useAuth';
import { Navigate } from 'react-router';

const PriviteRoutes = ({children}) => {
    const {user , loading} = useAuth()

    if(loading){
        return <span className='loading loading-spinner loading-xl'></span>
    }

    if(!user){
        <Navigate to="/login" state={{ from: location }} replace />;
    }

    return (
        children
    );
};

export default PriviteRoutes;