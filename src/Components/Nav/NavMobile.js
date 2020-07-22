import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

const NavMobile = () => {
    return (
        <div className='navMobile'>
            <div className='buttonCont'>
            
                <FontAwesomeIcon icon={faBars} 
                onClick={(e) => {
                    document.querySelector('.buttonCont').classList.toggle('extndToggle')
                }}/>
                <div className='linkExt'>
                    <ul>
                        <li><Link to='/about'>About</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavMobile