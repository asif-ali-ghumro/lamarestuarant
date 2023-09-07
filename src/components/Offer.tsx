
import Image from 'next/image'
import React from 'react'
import CountDown from './CountDown'




const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between md:bg-[url('/offerBg.png')] md:h-[70vh]"> 
      <h1>offer is called</h1>
      {/* text container */}
      <div className="flex-1 flex flex-col gap-8 p-6 items-center justify-center text-center text-white">
              <h1 className="text-5xl  font-bold  xl:text-6xl 2xl:text-7xl">Delicios Burger & French Fries</h1>
               <p className="xl:text-xl ">Progressivly simpy effective e-toilers and process centric method of empowerment. Quickly ponintificate parallel</p>
              <CountDown />
              <button className="bg-red-500 py-3 px-6 rounded-md p-2 font-bold">
                Add to Cart
              </button>
            </div>
       {/* image container */}
       <div className='flex-1 w-full relative md:h-full '>
        <Image src={'/offerProduct.png'} alt='' fill className='object-contain '/>
       </div>
      
    </div>
  )
}

export default Offer