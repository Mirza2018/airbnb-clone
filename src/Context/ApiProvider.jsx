"use client"
import React, { createContext, useEffect, useState } from "react";

export const ApiContext=createContext(null);

const ApiProvider=({children})=>{
 
    const [houses,setHouses]=useState(null)
    const [loading, setLoading] = useState(true); 
    // useEffect(()=>{

    // fetch('http://localhost:5000/house')
    // .then(res=>res.json())
    // .then(data=>
    //     setHouse(data)
    // )

    // },[])

        useEffect(()=>{
            const fetchHouseData= async ()=>{
                try {
                    setLoading(true)
                    const res= await fetch("http://localhost:5000/house")
                    if(!res.ok){
                        throw new Error("Network response was not ok")
                    }
                    const data=await res.json();
                    setHouses(data)

                } catch (error) {
                    console.log('Error fetching house data:', error);
                }finally {
                    setLoading(false); 
                  }
            }

            fetchHouseData();
        },[])


        

const values={
    houses,loading,setHouses
}


    return (
        <ApiContext.Provider value={values}> 
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider