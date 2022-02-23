import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Oglasi from './data/Oglasi.json';

function Cards() {

  var showExtra = true;
  var isClicked = false;

  function setExtra(i) {
    if(showExtra)
      document.getElementById(i).style.display = 'flex';
    else
      document.getElementById(i).style.display = 'none';

    showExtra = !showExtra;
  } 

  function ClickButton(key) {
    if(isClicked) {
      document.getElementById(key + '_botun').classList.add('notClicked');
      document.getElementById(key + '_botun').classList.remove('isClicked');
      document.getElementById(key + '_botun').innerHTML = "Prijavi se"
    }
    else {
      document.getElementById(key + '_botun').classList.remove('notClicked');
      document.getElementById(key + '_botun').classList.add('isClicked');
      document.getElementById(key + '_botun').innerHTML = "Prijavljeni"
    }

    isClicked = !isClicked;
  }

  return (
    <div className='cards'>
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
                  path='/poslovi/ucenik'
                  pozicije = {element.Pozicije}
                  grad = {element.grad}
                  autor = {element.autor}>
                </CardItem>
                </div>
                <div className='extra__info' id={`${element.key}`} style={{display:'none'}}>
                  <div className='tekst opis'>{element.Opis}</div>
                  <div className='tekst vrsta'> Ponuda: {element.ponuda}</div>
                  <div className='tekst vrsta'> Sektor: {element.Vrsta}</div>
                  <button id={`${element.key}_botun`} className='notClicked botun' onClick={() => ClickButton(element.key)}>Prijavi se</button>
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