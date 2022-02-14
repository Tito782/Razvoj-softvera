import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pocetna from './components/pages/Pocetna';
import Poslovi from './components/pages/Poslovi';
import ONama from './components/pages/ONama';
import Prijava from './components/pages/Prijava';
import AAIEDU from './components/pages/AAIEDU';
import Ucenik from './components/pages/Ucenik';
import Poslodavac from './components/pages/Poslodavac';

function App() {
  return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Pocetna/>}></Route>
            <Route exact path='/o-nama' element={<ONama/>}/>
            <Route  path='/poslovi' element={<Poslovi/>}></Route>
            <Route exact path='/prijava' element={<Prijava/>}></Route>      
            <Route exact path='/prijava-aaiedu' element={<AAIEDU/>}></Route>  
            <Route exact path="/ucenik" element={<Ucenik/>}></Route>
            <Route  path='/poslodavac' element={<Poslodavac/>}></Route>
          </Routes>
        </Router>
      </>
  );
}

export default App;
