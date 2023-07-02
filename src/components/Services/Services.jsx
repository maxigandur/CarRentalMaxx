import React, {  useState }  from 'react'
import "./Services.css"
import { useNavigate } from 'react-router-dom'
import 'animate.css';
import { carList } from '../../Cars'
import Modal from '../Modal/Modal'
import { useEffect } from 'react';
import { useContext } from 'react';
import { Shop } from '../../context/ShopProvider';


const Services = () => {

    console.log(carList)
    const [modalview,setmodalView] = useState(false)
    const [modalCar,setmodalCar] = useState({})

    const carselected = useContext(Shop)
    const {setcarSelected} = useContext(Shop)  
       
    const handleopenModal = (e)=>{ 
    const selectedcarTitle = e.target.parentNode.childNodes[2].innerText
    const findtheCar = carList.find(selectedCar =>(selectedCar.name === selectedcarTitle))
    
    setmodalView(true)   
    setmodalCar(findtheCar)
    setcarSelected(findtheCar)
 }
 
    useEffect(() => {
        const closeModal = ()=>{
            setmodalView(false)
            }
            const btnexit = document.querySelector(".bxs-exit")
            if (btnexit) {
                btnexit.addEventListener("click",closeModal)
            }
      
    }, [modalview])
     
    console.log(modalview)
   
   

  return (
    <>    
    <section className="services" id="services">
        {/* Llamamos El modal en caso de que el estado mostrar modal este TRUE y le pasamos como prop el auto Seleccionado para su uso */}
    {modalview ? <Modal props={modalCar}/> : ""}
        <div className="heading">
            <span>Best Services</span>
            <h1>Explore Out Top Deals <br/> From Top Rated Dealers</h1>
        </div>
        <div className="services-container">     
            {carList.map(car =>{
                return ( 
                <div className="box" key={car.id}>
                    <div className="box-img">
                        <img src={car.img} alt=""/>
                    </div>
                    <p>{car.año}</p>
                    <h3>{car.name}</h3>
                    <h2>${car.preciomensual} <span>/month</span></h2>
                    <button href="" className="btn rent" id="btnrent" onClick={handleopenModal}>Rent Now!</button>
                </div>            
                )
            })}                    
        </div>           
    </section>

    </>
  )
}

export default Services