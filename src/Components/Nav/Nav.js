import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

const Nav = () => {

    return (
        <div className='navCont'>
            <div className='buttonCont'>
                <FontAwesomeIcon icon={faBars}/>
                <div className='dropDown'>
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

export default Nav