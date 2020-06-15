import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.navCont').classList.add('navShow')
            
        }, 100);

        return () => {document.querySelector('.navCont').classList.remove('navShow')}
    },[])
    return (
        <div className='navCont'>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/projects'>Projects</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}

export default Nav