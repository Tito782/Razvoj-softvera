import React from 'react';
import SignIn from '../SignIn';
import Navbar from '../Navbar';
import Footer from '../Footer';

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
