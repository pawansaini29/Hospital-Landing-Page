import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Hero } from './Components/Hero/Hero';
import { Service } from './Components/Service/Service';
import { Clinic } from './Components/Clinic/Clinic';
import { Doctors } from './Components/Doctors/Doctors';
import { Customer } from './Components/Customer/Customer';
import { Newsletter } from './Components/Newsletter/Newsletter';
import { Footer } from './Components/Footer/Footer';




function App() {
  return (
    <BrowserRouter className="App ">
      <Navbar/>
      <Hero/>
      <Service/>
      <Clinic/>
      <Doctors />
      <Customer/>
      <Newsletter/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
