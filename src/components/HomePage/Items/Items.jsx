"use client"
import React, { useContext } from 'react';
import Item from './Item';
import { ApiContext } from '@/Context/ApiProvider';


const Items = () => {
    const {houses,loading}=useContext(ApiContext)
    console.log(houses);
    
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



// const houses=[
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"rooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"gooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"gooms"
//     },
//     {
//         name:"Raja Manson",
//         country:"Bangladesh",
//         dateStart:"5th Oct",
//         dateEnd:"30th Oct",
//         price:50,
//         images:["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN1MxQpdnaeXnxFs5jCVLMh1XOkC5ZHuksBw&s","https://www.visitdubai.com/-/media/gathercontent/article/t/top-rides-at-img-worlds-of-adventure/media/top-rides-at-img-worlds-of-adventure-predator-5.jpg?rev=8a807a703ed5476ca20c6563a833230d&cx=0.56&cy=0.4&cw=397&ch=397","https://i.ytimg.com/vi/OKZFHo5p4VA/maxresdefault.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCKUI5_pjELdfznQ_t0RBxSYNi1CeF3nxsg&s"],
//         cat:"gooms"
//     },
// ]