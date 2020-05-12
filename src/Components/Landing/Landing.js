import React from 'react'
import './Landing.scss'
import { Link } from 'react-router-dom'
import PhotoBy from '../../assets/Components/PhotoBy/PhotoBy'

const Landing = () => {
    return (
        <div className='page'>
            <div className='landingCont'>
                <div className='landingTitle'>
                    <h1>Danielle Elmers</h1>
                    <h2>Copywriter & Editor</h2>
                </div>

                <div className='verticle'>
                    <div className='verticleFlex'>
                        <div className='v-line'></div>
                        <div className='linkBox'>
                            <div className='linkCont'><Link to='/about'>About</Link></div>
                            <div className='linkCont'><Link to='/projects'>Projects</Link></div>
                            <div className='linkCont'><Link to='/contact'>Contact</Link></div>
                        </div>
                        <div className='v-line'></div>
                    </div>
                </div>
            </div>
            <PhotoBy/>
        </div>
    )
}

export default Landing