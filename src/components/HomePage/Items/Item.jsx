"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LuDot } from 'react-icons/lu';
import { IoIosHeart } from "react-icons/io";

const Item = ({house}) => {
    const {name,country,dateStart,dateEnd,price,images,cat}=house

    


    let [imgURL,setImgURL]=useState(0)
    let [slide,setSlide]=useState(false)
    let [fav,setFav]=useState(false)

    const showSlideing=()=>{
        setSlide(true)
    }
    const offSlideing=()=>{
        setSlide(false)
    }
    
    return (
        <div className='flex flex-col gap-3 items-start justify-center w-full'>
            <div className='relative '  onMouseEnter={showSlideing} onMouseLeave={offSlideing}>
                { slide &&  <>
                
                    {imgURL>=1 &&    <div className='absolute top-1/2 left-2 transform -translate-y-1/2 '>
                  <SlArrowLeft onClick={()=>setImgURL(prev=>prev-1)} className='ring-1 ring-gray-400 rounded-full bg-gray-100 hover:bg-white hover:scale-110 p-2 text-3xl' />
                </div>}
              {  imgURL<=2 &&   <div className='absolute top-1/2 right-2 transform -translate-y-1/2'>
                 <SlArrowRight  onClick={()=>setImgURL(prev=>prev+1)} className='ring-1 ring-gray-400 rounded-full  bg-gray-100 hover:bg-white hover:scale-110 p-2 text-3xl' />
                </div>}

                <div   className='absolute flex left-1/2 bottom-2 transform -translate-x-1/2 text-gray-400 text-3xl'>
                     <LuDot  className={`${imgURL==0 && "text-white scale-105"}`} />
                     <LuDot  className={`${imgURL==1 && "text-white"}`}/>
                     <LuDot  className={`${imgURL==2 && "text-white"}`}/>
                     <LuDot  className={`${imgURL==3 && "text-white"}`}/>
                </div>
                
                </>

                }
                <div className="text-black opacity-70">
             <IoIosHeart onClick={()=>{setFav(!fav)}} className={`${fav && "text-red-500 opacity-100 scale-125"} text-2xl absolute top-8 right-2 transform -translate-y-1/2 cursor-pointer hover:text-pink-600 hover:scale-125 translate duration-100 `} />
           </div>
                <Image
                    alt='img'
                    className='w-[450px] rounded-xl object-cover aspect-square'
                    src={images[imgURL]}
                    width={500}
                    height={500}
                    priority 
                />
            </div>
            <div className=''>
                <h3 className='text-lg font-semibold'>{name}, {country}</h3>
                <p className='text-lg text-gray-500'>{cat}</p>
                <p className='text-lg text-gray-500'>Date: {dateStart} {dateEnd}</p>
                <p><span className='text-lg font-semibold'>${price}</span> per night</p>
            </div>
        </div>
    );
};

export default Item;



// const images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"]