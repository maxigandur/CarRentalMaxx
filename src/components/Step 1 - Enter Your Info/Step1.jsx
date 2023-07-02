import React, { useContext } from 'react'
import "./Step1.css"
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopProvider'
import { useState } from 'react'
import Swal from "sweetalert2"

const Step1 = () => {
    const {carselected} = useContext(Shop)
    let {user} = useContext(Shop)

    const navigate = useNavigate()
    const [name,setName] = useState()
    const [lastname,setlastName] = useState()
    const [addres,setAddres] = useState()

    const handleNavigate = ()=>{
        
      user.name = name
      user.lastname = lastname
      user.addres = addres
      if (user.name && user.lastname && user.addres) {
        navigate(`/step2`)
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
         
        })
      }
     
    }
    const handlenavigatePrevious = ()=>{
      navigate(`/`)       
    }
    const handleName = (e)=>{    
      setName(e.target.value)   
    }
    const handleLastName = (e)=>{
      setlastName(e.target.value)
    }
    const handleAddres = (e)=>{
      setAddres(e.target.value)
    }
   
     
  return (
    <div className='step1Main animate__animated animate__slideInDown ' id='step1'>
        <button className='previousPage1' onClick={handlenavigatePrevious}>Home</button>
        
         <h1>Step 1 - Getting Your Info</h1>
         <br />  
         
         <div className="input-box">
                    <span className="icon"><i className='bx bxs-hand'></i></span>
                    <input type="name" required onChange={handleName}/>
                    <label >Name</label>
         </div>
         <div className="input-box">
                    <span className="icon"><i className='bx bxs-hand'></i></span>
                    <input type="name" required onChange={handleLastName}/>
                    <label >Lastname</label>
         </div>
         <div className="input-box">
                    <span className="icon"><i className='bx bxs-hand'></i></span>
                    <input type="name" required onChange={handleAddres}/>
                    <label >Address</label>
         </div>


         <button className="nextPage0" onClick={handleNavigate}><span>Step 2</span></button>
         <div className='divselectedCar'>
         
         <img src={carselected.img} alt="carselectedimg" className='imgcar'/>
         </div>
    </div>
  )
}

export default Step1