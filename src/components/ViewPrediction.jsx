import React from 'react'
import "../App.css"
const ViewPrediction = () => {
  return (
    <section className='p-10 viewPrediction flex justify-between'>
        <div className="text pt-3 text-white">
            <h2 className='font-bold text-lg'>Predictions are loreum ipsum doleum ipsum </h2>
            <p className='text-slate-400 h-20 viewPredictionPara'>We'll tell you what cryptocurrencies are, how they work and why you should own one right now. So let's do it.</p>
        </div>
        <div className="btn">
            <button className='w-24 h-10 viewPredictionbtn items-center rounded-xl text-white'>View all</button>
        </div>
    </section>
  )
}

export default ViewPrediction
