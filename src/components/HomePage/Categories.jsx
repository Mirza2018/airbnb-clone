'use client'
import React, { useState } from 'react';
import { LuKeyRound, LuTicket, LuTrees } from "react-icons/lu";
import { BsUmbrella } from "react-icons/bs";
import { IoBedOutline, IoGolfOutline } from 'react-icons/io5';
import { PiBuildingOfficeLight, PiParkLight, PiSailboatThin } from "react-icons/pi";
import { GiGrandPiano, GiIsland, GiTheaterCurtains } from "react-icons/gi";
import { TbUfo } from "react-icons/tb";
import { VscCoffee, VscSettings } from "react-icons/vsc";
import { IoIosArrowDropleft,IoIosArrowDropright  } from "react-icons/io";


const Categories = () => {
    const [showItems, setShowItems] = useState(8);
    return (
        <div className=' mt-5  '>
            <hr />
            <div className='flex justify-between '>
                
            {/* Category list */}
          <div className='flex justify-between items-center mt-4 flex-1'>
          {
                    showItems>=9 ?    <IoIosArrowDropleft className='text-6xl cursor-pointer  rounded-full' onClick={()=>setShowItems(showItems-1)} /> : <div className=''> </div>
                    
                }

            {
                catagories.slice(showItems-8,showItems).map(cat=>
                    <div key={cat.name} className=' flex flex-col items-center '>
                    {cat.icon}
                    <p>{cat?.name}</p>
                    </div>
                )
            }

                {
                    showItems<=9 ?   <IoIosArrowDropright   className='text-6xl cursor-pointer' onClick={()=>setShowItems(showItems+1)}   /> : <div className=''></div>
                    
                }

          </div>


            {/* Category Filter  */}
            <div className='flex gap-3 mx-4'>

         
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
        </div>
    );
};

export default Categories;


const catagories=[
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
        icon:< LuKeyRound rand   className='text-3xl '/> ,
        name:"New"
    },
]