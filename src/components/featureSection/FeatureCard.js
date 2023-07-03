import React from "react";
import Arrow from "../../assets/Vector 3.svg"

const FeatureCard = (props) => {
    return <div className="flex flex-col justify-between bg-white px-10 pt-10 pb-5 w-64 h-80 rounded-2xl">
        <div><img  src={props.img} alt={props.title}/></div>
        <div className="text-left">
            <h2 className="text-xl">{props.title}</h2>
            <p className="text-sm text-gray-400">{props.content}</p>
        </div>
        <button className="flex items-center text-purple-800">See Explained <img src={Arrow} className="ml-2"/></button>
    </div>
}

export default FeatureCard;