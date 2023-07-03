import React from 'react'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'
import Card5 from './Card5'

const PredictSection = () => {
  return (
    <section className='p-10 flex flex-col gap-14'>
            <div className="text p-10 flex gap-3 flex-col">
                <h2 className='text-white font-bold text-2xl'>Predict here today</h2>
                <div className="para">
                    <p className='text-white'>lorem ipsum detsum lorem ipsum detsum lorem</p>
                    <p className='text-white'>Lorem detsum ipseum ipsum detsum</p>
                </div>
            </div>
            <div className="card-wrapper flex flex-col gap-20">
            <div className="card-container flex justify-between">
            <Card1
              title={"Will bezos tweet today "}
              yesVotes={"51.3 K PEOPLE VOTED YES"}
              noVotes={"49.3 K PEOPLE VOTED NO"}
            />
            <Card2/>
            <Card3/>
            </div>
            <div className="card-container flex justify-between">
            <Card1
              title={"Bill gates to be new ceo of apple"}
              yesVotes={"100.3 K PEOPLE VOTED YES"}
              noVotes={"39.3 K PEOPLE VOTED NO"}
            />
            <Card4/>
            <Card5/>
            </div>
            </div>
    </section>
  )
}

export default PredictSection
