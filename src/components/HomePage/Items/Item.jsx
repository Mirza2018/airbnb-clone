"use client"
import React, { useState } from 'react';
import img1 from '../../../assets/img1.webp';
import Image from 'next/image';
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { LuDot } from 'react-icons/lu';

const Item = () => {
    let [imgURL,setImgURL]=useState(0)
    let [slide,setSlide]=useState(false)

    console.log(imgURL);
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
             
               

                <Image
                    alt='img'
                    className='w-[350px] rounded-xl object-cover aspect-square'
                    src={images[imgURL]}
                    width={1000}
                    height={1000}
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



const images=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"]