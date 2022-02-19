import React from 'react';
import SignIn from './SignIn';
import Navbar from '../Navbar';
import Footer from '../Footer';
import TestnaPrijava from '../pages/TestnaPrijava';
import './Prijava.css'

function Prijava() {

  window.scrollTo(0, 0);

  return (
  <div>
     <>	  
       <Navbar/>
       <TestnaPrijava/>  
       <Footer/>
      </> 
  </div>
  )
}

export default Prijava;
