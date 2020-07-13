import React, { useState, useEffect } from 'react'
import './Projects.scss'
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Project from './Project'
import NavDesk from '../Nav/NavDesk';
import NavMobile from '../Nav/NavMobile'

const Projects = (props) => {
    const { projects } = props
    const [selectedType, setType] = useState('')
    const projectList = projects.filter(proj => proj.type === selectedType).map((project, i) => {
        return (
            <div key={i} className='project'>
                <div className='top'>
                    <span>{i + 1 < 10 ? '0' + (i + 1) : i + 1}</span>
                    <h3>{project.title}</h3>
                </div>
                <div className='bottom'>
                    <img src={project.images[0]} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Rhoncus mattis rhoncus urna neque viverra. Mauris ultrices eros in cursus turpis massa tincidunt dui. Mattis vulputate enim nulla aliquet porttitor. Id eu nisl nunc mi ipsum faucibus vitae. Cras ornare arcu dui vivamus arcu felis bibendum. Urna et pharetra pharetra massa massa ultricies mi. Ut placerat orci nulla pellentesque dignissim enim. Lacinia quis vel eros donec ac odio tempor orci.</p>
                    <div className='moreButton'>
                        <Link to='/projects/projectname'>View More <span><FontAwesomeIcon icon={faArrowCircleRight} /></span></Link>
                    </div>
                </div>
            </div>
        )
    })

    const uniqueTypes = () => {
        let types = []

        for (let i = 0; i < projects.length; i++) {

            if (types.includes(projects[i].type)) {
                continue
            } else {
                types.push(projects[i].type)
            }
        }
        return types
    }

    console.log(selectedType)

    return (
        <div className='page'>
            <div className='preProjectCont'>
                <NavMobile />
                <div className='projectsCont'>
                    <div className='middleCard'>
                        <NavDesk />
                        {
                            <>
                                <Route exact path='/projects' render={() => {
                                    return <>
                                        <h1>Projects</h1>
                                        <div className='catFlex'>
                                            {
                                                projects.length === 0 ?
                                                    null
                                                    :
                                                    <div className='catCont'>
                                                        <FontAwesomeIcon icon={faSortDown} />
                                                        <select onChange={(e) => {
                                                            setType(e.target.value)
                                                        }}>
                                                            {uniqueTypes().map((type, i) => {
                                                                if (i === 0 && selectedType === '') {
                                                                    setType(type)
                                                                }
                                                                return (
                                                                    <option key={i} value={type}>
                                                                        {type}
                                                                    </option>
                                                                )
                                                            })}
                                                        </select>
                                                    </div>
                                            }
                                        </div>
                                        <div className='projectsList'>
                                            {
                                                projects.length === 0 ?
                                                    <p className='noProjects'>No projects to show</p>
                                                    :
                                                    projectList
                                            }

                                        </div>
                                    </>
                                }} />

                                <Route exact path='/projects/projectname' render={() => <Project />} />
                            </>
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects