import React from 'react'

type Props = {
    text:string
}
function Button({text}:Props) {
    
  return (
    <div className='   flex -mt-32 justify-center ' >
    <button className='w-[204px] h-[56px] z-10 bg-yellow-200 border-[1px] border-black pl-4 py-4  items-center flex-row flex font-bold '>{text}<img src='arrow.png' className='pr-[20px] pl-[60px]' /></button>
    </div>   
  )
}

export default Button

