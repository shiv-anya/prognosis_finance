import React from "react";
import TrendingCard from "./TrendingCard";

const Trending = () => {
    return (
        <section className="mx-16 my-32">
            <div className="text-white">
                <h2 className="text-4xl mb-10">Trending Predictions</h2>
                <p className="text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum, fugit!</p>
                <p className="text-base mb-10">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
            <div className="flex justify-between">
                <TrendingCard/>
                <TrendingCard/>
                <TrendingCard/>
                <TrendingCard/>
            </div>
        </section>
    )
}

export default Trending;