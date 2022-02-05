import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Pocetna from './components/pages/Pocetna';
import Poslovi from './components/pages/Poslovi';
import Footer from './components/Footer';
import ONama from './components/pages/ONama';
import Prijava from './components/pages/Prijava';
import AiiEdu from './components/pages/AiiEdu';

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Pocetna/>}></Route>
            <Route exact path='/o-nama' element={<ONama/>}/>
            <Route exact path='/poslovi' element={<Poslovi/>}></Route>
            <Route exact path='/prijava' element={<Prijava/>}></Route>     
            <Route exact path='/aiiedu@login/redirect=ucenickiwebservis.com&token=126re87F20Fg21Fvxy' element={<AiiEdu/>}></Route>     
          </Routes>
          <Footer/>
        </Router>
      </>
  );
}

export default App;
