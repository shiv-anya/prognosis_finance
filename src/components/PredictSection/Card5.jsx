import React from 'react'
import img from "./Images/bitcoin-ic 3.png"
import {ReactComponent as PaymentDone} from "./Images/Path 222.svg"
import { motion } from 'framer-motion'

const Card5 = () => {
  return (
    <motion.div className="card bg-white h-80 w-80 rounded-lg p-6"
      whileHover={{ scale: 1.1 }} // Scale up to 1.1 on hover
      whileTap={{ scale: 0.9 }}   // Scale down to 0.9 on tap
    >
    <div className="img flex justify-center">
         <img src={img} alt="" />
    </div>
    <div className="w-60 p-2 ml-5 mt-5 flex justify-center items-center">
        <h1 className='font-bold'>Graph on what you predicted</h1>
    </div>
    <div className="img flex justify-center items-center pt-5">
        <PaymentDone/>
    </div>
</motion.div>
  )
}

export default Card5
