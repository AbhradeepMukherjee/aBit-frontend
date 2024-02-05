import React from 'react'

const Band = () => {
  const textToRepeat = 'John Bill / Creator / Moved to NYC / 27.11.22 / Live now /';
  const repetitionCount = 5;
  const repeatedText = Array.from({ length: repetitionCount }, (_, index) => (
    textToRepeat
  )).join(' ');
  return (
    <div className='relative w-full h-[85px] bg-zinc-850 flex items-center'>
      <p className='w-full h-[114px] text-clip overflow-clip text-justify font-GloriaHallelujah truncate animate-marquee font-extralight text-2xl py-3 flex items-center'>
        {repeatedText}
      </p>
    </div>
  )
}


export default Band
