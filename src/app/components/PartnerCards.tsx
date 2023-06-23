import Link from 'next/link'
import React from 'react'
import { imageData } from '../utils/data'

type Props = {}

function PartnerCards({}: Props) {
  return (
    <>
    {imageData.map((item)=>(
        <div key={item.id}>
            <Link href={item.path}>
         <img src={item?.image} alt={item.name} className='w-[238px] h-[222px]'  />
         </Link>
         </div>
    ))}
    </>
  )
}

export default PartnerCards
