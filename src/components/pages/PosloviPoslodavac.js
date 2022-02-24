import React from 'react';
import '../../App.css';
import Cards from '../CardsPoslodavac';
import Footer from '../Footer';
import Navbar from '../Navbar';
import './Poslovi.css';

function Home (){

    window.scrollTo(0, 0);

    return(
      <>
        <Navbar/>
        <h1 className="usluge">Dobrodošli u pretragu poslova!</h1>
        <span className='animation'>&#187;</span>
        <h1 className='centriraj'>Pronađite savršen posao za sebe!</h1>
        <Cards />
        <Footer/>
      </>
    );
  }
  
  export default Home;