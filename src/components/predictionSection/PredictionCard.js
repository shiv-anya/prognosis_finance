import React from "react";
import { motion } from "framer-motion";

const PredictionCard = () => {
  return (
    <div className="Scroll-remove" style={{ overflowX: 'hidden' }}>
      <motion.div
        className="flex flex-col justify-evenly bg-white h-48 rounded-xl w-64 px-2 pt-2"
        style={{ overflowX: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div>
          <img src="https://source.unsplash.com/random/?person" alt="person" className="h-14" />
        </div>
        <div>
          <p className="text-xs font-bold mb-2">India will record the highest temperatures in 2023 </p>
          <div className="flex">
            <div className="flex text-xs p-2 font-bold justify-between w-3/5 bg-red-300 mr-2">
              <p>Yes</p>
              <p className="text-red-500">4.5 $</p>
            </div>
            <div className="flex text-xs p-2 font-bold justify-between w-2/5 bg-green-300">
              <p>No</p>
              <p className="text-green-500">3.5 $</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PredictionCard;
