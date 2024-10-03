"use client"
import React, { useState, useRef } from 'react';
import { LuKeyRound, LuTicket, LuTrees } from "react-icons/lu";
import { BsUmbrella } from "react-icons/bs";
import { IoBedOutline, IoGolfOutline } from 'react-icons/io5';
import { PiBuildingOfficeLight, PiParkLight, PiSailboatThin } from "react-icons/pi";
import { GiGrandPiano, GiIsland, GiTheaterCurtains } from "react-icons/gi";
import { TbUfo } from "react-icons/tb";
import { VscCoffee, VscSettings } from "react-icons/vsc";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import "./categories.css"
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';




const Categories = () => {
    const [scrollPosition, setScrollPosition] = useState(0); // Track current scroll position
    const scrollRef = useRef(null); // Ref for scrollable container

    // Function to handle right scroll
    const handleScrollRight = () => {
        if (scrollRef.current) {
            const newPosition = scrollRef.current.scrollLeft + 300; // Scroll by 300px (can adjust)
            scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
            setScrollPosition(newPosition);
        }
    };

    // Function to handle left scroll
    const handleScrollLeft = () => {
        if (scrollRef.current) {
            const newPosition = scrollRef.current.scrollLeft - 300;
            scrollRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
            setScrollPosition(newPosition);
        }
    };


    

    return (
        <div className='my-5 mt-56'>
            <hr />

        <div>
            
        </div>

            <div className='relative flex justify-between items-center container mx-auto  gap-1 my-3'>
                

<SlArrowLeft className={`text-3xl cursor-pointer ring-1 ring-gray-400 p-2 rounded-full ${scrollPosition === 0 ? 'hidden' : ''}`} // Hide if at start
                    onClick={handleScrollLeft} />

                {/* Categories List */}
                <div ref={scrollRef} className='flex overflow-x-auto no-scrollbar gap-4 w-full mx-2 no-scrollbar'>
                    {categories.map((cat) => (
                        <div key={cat.name} className='flex flex-col items-center min-w-[100px]'>
                            {cat.icon}
                            <p className='text-sm'>{cat.name}</p>
                        </div>
                    ))}
                </div>

                {/* Scroll Right Button */}


<SlArrowRight   className='text-3xl cursor-pointer ring-1 ring-gray-400 p-2 rounded-full'
                    onClick={handleScrollRight}/>

            {/* Category Filter Section */}
            <div className='flex gap-3 '>
                <div className='flex items-center gap-1 ring-1 ring-gray-300 rounded-xl px-2 my-2'>
                    <VscSettings />
                    Filter
                </div>
                <div className='flex items-center gap-1 ring-1 ring-gray-300 rounded-xl px-2 my-2'>
                    Display total before taxes
                    <VscSettings />
                </div>
            </div>


            </div>

            <hr />
        </div>
    );
};

export default Categories;

// Categories Data
const categories=[
    {
        icon:<LuTicket  className='text-3xl '/>,
        name:"icons"
    },
    {
        icon:<BsUmbrella  className='text-3xl '/> ,
        name:"Betch"
    },
    {
        icon:<IoBedOutline className='text-3xl '/> ,
        name:"Rooms"
    },
    {
        icon:<LuTrees className='text-3xl '/> ,
        name:"Countryside"
    },
    {
        icon:<PiBuildingOfficeLight className='text-3xl '/> ,
        name:"Mansions"
    },
    {
        icon:<PiParkLight  className='text-3xl '/> ,
        name:"National Parks"
    },
    {
        icon:<TbUfo   className='text-3xl '/> ,
        name:"OMG!"
    },
    {
        icon:<GiTheaterCurtains   className='text-3xl '/> ,
        name:"Amazing views"
    },
    {
        icon:<VscCoffee    className='text-3xl '/> ,
        name:"Bed & breakfasts"
    },
    {
        icon:<  IoGolfOutline   className='text-3xl '/> ,
        name:"Top of the world"
    },
    {
        icon:<  GiIsland    className='text-3xl '/> ,
        name:"islands"
    },
    {
        icon:< PiSailboatThin    className='text-3xl '/> ,
        name:"Boats"
    },
    {
        icon:< LuKeyRound   className='text-3xl '/> ,
        name:"New"
    },
]