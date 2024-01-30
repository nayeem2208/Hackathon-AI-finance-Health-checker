import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion} from "framer-motion";

function Input() {
    const navigate = useNavigate();

const submitHandler = () => {
    
    navigate('/result');
}
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="w-3/4  p-8 border rounded shadow " style={{backgroundColor:'255, 255, 255,0.8'}}>
        <div className="mb-4 text-center ">
          <motion.h1 whileHover={{scale:1.02}} className="text-3xl font-bold mb-4 text-white">Financial Analyzer</motion.h1>
        </div>
        <div className="flex flex-col space-y-4">
          {/* Form Fields */}
          <div className="flex space-x-4">
            <motion.button whileHover={{scale:1.02,backgroundColor:'#03ecfc'}} className="bg-cyan-500 text-white px-4 py-2 rounded w-32">Income</motion.button>
            <motion.input whileHover={{scale:1.02}}  type="text" className="border px-4 py-2 flex-1 rounded" />
          </div>
          <div className="flex space-x-4">
            <motion.button className="bg-cyan-500 text-white px-4 py-2 rounded w-32" whileHover={{scale:1.02,backgroundColor:'#03ecfc'}} >Savings</motion.button>
            <motion.input whileHover={{scale:1.02}} type="text" className="border px-4 py-2 flex-1 rounded" />
          </div>
          <div className="flex space-x-4">
            <motion.button className="bg-cyan-500 text-white px-4 py-2 rounded w-32" whileHover={{scale:1.02,backgroundColor:'#03ecfc'}} >Debt</motion.button>
            <motion.input whileHover={{scale:1.02}} type="text" className="border px-4 py-2 flex-1 rounded" />
          </div>
          <div className="flex space-x-4">
            <motion.button className="bg-cyan-500 text-white px-4 py-2 rounded w-32" whileHover={{scale:1.02,backgroundColor:'#03ecfc'}} >Expenses</motion.button>
            <motion.input whileHover={{scale:1.02}} type="text" className="border px-4 py-2 flex-1 rounded" />
          </div>
          <div className="flex space-x-4 ">
            <motion.button className="bg-cyan-500 text-white px-4 py-2 rounded w-32" whileHover={{scale:1.02,backgroundColor:'#03ecfc'}} >Invest ments</motion.button>
            <motion.input whileHover={{scale:1.02}} type="text " className="border px-4 py-2 flex-1 rounded rounded" />
          </div>
          <div className='flex justify-center'>
          <motion.button whileHover={{scale:1.06,backgroundColor: '#1c9603'}} className="bg-green-500 flex justify-center text-white px-4 py-2 rounded w-32" onClick={submitHandler}>Submit</motion.button></div>
          {/* Add more fields here following the same pattern */}
        </div>
        
      </div>
    </div>
  )
}

export default Input