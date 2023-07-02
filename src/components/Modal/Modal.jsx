import React, { useState } from 'react'
import "./Modal.css"
/* import "boxicons" */
import 'animate.css';
import { useNavigate } from 'react-router-dom';
const Modal = (modalCar) => {
  const [step,setStep] = useState(0)
  const gotoStep = ()=>{
   const newstep = step + 1
   setStep(newstep)
  }
  const navigate = useNavigate()
     
  return (
  <>           
  <div className="modal-container  animate__animated animate__fadeInBottomLeft">
     
          <div className="boxm1">  
              <div className="box-text">
                <div className="box-title">
                    <h3>{modalCar.props.name}</h3>
                    <p>{modalCar.props.año}</p>                   
                </div>            
              </div>
            <div className="box">
                <div className="box-img">
                    <img src={modalCar.props.img} alt=""/>
                </div>   
            </div>
          </div>
                 
          <div className="boxm2">            
              <div className="boxdate"> 
                  <div className="box-price">
                           
                      <h2>Rent For  <span> ${modalCar.props.preciomensual}/Month</span></h2>
                  </div>               
                  <div className="infos">                 
                    <div className="doors">
                      <i className='bx bx-car'></i>
                      <p>Doors: {modalCar.props.puertas} </p> 
                    </div>
                    <div className="doors">
                      <i className='bx bx-user-circle'></i>           
                      <p>Passengers: {modalCar.props.pasajeros} </p>    
                    </div>            
                  </div>
                  <button href="" className="btndetailrent" id="btnrentt" onClick={()=>{navigate("/step1")}}><span>Rent Now!</span></button>  
                 
              </div>
          </div>               
      
        <i className='bx bxs-exit'></i>      
    </div>      
  </>
  )
}

export default Modal