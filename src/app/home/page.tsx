'use client'
import React, { useState } from 'react'
import Book from '../components/Book'
import {motion} from 'framer-motion'
import Video from '../components/Video'
import Footer from '../components/Footer'

type Props = {}

export default function page({}: Props) {
    const [isMobile,setIsMobile] = useState(false)
    // window.innerWidth > 1024 ?  setIsMobile(false) :  setIsMobile(true);
  
    console.log(isMobile)

  return (
    <>
    <div className='h-full w-full'>
        <div className='  flex  flex-row mt-0 '>
            <div className='w-1/2 bg-cyan-200 h-[889px] text-center flex justify-center items-center'>   
            <p>1L</p>
            </div>
            <div className='w-1/2 h-[889px] flex flex-col items-center'>
                <Video /> 
                <button
                 className='-mt-[130px] h-[59px] w-[209px] px-2 justify-center items-center bg-orange-400 border-2 rounded-none z-15' 
                 >
                    What We Do
                 </button>
                <Footer />      
                
            </div>
        </div>
        <div className=' flex justify-center items-center h-[886px] bg-[#ECEDEE]'>
            <div className=' flex '><Book /></div></div>
        <div className='flex flex-row h-[888px]'>
            <div className='w-1/2 bg-purple-300'></div>
            <div className='w-1/2 bg-purple-500'>
                <Footer />
            </div>
        </div>
        <div className='w-full h-[889px] bg-slate-800'></div>
        <div className='w-full h-[889px] bg-sky-400'>
            <Footer />
        </div>
    </div>
    </>
  )
}