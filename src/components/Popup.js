import React from "react";
import Cross from "../assets/cross.svg"

const Popup = (props) => {
    const closePopUpHandler = () => {
        props.closePopUp();
    }
    return (
        <div className="fixed flex justify-center w-full h-screen inset-0 top-10">
        <div className="bg-white rounded-lg h-popup w-popup px-10 pb-10">
            <div className="flex justify-end py-2"><div className="bg-gray-300 p-2 rounded-full" onClick={closePopUpHandler}><img alt="cross" src={Cross}/></div></div>
            <div>
                <div className="w-82 h-32 bg-gray-300 rounded-lg"></div>
                <div className="text-center my-2">
                    <h2>Subscribe to our Early access</h2>
                    <p>Join thousands getting emails in their inbox.</p>
                </div>
                <form className="flex flex-col">
                    <input type="text" placeholder="ADA address" className="rounded-lg py-3 px-5 border border-solid border-gray-300 mb-2"/>
                    <input type="text" placeholder="Twitter username" className="rounded-lg py-3 px-5 border border-solid border-gray-300 mb-2" />
                    <input type="text" placeholder="Discord Username" className="rounded-lg py-3 px-5 border border-solid border-gray-300 mb-2"/>
                    <button className="text-white rounded-lg py-3 px-5 bg-blue-300 mb-2 bg-blue-700">Tweet About Us!</button>
                    <button className="text-white bg-gray-500 rounded-lg py-3 px-5 bg-blue-300 mb-2">Register here!</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Popup;