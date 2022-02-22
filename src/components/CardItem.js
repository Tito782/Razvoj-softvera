import React from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PeopleIcon from '@mui/icons-material/People';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Travel'
              src={props.src}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
            <h5 className='cards__item__text__author'>{props.autor}</h5>
          </div>
          <div>
              <p className='cards__item__location'>
                <LocationOnIcon className='cards__item__icon'/>
                {props.grad}
              </p>
              <p className='cards__item__location'>
                <PeopleIcon className='cards__item__icon'/>
                {props.pozicije}
              </p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
