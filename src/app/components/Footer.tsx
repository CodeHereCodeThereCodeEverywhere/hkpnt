import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='flex flex-row mr-0 h-[10px] font-bold z-20'>
        <span className='items-center justify-center -mt-1 text-center text-[10px] flex px-2'>_________</span><span className='text-[10px]'>© 2020 Hook Point</span>
    </div>
  )
}

export default Footer