import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import * as Routes from '../../routes';

import './header.scss';

import hamburger from '../../_static/icons/hamburger.svg';
import logo from '../../_static/images/tones_app.png';
import close from '../../_static/icons/close.svg';

const Header = () => {

    const [open, setOpen] = useState(false);
    const toggleTrue = () => setOpen(true);
    const toggleFalse = () => setOpen(false);

    return (
        <header className='header-container'>
            <div className='header-inner-container'>
                <Link to={Routes.HOME}>
                    <img src={logo} className='a-logo' alt='Tones logo' />
                </Link>
                <div>
                    {!open &&
                        <button onClick={toggleTrue}>
                            <img src={hamburger} alt='click here'/>
                        </button>
                    }
                    {open &&
                        <div>
                            <button onClick={toggleFalse}>
                                <img src={close} alt='click here' />
                            </button>
                        </div>
                    }
                </div>

            </div>
            {open &&
                <div className='nav-links'>
                    <Link to={Routes.TRAINING}>Training</Link>

                    <Link to={Routes.AUTH_SIGN_IN}>Login</Link>
                    <Link to={Routes.AUTH_SIGN_UP}>Register</Link>
                </div>
            }
            
        </header>
    );
};

export default Header;

