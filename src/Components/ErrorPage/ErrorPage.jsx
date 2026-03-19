import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <h1>404 Page Not Found</h1>
            <Link to={'/'} className='btn '>Go Home</Link>
        </div>
    );
};

export default ErrorPage;