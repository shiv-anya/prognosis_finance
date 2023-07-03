import React from "react";
import Arrow from "../../assets/Vector 3.svg"
import { motion } from 'framer-motion'

const FeatureCard = (props) => {
    return (<motion.div className="flex flex-col justify-between bg-white px-10 pt-10 pb-5 w-64 h-80 rounded-2xl"
    whileHover={{ scale: 1.1 }} // Scale up to 1.1 on hover
    whileTap={{ scale: 0.9 }}   // Scale down to 0.9 on tap
  >
      <div><img src={props.img} alt={props.title}/></div>
      <div className="text-left">
          <h2 className="text-xl">{props.title}</h2>
          <p className="text-sm text-gray-400">{props.content}</p>
      </div>
      <button className="flex items-center text-purple-800">See Explained <img alt="" src={Arrow} className="ml-2"/></button>a
  </motion.div>)
}

export default FeatureCard;