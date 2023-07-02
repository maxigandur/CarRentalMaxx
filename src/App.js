import About from "./components/About Us/About";
import Copyright from "./components/Copyright/Copyright";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Newsletter from "./components/Newsletter/Newsletter";
import Reviews from "./components/Reviews/Reviews";
import Ride from "./components/Ride/Ride";
import Services from "./components/Services/Services";
import ScrollReveal from 'scrollreveal'
import "./App.css"
import Modal from "./components/Modal/Modal";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/Not Found/NotFound";
import Step1 from "./components/Step 1 - Enter Your Info/Step1";
import Step2 from "./components/Step 2 - Select Dates/Step2";
import Step3 from "./components/Step 3 - Enter Pay Method/Step3";
import ShopProvider from "./context/ShopProvider";
import { StrictMode } from "react";

function App() {
 
  

  const sr = ScrollReveal({
      distance:"60px",
      duration:2500,
      delay:400,
      reset:true
  })
  
  sr.reveal(".text",{delay:200,origin:"top"})
  sr.reveal(".about",{delay:200,origin:"left"})
  sr.reveal(".form-container form",{delay:200,origin:"left"})
  sr.reveal(".heading",{delay:200,origin:"top"})
  sr.reveal(".ride-container .box",{delay:400,origin:"top"})
  sr.reveal(".services-container .box",{delay:200,origin:"top"})
  sr.reveal(".about-container .box",{delay:200,origin:"top"})
  sr.reveal(".reviews-container",{delay:200,origin:"top"})
  sr.reveal(".newsletter .box",{delay:200,origin:"bottom"})


  return (
    <StrictMode>
    <div className="App">
      <ShopProvider>
      <BrowserRouter>
      {/* <Modal/> */}
        <Routes>
           <Route path="/" element={<><Header/><Home/><Ride/><Services/><About/><Reviews/><Newsletter/><Copyright/></>}/> 
           <Route path="/step1" element={<Step1/>}/> 
           <Route path="/step2" element={<Step2/>}/>
           <Route path="/step3" element={<Step3/>}/>
           <Route path="*" element={<><NotFound/></>}/>      
        </Routes>
     </BrowserRouter>
     </ShopProvider>
    </div>
    </StrictMode>
  );
}

export default App;
