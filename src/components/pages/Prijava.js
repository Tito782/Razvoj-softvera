import React from 'react';
import SignIn from './SignIn';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './Prijava.css'

function Prijava() {

  window.scrollTo(0, 0);

  return (
  <div>
     <>	  
       <Navbar/>
       <SignIn/>  
       <Footer/>
      </> 
  </div>
  )
}

export default Prijava;
