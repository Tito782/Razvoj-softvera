import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/mehanicar.jpg'
              text='Mehaničar/ka'
              label='Struka'
              path='/poslovi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mehanicar.jpg'
              text='Mehaničar/ka'
              label='Struka'
              path='/poslovi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mehanicar.jpg'
              text='Mehaničar/ka'
              label='Struka'
              path='/poslovi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mehanicar.jpg'
              text='Mehaničar/ka'
              label='Struka'
              path='/poslovi'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mehanicar.jpg'
              text='Mehaničar/ka'
              label='Struka'
              path='/poslovi'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
