import React from 'react'
import image from '../../public/tim-bogdanov-4uojMEdcwI8-unsplash.jpg'
import { motion} from "framer-motion";
function Header() {
  return (
    <div className='flex justify-between py-2'>
      <motion.div whileHover={{scale:1.03,color:'#32aab3'}} className='mx-4 text-4xl text-cyan-900  font-bold'>BudgetBuddy</motion.div>
      <div className='rounded-full overflow-hidden w-8 h-8 my-3 mx-6'><img src={image} alt="" className='h-full w-full object-cover'/></div>
    </div>
  )
}

export default Header