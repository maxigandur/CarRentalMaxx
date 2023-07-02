import React, { useContext } from 'react'
import "./Step2.css"
import { useNavigate } from 'react-router-dom'
import { Shop } from '../../context/ShopProvider'
import Swal from 'sweetalert2'
const Step2 = () => {


  let {user} = useContext(Shop)
  console.log(user)

  const navigate = useNavigate()
  const handlenavigatePrevious = ()=>{
    navigate(`/step1`)       
  }
  const handlenavigateNext = ()=>{
    if (user.mail && user.pickupdate && user.days) {
      navigate(`/step3`) 
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
       
      })
    }
          
  }
  const handleMail = (e) =>{
    user.mail = e.target.value  
  }
  const handlePickup = (e)=>{
    user.pickupdate = e.target.value
   
  }
  const handleDays = (e)=>{
    user.days = e.target.value
    console.log(user)
  }
  return (
    
      <div className='step2Main animate__animated animate__slideInRight' id='step2'>
       
        {/*  <button className='previousPage2' onClick={handlenavigatePrevious}>Step 1</button> */}
         <h1>Step 2 - Getting Dates for Rent</h1>
         <br /> 

         <div className="input-box">
                    <span className="icon"><i className='bx bxs-envelope' ></i></span>
                    <input type="mail" required onChange={handleMail} className="mail" />
                    <label >Mail</label>
         </div>
         <div className="input-box">
                    <span className="icon"><i className='bx bxs-calendar' ></i></span>
                    <input type="date" required onChange={handlePickup} className='calendar'/>
                   
         </div>
         
        
         <div className="input-box">
                    <span className="icon"><i className='bx bxs-calendar' ></i></span>
                    <select name="" id="" onChange={handleDays}>
                        <option value="">Select Time</option>
                        <option value="5 Days" > 5 Days</option>
                        <option value="15 Days"> 15 Days</option>
                        <option value="30 Days"> 30 Days</option>
                    </select>
                    
         </div>
         
         <br/>
        
         <button className='nextPage0' onClick={handlenavigateNext}>Step 3</button>        
         <section className='previousDates'>
          <div>
            <p>Name</p>
            <input type="text" disabled={true} value={user.name} className='inputDates'/>
          </div>
          <div>
            <p>LastName</p>
            <input type="text" disabled={true} value={user.lastname} className='inputDates'/>
          </div>
          <div>
            <p>Address</p>
            <input type="text" disabled={true} value={user.addres} className='inputDates'/>
          </div>
        </section>
      </div>
    
  )
}

export default Step2