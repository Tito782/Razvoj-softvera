import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <span className='animation'>&#187;</span>
      <h1 className='centriraj'>Pronađite savršen posao za sebe!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mehanicar.jpg'
              text='Mehaničar/ka'
              label='Struka'
              path='/poslovi'
            />
            <CardItem
              src='images/konobar.jpg'
              text='Konobar/ica'
              label='Struka'
              path='/poslovi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/programer.jpg'
              text='Programer/ka'
              label='Struka'
              path='/poslovi'
            />
            <CardItem
              src='images/bakmaz.jpg'
              text='Prodavač/ica'
              label='Struka'
              path='/poslovi'
            />
            <CardItem
              src='images/pitur.jpg'
              text='Soboslikar/ica'
              label='Struka'
              path='/prijava'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
