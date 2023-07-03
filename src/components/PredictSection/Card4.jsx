import React from 'react'
import img from "./Images/bitcoin-ic 3.png"
import vector from "./Images/Vector 15.png"
import { motion } from 'framer-motion'

const Card4 = () => {
  return (
    <motion.div className="card bg-white h-80 w-80 rounded-lg p-6"
      whileHover={{ scale: 1.1 }} // Scale up to 1.1 on hover
      whileTap={{ scale: 0.9 }}   // Scale down to 0.9 on tap
    >
    <div className="img flex justify-center">
         <img src={img} alt="" />
    </div>
    <div className="pics p-10 flex justify-between item-center w-64 gap-8">
        <img src={vector} alt="" className='relative -left-10'/>
         <div className="btn">
            <button className='bg-green-600 w-24 h-8 relative right-14 mt-5 text-white rounded-3xl '>YES</button>
         </div>
    </div>
    <div className="w-60 p-2 ml-5 flex justify-center items-center">
        <h1 className='font-bold'>Graph on what you predicted</h1>
    </div>
</motion.div>
  )
}

export default Card4
