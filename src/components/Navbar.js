import { AccountCircleRounded } from '@material-ui/icons';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import { ButtonUcenik } from './ButtonUcenik';
import { ButtonPoslodavac } from './ButtonPoslodavac';
import './Navbar.css';

function Navbar() {
    const [click, setClick] =  useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    let type = localStorage.getItem('prof_type');

    function SwitchCase(){
        switch(type) {
            case 'p': 
                return <ButtonPoslodavac buttonStyle={'btn--outline'}><AccountCircleRounded/></ButtonPoslodavac>;
            case 'u': 
                return <ButtonUcenik buttonStyle={'btn--outline'}><AccountCircleRounded/></ButtonUcenik>;
            default :
                return <Button buttonStyle={'btn--outline'}>Prijava</Button>
        }
    }




  return (
  <>
        <nav className = "navbar">
            <div className="navbar-container">
                <Link to="/" className = "navbar-logo" onClick={closeMobileMenu}>UčeničkiWebServis<img className='fab' href="/" src='TeamPlace_invert.png' alt='-' style={{'width':'25%'}}/></Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars' } />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to = '/' className='nav-links' onClick={closeMobileMenu}>
                            Početna
                        </Link>
                    </li>
                    <li>
                        <Link to = '/o-nama' className='nav-links' onClick={closeMobileMenu}>
                            O nama
                        </Link>
                    </li>
                    <li>
                        <Link to = '/poslovi' className='nav-links' onClick={closeMobileMenu}>
                            Pretraga poslova
                        </Link>
                    </li>
                        <li>
                    <Link to = '/prijava' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Prijava
                        </Link>
                    </li>
                </ul>
                <SwitchCase></SwitchCase>
            </div>
        </nav>
  </>
  ); 
}

export default Navbar;
 
