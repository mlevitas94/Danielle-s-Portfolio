import React from 'react'
import './Projects.scss'
import { Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Project from './Project'
import NavDesk from '../Nav/NavDesk';
import NavMobile from '../Nav/NavMobile'

const Projects = (props) => {
    const { projects, selectedProject, setSelectedProject, selectedType, setType } = props
    const projectList = projects.filter(proj => proj.type === selectedType).map((project, i) => {
        return (
            <div key={i} className='project'>
                <div className='top'>
                    <span>{i + 1 < 10 ? '0' + (i + 1) : i + 1}</span>
                    <h3>{project.title}</h3>
                </div>
                <div className='bottom'>
                    <img alt='Project Image' src={project.images[0]} />
                    <pre>{project.blurb}</pre>
                </div>
                <div className='moreButton'>
                    <Link onClick={() => { setSelectedProject(project) }} to={`/projects/${project.title}`}>View More <span><FontAwesomeIcon icon={faArrowCircleRight} /></span></Link>
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
                                                        <select value={selectedType} onChange={(e) => {
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

                                <Route exact path={`/projects/:title`} render={() => <Project selectedProject={selectedProject} setSelectedProject={setSelectedProject} projects={projects} />} />

                            </>
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Projects