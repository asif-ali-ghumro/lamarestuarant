"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
const data=[
    {
    id:1,
    title:"Alway fresh Always cripsy & Alwys hot",
    image:'/slide1.png'
    },
    {
        id:2,
        title:"Alway fresh Always cripsy & Alwys hot",
        image:'/slide2.png'
    },
    {
        id:3,
        title:"The best pizza to share with your family",
        image:'/slide3.jpg'
    }
];
const Slider = () => {
    const [current,setCurrnt]=useState(0);
    // useEffect(()=>{
    //   const interval=setInterval(
    //     ()=>setCurrnt((prev)=>(prev===data.length-1? 0:prev+1)) 
    //   ,2000);
    //   return ()=>clearInterval(interval);
    // },[])
  return (
    <div className='flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
        {/* text container */}
        <div className='flex-1  flex items-center justify-center flex-col gap-8 text-red-500 font-bold '>
            <h1 className='text-5xl text-center uppercase p-4 md:text-6xl xl:text-7xl md:p-10'>
             {data[current].title}
            </h1>
            <button className='bg-red-500 text-white py-4 px-8 mb-4 rounded-md'>
              Order Now
            </button>

        </div>
        {/* image container */}
        <div className='flex-1 w-full  relative lg:h-full'>
          <Image src={data[current].image} alt='' fill className='object-cover'/>
        </div>

    </div>
  )
}

export default Slider