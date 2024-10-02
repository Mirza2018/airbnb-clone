import React from 'react';
import img1 from '../../../assets/img1.webp';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Item = () => {
    return (
        <div className='flex flex-col gap-3 items-start justify-center w-full'>
            <div className='relative '>
                <div className='absolute top-1/2 left-2 transform -translate-y-1/2 '>
                    <SlArrowLeft className='ring-1 ring-gray-400 rounded-full bg-gray-100 hover:bg-white hover:scale-110 p-2 text-3xl' />
                </div>
                <div className='absolute top-1/2 right-2 transform -translate-y-1/2'>
                    <SlArrowRight className='ring-1 ring-gray-400 rounded-full  bg-gray-100 hover:bg-white hover:scale-110 p-2 text-3xl' />
                </div>
                <Image
                    alt='img'
                    className='w-full rounded-xl object-cover aspect-square'
                    src={img1}
                    layout="responsive"
                />
            </div>
            <div className=''>
                <h3 className='text-lg font-semibold'>Name, Country</h3>
                <p className='text-lg text-gray-500'>Place Name</p>
                <p className='text-lg text-gray-500'>Date: 2-7</p>
                <p><span className='text-lg font-semibold'>$200</span> per night</p>
            </div>
        </div>
    );
};

export default Item;
