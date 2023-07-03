import React from "react";
import PredictionCard from "./PredictionCard";

const Prediction = () => {
    return (
        <section className="mx-16">
            <h2 className="text-white text-2xl mb-8">
            Current Prediction values
            </h2>
            <div className="flex justify-between">
                <PredictionCard/>
                <PredictionCard/>
                <PredictionCard/>
                <PredictionCard/>
            </div>
        </section>
    )
}

export default Prediction;