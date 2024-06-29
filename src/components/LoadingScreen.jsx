import React from 'react'
import { motion } from 'framer-motion'

export default function LoadingScreen() {
  return (
    <motion.div 
        initial={{
            opacity: 1,
            zIndex: -1
        }}
        animate={{
            opacity: 0,
            zIndex: 0
        }}
        transition={{
            delay: 0.5,
            duration: 2,
        }}
        className='absolute w-screen h-screen bg-white top-0 left-0 z-[999]'>
      eererere
    </motion.div>
  )
}
