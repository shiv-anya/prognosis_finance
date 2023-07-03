import React from 'react'
import {ReactComponent as SVg} from "./Images/Arrow - Left.svg"
import { motion } from 'framer-motion'

const Card3 = () => {
  return (
    <motion.div className="card bg-white h-80 w-80 rounded-lg p-6"
      whileHover={{ scale: 1.1 }} // Scale up to 1.1 on hover
      whileTap={{ scale: 0.9 }}   // Scale down to 0.9 on tap
    >
    <SVg/>
    <h2 className='font-bold text-center'>Prediction</h2>
    <div className="button flex  p-4 justify-between w-60 gap-10 ml-2 mt-2">
    <button className='bg-green-600 w-24 h-8 text-white rounded-3xl'>YES</button>
    <button className='bg-red-600 w-24 h-8 text-white rounded-3xl'>NO</button>
    </div>
    <h2 className='font-bold ml-5 mb-2'>Amount</h2>
    <div className="box flex flex-col justify-center items-center gap-4">
        <div className="box1 bg-slate-300 flex justify-center items-center w-56 h-10"><h2 className='font-bold'>200$</h2></div>
        <div className="box2 bg-blue-400 flex justify-center items-center w-56 h-10"><h2 className='font-bold'>Buy now</h2></div>
    </div>
</motion.div>
  )
}

export default Card3
