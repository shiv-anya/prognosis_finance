import React from 'react'
import {ReactComponent as SVg} from "./Images/Arrow - Left.svg"
import paypal from "./Images/paypal.png"
import secondImg from "./Images/image 9.png"
import { motion } from 'framer-motion'
const Card2 = () => {
  return (
    <motion.div className="card bg-white h-80 w-80 rounded-lg p-6"
           whileHover={{ scale: 1.1 }} // Scale up to 1.1 on hover
          whileTap={{ scale: 0.9 }}   // Scale down to 0.9 on tap
    >
        <SVg/>
        <h2 className='font-bold text-center'>Deposit here</h2>
        <div className="pics p-10 flex justify-between">
            <div className="pic-1 bg-blue-200 w-14 flex justify-center items-center p-2"><img src={paypal} alt="" /></div>
            <div className="pic-2 bg-red-200 border-red-800 w-14 flex justify-center items-center p-2"> <img src={secondImg} alt="" /></div>
        </div>
        <div className="bg-slate-300 w-20 p-2 ml-24 flex justify-center items-center">
            <h1 className='font-bold'>300$</h1>
        </div>
    </motion.div>
  )
}

export default Card2
