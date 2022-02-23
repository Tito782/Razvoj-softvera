import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Oglasi from './data/Oglasi.json';

function Cards() {

  function setExtra(i) {
    if(document.getElementById(i).style.display !== 'flex')
      document.getElementById(i).style.display = 'flex';
    else
      document.getElementById(i).style.display = 'none';
  } 

  function ClickButtonOn() {
    document.getElementById('QuickAddMenu').style.display = 'flex';
  }

  function ClickButtonOff() {
    document.getElementById('QuickAddMenu').style.display = 'none';
  }

  return (
    <div className='cards'>
      <div id='QuickAddMenu' style={{'display':'none'}}>
          <div className='QA_container'>
            <button onClick={ClickButtonOff}>rtt</button>
          </div>
        </div>
      <div className='quickadd_bar'>
        <button className='botun_add notClicked' onClick={ClickButtonOn}>Add listing</button>
        <div className='filteri'>
          <select className='botun_filteri' id='d'>
            <option value='dogo'>Poslodavci..</option>
            <option value='dogo'>Hoteli d.d.</option>
            <option value='dogo'>Sonjini Cvjetovi d.o.o</option>
            <option value='dogo'>Mirko d.o.o</option>
            <option value='dogo'>Ehefrauen-Sohn GmbH</option>
            <option value='dogo'>Gary's software Inc.</option>
          </select>
          <select className='botun_filteri' id='e'>
            <option value='dogo'>Gradovi..</option>
            <option value='dogo'>Zagreb</option>
            <option value='dogo'>Zadar</option>
            <option value='dogo'>Split</option>
            <option value='dogo'>Rijeka</option>
            <option value='dogo'>Pula</option>
          </select>
          <select className='botun_filteri' id='n'>
            <option value='dogo'>Sektor..</option>
            <option value='dogo'>Hoteljerstvo-i-ugostiteljstvo</option>
            <option value='dogo'>Elektrotehnika</option>
            <option value='dogo'>Cvjećarstvo</option>
            <option value='dogo'>Vodoinstalacije</option>
            <option value='dogo'>IT</option>
          </select>
        </div>
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {Oglasi.map(element => {
              return (<div><div onClick={() => setExtra(element.key)}>
                <CardItem
                  key = {element.key}
                  src={'../' + element.Slika}
                  text= {element.naslov}
                  label='Struka'
                  path='/poslovi/poslodavac'
                  pozicije = {element.Pozicije}
                  grad = {element.grad}
                  autor = {element.autor}>
                </CardItem>
                </div>
                <div className='extra__info' id={`${element.key}`} style={{display:'none'}}>
                  <div className='tekst opis'>{element.Opis}</div>
                  <div className='tekst vrsta'> Ponuda: {element.ponuda}</div>
                  <div className='tekst vrsta'> Sektor: {element.Vrsta}</div>
                </div>
              </div>);
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;