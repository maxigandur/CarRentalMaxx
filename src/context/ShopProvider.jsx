import { createContext, useState } from "react";
import React from 'react'


//primero declarar el contexto
export const Shop = createContext(null)


//paso 2, crear el provider (poveedor) que me envolvera la app

const ShopProvider = ({children}) => {

//Dentro del context van : estados, efectos y funciones auxiliares  
 
  const [carselected,setcarSelected] = useState({})  
  let [user,setUser] = useState({})
 
  

  return (
    <Shop.Provider value={{carselected,setcarSelected,user,setUser}}>
        {children}
    </Shop.Provider>
  )
}

export default ShopProvider