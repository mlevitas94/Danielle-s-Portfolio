import React from 'react'
import './Landing.scss'

const Landing = () => {
    return (
        <div className='landingCont'>

            <h1>Danielle Elmers</h1>

            <div className='verticle'>
                <div className='verticleFlex'>
                    <div className='v-line'></div>
                    <div className='linkBox'>
                        <div className='linkCont'>About</div>
                        <div className='linkCont'>Projects</div>
                        <div className='linkCont'>Contact</div>
                    </div>
                    <div className='v-line'></div>
                </div>
            </div>

        </div>
    )
}

export default Landing