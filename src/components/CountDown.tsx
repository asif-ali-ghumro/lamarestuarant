"use client"

import Countdown from 'react-countdown';
const CountDown = () => {
    const endingDate=new Date("2023-09-20");
  return (
    <div>
     <Countdown className='font-bold text-5xl text-yellow-300' date={endingDate} />
    </div>
  )
}

export default CountDown