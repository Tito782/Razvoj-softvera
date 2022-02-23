import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Oglasi from './data/Oglasi.json';

function Cards() {

  var showExtra = true

  function setExtra(i) {
    if(showExtra)
      document.getElementById(i).style.display = 'block';
    else
      document.getElementById(i).style.display = 'none';

    showExtra = !showExtra;
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
                  <p>Ekstra</p>
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
