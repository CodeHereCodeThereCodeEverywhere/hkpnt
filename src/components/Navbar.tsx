
'use client'
import {AnimatePresence, motion} from 'framer-motion'
import Link from 'next/link';
import { useRouter } from 'next/navigation';




type Props = {}

function Navbar({}: Props) {
  type isActive = '/' | '/home' | '/about' | '/case-studies'  | '/the-book' | '/work-with-us' | '/services' | '/masterclass' 

 
  
  return (
    <div className='flex mb-4 w-full absolute z-20'>
        <div className='w-1/2'>    
          <Link href='/home' >    
            <motion.img src='logo.svg'
            className='mt-[31px] ml-[26px] w-[116px] h-[27px]'
            whileHover={{scale:1.05}}
            whileTap = {{scale:0.95}}
            />
          </Link>
        </div>   
        <div className="w-1/2 mt-[44px]" >
            <div className=" flex flex-row justify-end items-center font-['Helvetica'] font-bold
         h-[15px] bg-cyan-500 mr-[55px] ml-[177px] text-[15px] ">
          <Link href='/about' className=' hover:text-[#FF0301] pr-[15px] '>About</Link>
            <Link href='/case-studies' className=' hover:text-[#FF0301] px-[30px]'>Case Studies</Link>
            {/* <a href='/services' className=' hover:text-[#FF0301]'>Services</a> */}
            <Link href='/the-book' className=' hover:text-[#FF0301] px-[30px] '>The Book</Link>
            <Link href='/blag_target' className=' hover:text-[#FF0301] px-[30px] '>Blog</Link>
            {/* <a href='/masterclass' className=' hover:text-[#FF0301]'>Masterclass</a> */}
            <Link href='/apply' className=' hover:text-[#FF0301] pl-[15px]'>Work With us</Link>
            </div>
            
           
        
        </div>
    </div>
  )
}

export default Navbar