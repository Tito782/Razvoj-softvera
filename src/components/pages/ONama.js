import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import './ONama.css';

function ONama() {
  
  window.scrollTo(0, 0);
  
  return (
    <div>
      <Navbar/>
        <img src = './images/onama.jpg'/ alt="O Nama">
        <br/><br/><br/><br/><br/><br/>
        
        <h2 className='text'>O Nama</h2>
        <br/><br/><br/><br/><br/><br/>

        <p className='about-us-paragraph'>Učenički Web Servis je ideja koju smo mi pojedinci iz 4.a razreda Strukovne škole Vice Vlatkovića osmislili kako bi ubrzali i olakšali proces zapošljavanje i isplate učenika koji rade sezonski. Cilj smanjivanje redova i olakšano i ubrzano plaćanje.</p>
        <br/><br/><br/><br/><br/><br/>
        <Footer/>
    </div>
  )
  
}


export default ONama;
