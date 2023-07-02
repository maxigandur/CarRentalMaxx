import React from 'react'
import "./Reviews.css"

const Reviews = () => {
  return (
    <>
         
    <section className="reviews" id="reviews">
        <div className="heading">
            <span>Reviews</span>
            <h1>Whats Our Customer Say</h1>
        </div>
        <div className="reviews-container">
            <div className="box">
                <div className="rev-img">
                    <img src="/img/rev1.jpg" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star-half"></i>    
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe molestias sed ipsa temporibus est exercitationem autem modi.</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="/img/rev2.jpg" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star-half"></i>    
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe molestias sed ipsa temporibus est exercitationem autem modi.</p>
            </div>

            <div className="box">
                <div className="rev-img">
                    <img src="/img/rev3.jpg" alt=""/>
                </div>
                <h2>Someone Name</h2>
                <div className="stars">
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star"></i>    
                    <i className="bx bxs-star-half"></i>    
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit saepe molestias sed ipsa temporibus est exercitationem autem modi.</p>
            </div>
        </div>
    </section>

    </>
  )
}

export default Reviews