import React, { useEffect, useState } from 'react'
import './Projects.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, withRouter } from 'react-router-dom'

const Project = (props) => {
    const { projects, selectedProject, setSelectedProject } = props
    const [noProject, setNoProject] = useState(false)
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
                        <div className='backBtn'>
                            <Link to='/projects'><FontAwesomeIcon icon={faArrowLeft} /></Link>
                        </div>
                        <h1>{selectedProject?.title}</h1>
                        <p>{selectedProject?.blurb}</p>
                        {
                            selectedProject?.links.length < 0 ?
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
                                selectedProject?.images.map((img, i )=> {
                                    return (
                                        <img alt='Project Image' key={i} src={img} />
                                    )
                                })}
                        </div>
                    </>
            }
        </div>
    )
}

export default withRouter(Project)