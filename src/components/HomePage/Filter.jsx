"use client"
import { ApiContext } from '@/Context/ApiProvider';
import React,{ useContext } from 'react';


const Filter = ({setShowFilter}) => {
  const {setHouses}=useContext(ApiContext)
  const url=process.env.NEXT_PUBLIC_Base_URL
  console.log("seeeee",url);
  
    const filterData=async(e)=>{
        e.preventDefault()
        const rang=e.target.priceRange.value;
        const sort=e.target.sort.value;
        console.log(rang,sort);

        try {
          const res=await fetch(`${process.env.NEXT_PUBLIC_Base_URL}house?rang=${rang}&sort=${sort}`)
          if(!res.ok){
            throw new Error(`Http error! status :${response.status}`);
          }
          const data=await res.json()
          setHouses(data)
          setShowFilter(false)
          
        } catch (error) {
          console.log(error.message);
          
        }
        
    }
    return (
<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <button  onClick={()=>setShowFilter(false)} 
          className="text-gray-600 text-xl font-bold float-right"
        >
          &times;
        </button>

       
        <h2 className="text-lg font-semibold mb-4">Filters</h2>
 <form onSubmit={filterData} >

        {/* Add your filters content here */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price Range ($10 - $100)
            </label>
            <input type="range" min="10" max="100" className="w-full" step='10' val="100" name="priceRange" />
          </div>

          <div>


             <fieldset className="block text-sm font-medium text-gray-700 py-2 ">
            <legend >Price sort</legend>

            <input id="low-to-high" className="" type="radio" name="sort" defaultChecked  value="1" />
            <label htmlFor="low-to-high" className="peer-checked/draft:text-sky-500">Low to High</label>

            <input id="high-to-low" className="ms-4" type="radio" name="sort" value="-1"  />
            <label htmlFor="high-to-low" className="peer-checked/published:text-sky-500">High to Low</label>

            </fieldset>

            
          </div>




          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
          
          >
            Apply Filters
          </button>
        </div>
</form>


      </div>
    </div>
    );
};

export default Filter;