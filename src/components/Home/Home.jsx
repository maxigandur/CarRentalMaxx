import React from 'react'
import "./Home.css"


const Home = () => {
  return (
    <>
   
        <section className="home" id="home">
            <div className="text">
                <h1><span>Looking </span> to <br/>rent a car</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, natus?</p>
                <div className="app-stores">
                    <img src="/img/ios.png" alt=""/>
                    <img src="/img/512x512.png" alt=""/>
                </div>
            </div>

           {/*  <div className="form-container">
                <form action="">
                    <div className="input-box">
                        <span>Location</span>
                        <input type="search" name="" id="" placeholder="Search Places"/>
                    </div>
                    <div className="input-box">
                        <span>Pick-Up Date</span>
                        <input type="date" name="" id=""/>
                    </div>
                    <div className="input-box">
                        <span>Return Date</span>
                        <input type="date" name="" id=""/>

                    </div>              
                    <input type="submit" value="Submit" className="btn"/>
                </form>        
            </div> */}
        </section>
    </>
  )
}

export default Home