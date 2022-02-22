import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Oglasi from './data/Oglasi.json';

function Cards() {

  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            {Oglasi.map(element => {
              return <CardItem 
                key = {element.naslov}
                src='images/konobar.jpg'
                text= {element.naslov}
                label='Struka'
                path='/poslovi'
                pozicije = {element.Pozicije}
                grad = {element.grad}
                autor = {element.autor}>
              </CardItem>
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
