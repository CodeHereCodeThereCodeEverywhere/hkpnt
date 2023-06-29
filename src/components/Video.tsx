
import React from 'react'
import Footer from './Footer'


type Props = {
    source:string,
}

function Video({source}: Props) {
  return (
    <div className='w-full h-full'>
    <div className=' z-0  flex flex-col'>
    <video className='h-[889px] w-full object-none 'autoPlay muted >
       <source src={source} type="video/mp4" />             
       </video>
              
    </div>  
    
       
    </div>
  )
}

export default Video