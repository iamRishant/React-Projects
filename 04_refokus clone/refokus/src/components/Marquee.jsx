import { motion } from 'framer-motion'
import React from 'react'

const Marquee = ({image,direction}) => {
  
  return (
    <div className='flex w-full overflow-hidden items-center justify-between'>

    <motion.div transition={{duration:15, repeat:Infinity,ease:'linear'}}  initial={{x: direction==="left"? 0:"-100%"}} animate={{x:direction=="left"?"-100%":0}} className='flex w-full gap-10 flex-shrink-0 py-5'>
      {
        image.map((url)=> <img className='w-[10vw]' src={url} alt/>)
      }
    </motion.div>
    <motion.div transition={{duration:15, repeat:Infinity,ease:'linear'}}  initial={{x: direction==="left"? 0:"-100%"}} animate={{x:direction=="left"?"-100%":0}} className='flex w-full gap-10 flex-shrink-0 py-5'>
      {
        image.map((url)=> <img className='w-[10vw]' src={url} alt/>)
      }
    </motion.div>
    
    </div>
  )
}

export default Marquee
