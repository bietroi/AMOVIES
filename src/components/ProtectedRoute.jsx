import React from 'react'
import { Navigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {

    const { user } = UserAuth();

    return (
        <div>
            {!user ? <Navigate to='/' /> : children}

        </div>
    )
}

export default ProtectedRoute;