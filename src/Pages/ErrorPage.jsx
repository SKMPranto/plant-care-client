import React from 'react';
import { Link } from 'react-router';
import Title from '../Components/Title';

const ErrorPage = () => {
    Title("Error 404")
    return (
        <div className=' min-h-[calc(100vh-50px)]'>
            <div className='flex items-center justify-center  lg:h-[500px]'>
            <img src="https://i.ibb.co/8LrQkyGs/404error.png" alt="Image" />
            </div>
            <p className='pt-5 lg:pt-0 text-center lg:text-4xl font-extrabold text-red-500'>Oops! The page you're looking for doesn't exist</p>
            <div className='flex justify-center my-20'>
            <Link to='/' className='btn btn-soft btn-success lg:text-xl font-bold rounded-4xl p-7'>Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;