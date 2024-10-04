"use client"
import React, { useContext } from 'react';
import Item from './Item';
import { ApiContext } from '@/Context/ApiProvider';


const Items = () => {
    const {houses,loading}=useContext(ApiContext)
    // console.log(houses);
    
    return (
        <div className="container mx-auto">
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 '>
                {/* <Item/> */}

                {
                    loading ? 
                    
                <div className="flex flex-col bg-neutral-300 w-60 h-64 animate-pulse rounded-xl p-4 gap-4">
                <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                <div className="flex flex-col gap-2">
                    <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                    <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                    <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                    <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                </div>
                </div>

                    : 
                     houses?.map((house,i)=><Item house={house} key={i} />)
                }
        

            </div>
        </div>
    );
};

export default Items;


