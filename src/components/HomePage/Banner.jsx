import React from 'react';
import bannerBookImg from '../../../assets/banner-book.png'

const Banner = () => {
    return (
        <div className="flex flex-col lg:flex-row-reverse w-full justify-between bg-base-200 max-w-[90%] rounded-lg mx-auto lg:px-20 py-10 my-20">
            <div className='max-h-80 flex lg:justify-start justify-center lg:pb-0 pb-10'>
                <img src={bannerBookImg} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className="lg:text-5xl text-4xl font-bold mb-6 lg:text-left text-center">Books to freshen up <br /> your bookshelf</h1>
                <div className='flex lg:justify-start justify-center'>
                    <button className="btn btn-success">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;