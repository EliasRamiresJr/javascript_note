import React from 'react';
import { Navigate } from 'react-router-dom';

const privateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('user') !== null
    return isAuthenticated ? children : <Navigate to={{ pathname: '/login' }} />
}

export default privateRoute;