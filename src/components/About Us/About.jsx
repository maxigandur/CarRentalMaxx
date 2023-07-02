import React from 'react'
import "./About.css"

const About = () => {
  return (
    <>        
        <section className="about" id="about">
            <div className="heading">
                <span>About Us</span>
                <h1>Best Customer Experience</h1>
            </div>
            <div className="about-container">
                <div className="about-img">
                    <img src="/img/about.png" alt=""/>
                </div>
                <div className="about-text">
                    <span>About Us</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit eum quisquam necessitatibus, illo nostrum saepe?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa magni quod consectetur laudantium temporibus vero veniam. Corrupti repellat voluptatum corporis.</p>
                    <a href="#" className="btn">Learn More!</a>
                </div>
            </div>
        </section>
    </>
  )
}

export default About