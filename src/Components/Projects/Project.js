import React, { useEffect, useState } from 'react'
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faExpand } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'
import PhotoLarge from '../../assets/Components/PhotoBy/PhotoLarge'

const Project = (props) => {
    const { projects, selectedProject, setSelectedProject } = props
    const [noProject, setNoProject] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)
    useEffect(() => {
        const images = document.querySelectorAll('.imgCont img')
        if (images.length === 1) {
            images[0].style.width = '70%'
        }
        if (selectedProject === null) {
            const location = props.location.pathname.split('/')
            for (let i = 0; i < projects.length; i++) {
                if (location[location.length - 1] === projects[i].title) {
                    return setSelectedProject(projects[i])
                }
            }
            if (selectedProject === null) {
                setNoProject(true)
            }
        }

    }, [])
    return (
        <div className='selectedProject'>
            {
                noProject ?
                    <p className='noProject'>Project not found</p>
                    :
                    <>
                        {selectedImage !== null ?
                            <PhotoLarge selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>
                            :
                            null
                        }
                        <div className='backBtn'>
                            <Link to='/projects'><FontAwesomeIcon icon={faArrowLeft} /></Link>
                        </div>
                        <h1>{selectedProject?.title}</h1>
                        <pre>{selectedProject?.blurb}</pre>
                        {
                            selectedProject?.links === null || selectedProject?.links.length < 0 ?
                                null
                                :
                                <div className='links'>
                                    {
                                        selectedProject?.links.map((link, i) => {
                                            return (
                                                <a rel="noopener noreferrer" key={i} target='_blank' href={link.hyperlink}>{link.caption}</a>
                                            )
                                        })
                                    }
                                </div>


                        }
                        <div className='imgCont'>
                            {
                                selectedProject?.images.map((img, i) => {
                                    return (
                                        <div key={i}>
                                            <num>
                                                {i + 1}
                                            </num>
                                            <span onClick={() => {setSelectedImage(img)}}>
                                                <FontAwesomeIcon icon={faExpand} />
                                            </span>
                                            <img onClick={() => {setSelectedImage(img)}} alt='Project Image' src={img} />
                                        </div>
                                    )
                                })}
                        </div>
                    </>
            }
        </div>
    )
}

export default withRouter(Project)