import React from "react";

const QuestionBox = () => {
    return <div className="flex justify-center">
        <div className="flex items-center w-4/5 border rounded-lg border-white border-solid px-10 py-5">
            <div className="flex-1">
                <h2 className="text-white">
                    New In Polymarket?
                </h2>
                <p className="text-primaryGray">
                    We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.
                </p>
            </div>
            <div className="flex-1 flex justify-end">
                <button className="bg-greenDark text-white text-base py-4 px-6 rounded-lg">Learn & Explore Now</button>
            </div>
        </div>
        </div>
}

export default QuestionBox;