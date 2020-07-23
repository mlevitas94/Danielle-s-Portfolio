import React from 'react'
import './PhotoBy.scss'

const PhotoBy = (props) => {
    const {text} = props
    return (
        <p className='photoBy'>{!text ? 'Photo by Danielle Elmers' : text}</p>
    )
}

export default PhotoBy