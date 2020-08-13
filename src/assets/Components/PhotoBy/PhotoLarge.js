import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const PhotoLarge = (props) => {
    const { selectedImage, setSelectedImage } = props
    return (
        <div className='photoLarge'>
            <div>
                <span onClick={() => { setSelectedImage(null) }}><FontAwesomeIcon icon={faTimes} /></span>
                <img src={selectedImage} alt='enlarged project photo' />

            </div>
        </div>
    )
}

export default PhotoLarge