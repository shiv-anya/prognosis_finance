import React from 'react'
import InstaPic from "../assets/instagram-ic.png"
import FacebookPic from "../assets/facebook-ic.png"
import TwitterPic from "../assets/twitter-ic.png"
import YoutubePic from "../assets/youtube-ic.png"
import "../App.css"

const Footer = () => {
  return (
    <footer className="flex p-20 h-80 bg-white justify-between">
    {/* Left Side of footer */}
        <div className="socail-conatiner flex flex-col gap-6 justify-evenly">
          <div className="heading flex flex-col">
            <span className='font-bold text-lg'>Prognosis</span>
            <span className='font-bold text-lg'>Finance</span>
            </div>
            <div className="socails flex gap-3">
              <a href="https://github.com"><img src={InstaPic} alt="" /></a>
              <a href="https://github.com"><img src={FacebookPic} alt="" /></a>
              <a href="https://github.com"><img src={TwitterPic} alt="" /></a>
              <a href="https://github.com"><img src={YoutubePic} alt="" /></a>
            </div>
            <div className="privacy-policy">
              <p className='text-sm text-stone-600'>2023 Prognosis Finance</p>
              <p className='text-sm text-stone-600'>All Rights Reserved</p>
            </div>
        </div>
        {/* Right Side of Footer */}
        <div className=" flex gap-28">
        <div className="about flex flex-col gap-4">
           <h2 className='font-bold'>About US</h2>
           <span className='text-stone-600'>About</span>
           <span className='text-stone-600'>Careers</span>
           <span className='text-stone-600'>Terms</span>
           <span className='text-stone-600'>Legal & Privacy</span>
        </div>
        <div className="services flex flex-col gap-4">
        <h2 className='font-bold'>Services</h2>
           <span className='text-stone-600'>Predictions</span>
           <span className='text-stone-600'>Buy Crypto</span>
           <span className='text-stone-600'>Analysis</span>
           <span className='text-stone-600'>Institutional Services</span>
        </div>
        <div className="learn flex flex-col gap-4">
           <h2 className='font-bold'>Learn</h2>
           <span className='text-stone-600'>What is Polymarket?</span>
           <span className='text-stone-600'>How to Predict</span>
           <span className='text-stone-600'>Tips & Tutorials</span>
           <span className='text-stone-600'>Market Update</span>
        </div>
        </div>
    </footer>
  )
}

export default Footer;
