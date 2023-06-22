'use client'
import React, { useState } from 'react'
import Book from '../components/Book'
import {motion} from 'framer-motion'
import Video from '../components/Video'
import Footer from '../components/Footer'

type Props = {}

export default function page({}: Props) {
    
    
    //*To do
    //* breakpoints : xs: 0;sm: 576px;md: 768px;lg: 992px;xl: 1200px;
    //* add X svg with animation and to check timings
    
    //! to fix
    //! book size +  book button position and size
    //  on deployment the button and the footer of the video are under the video
    //! z pos of button and footer of video 

  
    

  return (
    <>
    <div className='h-full w-full'>
        <div className='  flex  flex-row mt-0 '>
            <div className='w-1/2 bg-cyan-200 flex-col h-[889px] text-center flex justify-center items-center z-0 '>   
             
                <div className=' flex '>                    
                        <h1 className='flex text-[120px] flex-col  h-[216px] w-[566px]'>You have 3 seconds. </h1>
                        <h3>How will you stand out?</h3>
                </div>
                
                <button
                 className=' h-[59px] w-[209px] px-2 justify-center  bg-orange-400 border-none rounded-none z-15' 
                 >
                    Learn More
                 </button>
                 
            </div>

            <div className='w-1/2 h-[889px] flex flex-col items-center'>
                <Video /> 
                <button
                 className='-mt-[130px] h-[59px] w-[209px] px-2 justify-center items-center bg-orange-400 border-2 rounded-none z-20' 
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