"use client"
import React from 'react'
import {motion} from 'framer-motion'
 

type Props = {}

function Book({}: Props) {
  return (
    <div className='w-full h-full items-center justify-center flex flex-col object-none'>
    <motion.img whileHover={{scale:1.1,}} transition={{duration:0.11}}  src='the_new_book.jpg' className=' bg-cover bg-[200%] z-5 max-w-200%' />
    <button type='button' className=' z-10 rounded-none border-2 -mt-32 pl-4 bg-white py-4 font-bold text-center
     border-black  hover:bg-gradient-to-l from-white  via-gray-400  to-black transition duration-1000  hover:text-white  '>The Book<span className='ml-16 pr-4 hover:text-noney'> {'>'} </span></button>
    </div>
  )
}

export default Book
// #gradient-hover-effect {
//   display: flex;
//   padding: 0.875em 2em;
//   background: linear-gradient(90deg, #3f51b5, transparent) #2196f3;
//   font-family: inherit;
//   color: #fff;
//   text-decoration: none;
//   transition: background-color 1s;
//   place-content: center;
// }
// .gradient-hover-effect:hover, .gradient-hover-effect:focus {
//   background-color: #e91e63;
//   color: #fff;
// }
