'use client'
import Link from "next/link";
import {motion} from 'framer-motion'



export default function Page() {
  return (
    <div>
    <Link href='/home' >    
    <motion.img src='logo.svg'
    className='mt-[31px] ml-[26px] w-[116px] h-[27px]'
    whileHover={{scale:1.05}}
    whileTap = {{scale:0.95}}
    />
  </Link>
  </div>
  )
}