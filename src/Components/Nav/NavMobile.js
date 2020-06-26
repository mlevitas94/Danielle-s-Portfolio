import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Nav.scss'

const NavMobile = () => {
    return (
        <div className='navMobile'>
            <div className='buttonCont'>
                <FontAwesomeIcon icon={faBars} />

            </div>
        </div>
    )
}

export default NavMobile