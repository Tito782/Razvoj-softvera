import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import CardsP from '../CardsPoslodavac';
import CardsU from '../CardsUcenik';
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
        {(()=>{
          switch (localStorage.getItem('prof_type')) {
            case 'p':
              return (<CardsP/>);
            case 'u':
              return (<CardsU/>);
            default:
              return (<Cards/>);
          }
        })()}
        <Footer/>
      </>
    );
  }
  
  export default Home;