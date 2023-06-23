'use client'
import React, { useState } from 'react'
import Book from '../components/Book'
import {motion} from 'framer-motion'
import Video from '../components/Video'
import Footer from '../components/Footer'
import { imageData } from '../utils/data'
import PartnerCards from '../components/PartnerCards'

type Props = {}

export default function page({}: Props) {
    
    
    //*To do
    //* breakpoints : xs: 0;sm: 576px;md: 768px;lg: 992px;xl: 1200px;
    //* add X svg with animation and to check timings
    
    //! to fix
    //! book size +  book button position and size
    //  on deployment the button and the footer of the video are under the video
    //! z pos of button and footer of video 

  
    
    let a:string = 'You have '
    let b:string = '3 '
    let c:string = 'seconds.'
  return (
    
    <>
    <div className='h-full w-full'>
        <div className='  flex  flex-row mt-0 '>
            <div className='w-1/2 bg-cyan-200  h-[889px] text-center flex justify-center items-center z-0 '>   
             
                <div className='  w-full items-center font-bold block '>                    
                        <h1 className='text-[105px] text-left items-center justify-center  ml-[195px] w-[566px] min-w-[556px] leading-0'>
                            You have <br/><span className=' -mt-16 flex'><span className='text-[red] pr-4'>3 </span> seconds.</span></h1>
                        
                        
                        
                        
                        <h3 className='text-[35px] text-left ml-[205px] -mt-6 font-light  '>How will you stand out?</h3>
                </div>
                
                <div className='block w-full absolute bottom-48'>
                <button
                 className=' h-[59px] w-[209px] font-bold text-left px-4 bg-orange-400  border-none rounded-none z-15' 
                 >
                    Learn More
                 </button>
                </div>
                
                 
            </div>

            <div className='w-1/2 h-[889px] flex flex-col items-center'>
                <Video /> 
                <button
                 className=' -mt-48 h-[58px] w-[204px] text-left px-4 text-[15px] justify-center items-center bg-orange-400 border-2 rounded-none z-20 font-bold ' 
                 > What We Do
                 </button>
                   
                 <Footer />
            </div>
            
            
            
              
        </div>
        <div className=' flex justify-center items-center h-[886px] bg-[#ECEDEE]'>
            <div className=' flex '><Book /></div></div>
        <div className='flex flex-row h-[888px]'>
            <div className='w-1/2 bg-purple-300'>
                <div className='grid grid-cols-4   bg-slate-400'>
                    <PartnerCards />
                    <div className="">
                        
                    </div>
                    <div className=" justify-end flex px-2 items-center">
                        <span className='pr-2'>{'<---'}</span> <span className='font-bold'>Click on a Case Study</span>
                    </div>
                </div>
            </div>
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