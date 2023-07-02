import React from 'react'
import "./Header.css"
import ScrollReveal from 'scrollreveal'
import { useEffect } from 'react'
const Header = () => {
 
  let menu = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar"); 
useEffect(() => {
  menu = document.querySelector("#menu-icon");
  navbar = document.querySelector(".navbar"); 
}, [menu,navbar])

const handletoggle = ()=>{
  menu.classList.toggle("bx-x")
  navbar.classList.toggle("active") 
}

 /*  const handlescroll = ()=>{
  menu.classList.remove("bx-x") 
  navbar.classList.remove("active") 
}   */

 



  return (
    <>
        <header   /* onScroll={handlescroll}  */ >
            <a href="#home" className="logo" ><img src="/img/logitorenty.png" alt="" /></a>

            <div className="bx bx-menu" id="menu-icon" onClick={handletoggle}></div>

            <ul className="navbar">
                <li><a href="#home">Home</a></li>
                <li><a href="#ride">Ride</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#reviews">Reviews</a></li>
            </ul>
           
        </header>
    </>
  )
}

export default Header