import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ButtonUcenik } from './ButtonUcenik';
import './Navbar.css';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function NavbarUcenik() {
    const [click, setClick] =  useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else{
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton); 



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
                        </Link>
                    </li>
                </ul>
                {button && <ButtonUcenik buttonStyle={'btn--outline'}><AccountCircleRoundedIcon/></ButtonUcenik>}
            </div>
        </nav>
  </>
  ); 
}

export default NavbarUcenik;