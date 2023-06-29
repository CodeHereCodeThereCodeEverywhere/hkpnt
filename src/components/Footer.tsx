import { brandFooter } from '@/app/settings'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='flex flex-row items-end justify-end mr-[56px] h-[12px] -mt-20 '>
    <img src='line.svg' className=' pb-2 pr-2'/> <h1 className='text-[12px] font-bold'>{brandFooter.text}</h1>
    </div>
  )
}

export default Footer