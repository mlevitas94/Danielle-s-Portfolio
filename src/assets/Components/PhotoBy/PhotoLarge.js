import React from 'react'
import TestImg from '../../../assets/park.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const PhotoLarge = (props) => {
    const { image, setSelectedImage } = props
    return (
        <div className='photoLarge'>
            <div>
                <span onClick={() => { setSelectedImage({ imgSet: false, imgSrc: null }) }}><FontAwesomeIcon icon={faTimes} /></span>
                <img src={TestImg} alt='enlarged project photo' />

            </div>
        </div>
    )
}

export default PhotoLarge