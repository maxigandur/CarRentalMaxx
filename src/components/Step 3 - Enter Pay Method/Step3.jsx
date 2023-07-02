import React, { useEffect, useState } from 'react'
import "./Step3.css"
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import Swal from "sweetalert2"
const Step3 = () => {

  const {user} = useContext(Shop)
  const {carselected} = useContext(Shop)
  const [price,setPrice] = useState(0)
  const navigate = useNavigate()
  
  /* const handlenavigatePrevious = ()=>{

    navigate(`/step2`)  
   
         
  } */
  const handlePayment = (e)=>{
    user.payment = e.target.value
  
    console.log(user)
  }
  const handleFinish = (e)=>{
    if (user.payment) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your reservation was made successfully, an email was sent to your mailbox',
        showConfirmButton: false,
        timer: 3500
      })
      setTimeout((navigate(`/`)),2500)
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!, You Need Select a Payment Method!',      
      })
    }
    
   
  }
  
  useEffect(() => {
    console.log(user.days)
    if (user.days === "5 Days") {
      setPrice (parseInt((carselected.preciomensual / 30) * 5))
    } else if(user.days === "15 Days"){
      const days = (parseInt(carselected.preciomensual / 2))
      setPrice(days) 
    }else{
      setPrice(parseInt(carselected.preciomensual) )
    }    
   }, [price,carselected.preciomensual,user.days])

  return (
    <div className='step3Main animate__animated animate__slideInRight'>
      
         {/* <button className='previousPage' onClick={handlenavigatePrevious}>Step 2</button> */}
         <h1>Step 3 - Payment Methods</h1> 
          <div className="input-box">
                    <span className="icon">
                      <i className='bx bxs-credit-card' ></i>
                      <i className='bx bxs-bank' ></i>
                      <i className='bx bxl-paypal' ></i>
                    </span>
                    <select name="" id="" onChange={handlePayment}>
                        <option value="">Select Method</option>
                        <option value="Credit" >Credit Card</option>
                        <option value="Debit" >Paypal</option>
                        <option value="Bank" >Bank-Transfer</option>
                    </select>
                   
         </div>
    
         <br />
         {price > 0 ? 
          <div>
            <p>Total Price For {user.days} for Rent</p>
            <input type="text" disabled={true} value={price} className='inputPrice'/>
          </div>
          : "" }
          
         <button className='finish' onClick={handleFinish}>Finish!</button>   

         <section className='previousDates s2'>
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
              <div>
                <p>Pick-Up Date</p>
                <input type="text" disabled={true} value={user.pickupdate} className='inputDates'/>          
              </div>
              <div>
                <p>Time for Rent</p>
                <input type="text" disabled={true} value={user.days} className='inputDates'/>          
              </div>
         </section>
      </div>
  )
}

export default Step3