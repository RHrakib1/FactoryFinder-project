import React, { useContext } from 'react';
import { createContextUser } from '../Authentication/Authentication';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({ children }) => {
    const { user, loadding } = useContext(createContextUser)
    const location = useLocation()
    if (loadding) {
        return <h1 className='text-5xl font-bold'>loadding</h1>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={location.pathname}></Navigate>
};

export default PrivateRouter;