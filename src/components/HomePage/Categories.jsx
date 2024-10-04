"use client"
import React, { useState, useRef,useContext } from 'react';
import { LuKeyRound, LuTicket, LuTrees } from "react-icons/lu";
import { BsUmbrella } from "react-icons/bs";
import { IoBedOutline, IoGolfOutline } from 'react-icons/io5';
import { PiBuildingOfficeLight, PiParkLight, PiSailboatThin } from "react-icons/pi";
import { GiGrandPiano, GiIsland, GiTheaterCurtains } from "react-icons/gi";
import { TbUfo } from "react-icons/tb";
import { VscCoffee, VscSettings } from "react-icons/vsc";
import "./categories.css"
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { ApiContext } from '@/Context/ApiProvider';
import Filter from './Filter';




const Categories = () => {
    const {setHouses}=useContext(ApiContext)
    const [scrollPosition, setScrollPosition] = useState(0); // Track current scroll position
    const scrollRef = useRef(null); // Ref for scrollable container
    const [showFilter,setShowFilter]=useState(false)


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


    const handeleFilter=async (cat)=>{
 console.log(cat);
        try {
            const res=await fetch(`${process.env.NEXT_PUBLIC_Base_URL}house`,{
            method:"GET",
            headers:{
                cat:cat
            }
            })

            if(!res.ok){
                throw new Error("Network response was not ok")
            }
            const data=await res.json()
            // console.log("Data get",data);
            setHouses(data)

        } catch (error) {
            console.error("Error fetching data", error);
        } 
    }


    const newPage=()=>{

    }

    

    return (
        <div className='my-5 mt-56 '>
            <hr />

        <div>
            
        </div>

            <div className='relative flex justify-between items-center container mx-auto  gap-1 my-3'>
                

            <SlArrowLeft className={`text-3xl cursor-pointer ring-1 ring-gray-400 p-2 rounded-full ${scrollPosition === 0 ? 'hidden' : ''}`} // Hide if at start
                                onClick={handleScrollLeft} />

                {/* Categories List */}
                <div ref={scrollRef} className='flex overflow-x-auto no-scrollbar gap-4 w-full mx-2 no-scrollbar'>
                    {categories.map((cat) => (
                        <div onClick={()=>handeleFilter(cat.name)} key={cat.name} className='flex flex-col items-center min-w-[100px] cursor-pointer'>
                            {cat.icon}
                            <p className='text-sm'>{cat.name}</p>
                        </div>
                    ))}
                </div>

                {/* Scroll Right Button */}


            <SlArrowRight   className='text-3xl cursor-pointer ring-1 ring-gray-400 p-2 rounded-full'
                    onClick={handleScrollRight}/>

            {/* Category Filter Section */}
            <div className='flex gap-3 ms-2 '>
                <div onClick={()=>setShowFilter(!showFilter)} className='flex items-center gap-1 ring-1 ring-gray-300 rounded-xl px-2 py-2 cursor-pointer md:my-2 my-5 hover:ring-black'>
                    <VscSettings />
                    Filter
                </div>
                <div className='flex items-center gap-1 ring-1 ring-gray-300 rounded-xl px-2 py-2 md:my-2'>
                    Display total before taxes
                  
                    <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer" value="" />
                    <div
                        class="group peer bg-gray-400 rounded-full duration-300 w-16 h-8 ring-2 ring-white after:duration-300 after:bg-white peer-checked:after:bg-white peer-checked:ring-white after:rounded-full after:absolute after:h-6 after:w-6 after:top-1 after:left-1 after:flex after:justify-center after:items-center peer-checked:after:translate-x-8 peer-hover:after:scale-95"
                    ></div>
                    </label>

                </div>
            </div>


            </div>

            <hr />

             {
                 showFilter &&    <div className=""  >
                                    <Filter setShowFilter={setShowFilter}/>
                                    </div>     
             }

           
        </div>
    );
};

export default Categories;

// Categories Data
const categories=[
    {
        icon:<LuTicket  className='text-3xl '/>,
        name:"Iconic"
    },
    {
        icon:<BsUmbrella  className='text-3xl '/> ,
        name:"Gooms"
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