import React from 'react'

type Props = {}

function Video({}: Props) {
  return (
    <div className='w-full  z-0  flex flex-col items-center justify-center '>
     <video className='h-[889px] w-full object-none 'autoPlay muted >
        <source src="video.mp4" type="video/mp4" />             
        </video>
    
    </div>
  )
}

export default Video