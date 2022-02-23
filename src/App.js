import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './components/pages/Pocetna';
import Poslovi from './components/pages/Poslovi';
import ONama from './components/pages/ONama';
import Prijava from './components/pages/Prijava';
import UcenikPrijava from './components/pages/AAIEDU';
import Ucenik from './components/pages/Ucenik';
import Poslodavac from './components/pages/Poslodavac';
import PosloviUcenik from './components/pages/PosloviUcenik';
import PosloviPoslodavac from './components/pages/PosloviPoslodavac';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Pocetna/>}></Route>
            <Route path='/o-nama' element={<ONama/>}/>
            <Route path='/poslovi' element={<Poslovi/>}></Route>
            <Route path='/poslovi/ucenik' element={<PosloviUcenik/>}></Route>
            <Route path='/poslovi/poslodavac' element={<PosloviPoslodavac/>}></Route>
            <Route path='/prijava' element={<Prijava/>}></Route>      
            <Route path='/prijava-aaiedu' element={<UcenikPrijava/>}></Route>  
            <Route path="/ucenik" element={<Ucenik/>}></Route>
            <Route path='/poslodavac' element={<Poslodavac/>}></Route>
          </Routes>
        </Router>
      </>
  );
}

export default App;
