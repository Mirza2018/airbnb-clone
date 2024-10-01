import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = () => {
    return (
        <div className='max-w-[900px]  mx-auto'>
        <div className='flex ring-1 ring-gray-300 rounded-full shadow-xl justify-between items-center cursor-pointer text-sm font-medium divide-x container' >
            
            <div className='hover:bg-gray-100 hover:rounded-full hover:border-x-1 hover:border-black py-2 px-4'>
                <label className=''>where</label>
                <br />
                <input className='text-gray-500  outline-none' placeholder='search destinations'/>
            </div>

            
            <div className='hover:bg-gray-100 hover:rounded-full hover:border-x-1  py-2 px-2 '>
                <h1 className=''>where</h1>
                <p className='text-gray-500'>search destinations</p>
            </div>
            <div className='hover:bg-gray-100 hover:rounded-full hover:border-x-1  py-2 px-2 '>
                <h1 className=''>where</h1>
                <p className='text-gray-500'>search destinations</p>
            </div>

       

            <div className='flex justify-center items-center gap-1 hover:bg-gray-100 hover:rounded-full hover:border-x-1  py-1 px-2 '>
                <div>
                <h1>Where</h1>
                <p className='text-gray-500'>search destinations</p>
                </div>
            <div className='p-4 bg-rose-400 rounded-full '>
            <FaSearch  className='text-white'/>
            </div>
            </div>

        </div>
        </div>
    );
};

export default Search;