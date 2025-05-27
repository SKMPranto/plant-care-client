import React from 'react';

const AboutUs = () => {
    return (
        <div className='md:flex items-center justify-center my-10 lg:my-20'>
            <figure>
                <img src="https://i.ibb.co/XZzB6t90/about-us.png" alt="Image" className="" />
            </figure>
            <div className='md:w-[55%] text-center md:text-left lg:px-15 md:pt-15 lg:pt-10'>
                <h1 className='text-3xl md:text-5xl lg:text-7xl font-bold permanent-marker-regular text-green-500 py-5'>About us</h1>
                <p className='text-lg'>Welcome to <span className='font-bold'>Plant Care</span>, the free plant identification Webpage for all your plant care needs! Our goal is to assist you in nurturing your plants, ensuring their best possible growth, and enhancing the beauty they bring to your life. Plant Care aims to help you in every step of plant care, whether it is to keep track of the care needs of your plants or plant disease diagnosis, with our app you can leave the worries behind and watch your plants grow and thrive to their full potential.</p>
            </div>
        </div>
    );
};

export default AboutUs;