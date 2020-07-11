import React, {useEffect} from 'react'
import './Projects.scss'
import testImg from '../../assets/park.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Project = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.imgCont img')
        if(images.length === 1){
            images[0].style.width = '70%'
        }
    }, [])
    return (
        <div className='selectedProject'>
            <div className='backBtn'>
                <Link to='/projects'><FontAwesomeIcon icon={faArrowLeft}/></Link>
            </div>
            
            <h1>Project Name that could be long</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Rhoncus mattis rhoncus urna neque viverra. Mauris ultrices eros in cursus turpis massa tincidunt dui. Mattis vulputate enim nulla aliquet porttitor. Id eu nisl nunc mi ipsum faucibus vitae. Cras ornare arcu dui vivamus arcu felis bibendum. Urna et pharetra pharetra massa massa ultricies mi. Ut placerat orci nulla pellentesque dignissim enim. Lacinia quis vel eros donec ac odio tempor orci.</p>
            <div className='links'>
                <a>Link here</a>
                <a>Link here</a>
            </div>
            <div className='imgCont'>
                <img src={testImg} />
                <img src={testImg} />
                <img src={testImg} />
                <img src={testImg} />
            </div>
        </div>
    )
}

export default Project