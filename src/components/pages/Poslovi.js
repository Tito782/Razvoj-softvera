import React from 'react';
import '../../App.css';
import Cards from '../Cards';

function Home (){
    return(
      <>
        <h1 className="usluge">Dobrodošli u pretragu poslova!</h1>
        <Cards />
      </>
    );
  }
  
  export default Home;