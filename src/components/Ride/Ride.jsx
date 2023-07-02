import React from 'react'
import "./Ride.css"

const Ride = () => {
  return (
    <>
         
    <section className="ride" id="ride">
        <div className="heading">
            <span>How Its Work</span>
            <h1>Rent With 3 Easy Steps</h1>
        </div>
        <div className="ride-container">
            <div className="box">
                <i className="bx bxs-map"></i>
                <h2>Choose a Location!</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam atque id nam consectetur quo!</p>
            </div>

            <div className="box">
                <i className="bx bxs-calendar-check"></i>
                <h2>Pick-Up Date</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam atque id nam consectetur quo!</p>
            </div>

            <div className="box">
                <i type="solid"className="bx bxs-calendar-star"></i>
                <h2>Book a Car</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam atque id nam consectetur quo!</p>
            </div>
        </div>
    </section>

    </>
  )
}

export default Ride