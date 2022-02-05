import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Poslovi from './components/pages/Poslovi';
import Footer from './components/Footer';
import ONama from './components/pages/Prijava';
import Prijava from './components/pages/Prijava';

function App() {
  return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}></Route>
            <Route exact path='/poslovi' element={<Poslovi/>}></Route>
            <Route exact path='/prijava' element={<Prijava/>}></Route>         
          </Routes>
          <Footer/>
        </Router>
      </>
  );
}

export default App;
