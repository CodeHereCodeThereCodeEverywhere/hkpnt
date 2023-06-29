import React from 'react'

type Props = {
    source:string
}

function SkyVideo({source}: Props) {
  return (
    <div className='w-full h-full'>
    <div className=' z-0  flex flex-col'>
    <video className='h-[889px] w-[200%] object-fill 'autoPlay muted >
       <source src={source} type="video/mp4" />             
       </video>
              
    </div>  
    
       
    </div>
  )
}

export default SkyVideo