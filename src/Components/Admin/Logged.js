import React from 'react'
import NewProject from './Controls/NewProject'
import DeleteProject from './Controls/DeleteProject'

const Logged = (props) => {
    const {projects, setProjects} = props
    return (
        <div className='loggedCont'>
            <div className='controlBox'>
                <NewProject projects={projects}/>
                <DeleteProject projects={projects} setProjects={setProjects}/>
            </div>
        </div>
    )
}

export default Logged