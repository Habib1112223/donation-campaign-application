import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='h-[100vh] flex justify-center items-center'>
            <h2 className='text-3xl'>404 Error <Link className='text-blue-500' to="/">Back To Home</Link> </h2>
        </div>
    );
};

export default ErrorPage;