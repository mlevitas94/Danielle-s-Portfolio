import React, { useEffect } from 'react'
import './Projects.scss'
import testImg from '../../assets/park.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

const Project = (props) => {
    const { projects, selectedProject, setSelectedProject } = props
    useEffect(() => {
        const images = document.querySelectorAll('.imgCont img')
        if (images.length === 1) {
            images[0].style.width = '70%'
        }
        if (selectedProject === null) {
            const location = props.location.pathname.split('/')
            for (let i = 0; i < projects.length; i++) {
                if (location[location.length - 1] === projects[i].title) {
                    setSelectedProject(projects[i])
                }
            }

        }

    }, [])
    return (
        <div className='selectedProject'>
            <div className='backBtn'>
                <Link to='/projects'><FontAwesomeIcon icon={faArrowLeft} /></Link>
            </div>

            <h1>{selectedProject?.title}</h1>
            <p>{selectedProject?.blurb}</p>
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

export default withRouter(Project)