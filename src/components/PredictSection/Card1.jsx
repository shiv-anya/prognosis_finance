import React from 'react'
import img1 from "./Images/card1.png"
import { motion } from 'framer-motion'

const Card = ({title, imgURL, yesVotes, noVotes}) => {
  return (
    <motion.div className="card bg-white h-80 w-80 rounded-lg p-12"
       whileHover={{ scale: 1.1 }} // Scale up to 1.1 on hover
      whileTap={{ scale: 0.9 }}   // Scale down to 0.9 on tap
    >
    <img src= {img1} alt="img" />
    <h2 className='font-bold mb-10 mt-4 w-64'>{title}</h2>
    <div className="btn-wrapper flex">
    <div className="button flex flex-col gap-7">
    <button className='bg-green-600 w-24 h-8 text-white rounded-3xl'>YES</button>
    <button className='bg-red-600  w-24 h-8 text-white rounded-3xl'>NO</button>
    </div>
    <div className="vote flex flex-col gap-10 ml-4 mt-2" style={{fontSize:12}}>
        <p className='w-60'>{yesVotes}</p>
        <p>{noVotes}</p>
    </div>
    </div>
    </motion.div>
  )
}

export default Card
