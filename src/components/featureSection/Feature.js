import React from "react";
import FeatureCard from "./FeatureCard";
import Feature1 from "../../assets/feature-image 1.svg";
import Feature2 from "../../assets/feature-image 1-1.svg";
import Feature3 from "../../assets/feature-image 1-2.svg";
import Feature4 from "../../assets/feature-image 1-3.svg";
const featureList = [
    {
        img: Feature1,
        title: "Manage Portfolio",
        content: "Buy and sell popular digital currencies, keep track of them in the one place.",
    },
    {
        img: Feature2,
        title: "Protected Securely",
        content: "All cash balances are covered by FDIC insurance, up to a maximum of $250,000.",
    },
    {
        img: Feature3,
        title: "Cryptocurrency Variety",
        content: "Supports a variety of the most popular digital currencies and always uptodate.",
    },
    {
        img: Feature4,
        title: "Accurate predictions",
        content: "Easy to know how to cryptocurrency works and friendly to newbie.",
    },
]
const Feature = () => {
    return (
        <section className="mt-28 text-center">
            <div className="text-primaryGray">
                <h2 className="text-4xl"> Amazing Features</h2>
                <p className="text-lg">Explore sensational features to prepare your best investment in cryptocurrency</p>
            </div>
            <div className="flex justify-between mx-16 my-16">
                {featureList.map((f,i) => <li key={i}><FeatureCard key={i} img={f.img} title={f.title} content={f.content}/></li>)}
            </div>
        </section>
    )
}

export default Feature;