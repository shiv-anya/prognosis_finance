import React from "react";
import { motion } from "framer-motion";
const TrendingCard = () => {
    return (
        <motion.div className="flex flex-col justify-end h-48 w-64 rounded-lg bg-white font-bold text-base"
        style={{ overflowX: 'hidden' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        >
            <p className="p-2">India will win world cup in 2023</p>
            <div className="flex border-t-purple-600 border-t border-solid">
                <div className="flex-1 p-2 flex justify-center items-center"><p>Yes</p><p className="text-green-600 ml-4">16$</p></div>
                <div className="flex-1 p-2 flex justify-center items-center border-l border-l-purple-600 border-solid"><p>No</p><p className="text-red-600 ml-4">28$</p></div>
            </div>
        </motion.div>
    )
}

export default TrendingCard;