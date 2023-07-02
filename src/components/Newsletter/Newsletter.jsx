import React from 'react'
import "./Newsletter.css"

const Newsletter = () => {
  return (
    <>      
        <section className="newsletter">
        <img src="/img/logitorenty.png" alt="" width={120}/>
            <h2>Subscribe To Newsletter</h2>
            <div className="box">
                <input type="text" placeholder="Enter Your Email..."/>
                <a href="#" className="btn">Subscribe</a>
            </div>
        </section>
    </>
  )
}

export default Newsletter