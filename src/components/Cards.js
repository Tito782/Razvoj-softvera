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

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {Oglasi.map(element => {
              return (<div onClick={() => setExtra(element.key)}>
                <CardItem 
                  key = {element.key}
                  src={element.Slika}
                  text= {element.naslov}
                  label='Struka'
                  path='/poslovi'
                  pozicije = {element.Pozicije}
                  grad = {element.grad}
                  autor = {element.autor}>
                </CardItem>
                <div className='extra__info' id={`${element.key}`} style={{display:'none'}}>
                  <div className='tekst opis'>{element.Opis}</div>
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
