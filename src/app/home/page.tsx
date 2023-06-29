import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import SkyVideo from '@/components/SkyVideo'
import Video from '@/components/Video'

import { textForHomeButtons,  } from '../settings'

type Props = {  

}



function page({}: Props) {
  const videoSourceHome = {
    first:'video.mp4',
    second: 'cloud3.mp4',
}

  return (
    <>
    <div className='h-full w-full'>
        <div className=' flex flex-row mt-0 '>
            <div className='w-1/2 bg-cyan-200  h-[889px] '> 
             <Navbar />
            </div>
            <div className='w-1/2 h-[889px]  '>             
            <Video source={videoSourceHome.first}/>                        
            <Footer />
            <Button text={textForHomeButtons.what}/>
            </div>        
        </div>
        <div className=' w-full h-[905px] bg-[#ECEDEE]'>
          <div className=' items-center  flex flex-col  '>
            <img src='the_new_book.jpg' className='object-fill h-[920px] mt-10 -mr-16' />
            
          </div>
          <div className='-mt-32 flex items-center justify-center'>
          <Button  text={textForHomeButtons.book}/>
          </div>
          
          </div>
        <div className='flex flex-row h-[888px]'>
            <div className='w-1/2 bg-purple-300'>              
                <div className=''>
                   
                </div>
            </div>
            <div className='w-1/2 bg-purple-500'>

            
            </div>
            
        </div>
        <div className='w-full h-[889px] bg-slate-800'>
        <Footer />
        </div>
        <div className='w-full h-[889px] mb-0 bg-sky-400'>
        <SkyVideo source={videoSourceHome.second}/>  
        </div>
        <Footer />
    </div>
    </>
  )
}

export default page