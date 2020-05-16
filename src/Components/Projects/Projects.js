import React from 'react'
import './Projects.scss'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faSortDown} from '@fortawesome/free-solid-svg-icons'

const Projects = (props) => {
    const {projects} = props

    const projectList = projects.map((project, i) => {
        return (
            <div className='project'>
                <div className='top'>
                    <span>{i + 1 < 10 ? '0' + (i+1) : i + 1}</span>
                    <h3>Lorem Ipsum</h3>
                </div>
                <div className='bottom'>
                    <div className='imgCont'></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tortor vitae purus faucibus ornare. Rhoncus mattis rhoncus urna neque viverra. Mauris ultrices eros in cursus turpis massa tincidunt dui. Mattis vulputate enim nulla aliquet porttitor. Id eu nisl nunc mi ipsum faucibus vitae. Cras ornare arcu dui vivamus arcu felis bibendum. Urna et pharetra pharetra massa massa ultricies mi. Ut placerat orci nulla pellentesque dignissim enim. Lacinia quis vel eros donec ac odio tempor orci.</p>                
                    <div className='moreButton'>
                        <a>Read More</a>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='page'>
            <div className='projectsCont'>
                <div className='middleCard'>
                    <h1>Projects</h1>
                    <div className='catFlex'>
                        <div className='catCont'>
                            <FontAwesomeIcon icon={faSortDown}/>
                            <select>
                                <option>Audits</option>
                            </select>
                        </div>
                    </div>
                    <div className='projectsList'>
                        {projectList}

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects