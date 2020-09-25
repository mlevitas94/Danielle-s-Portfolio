import React from 'react'
import NewProject from './Controls/NewProject'
import DeleteProject from './Controls/DeleteProject'

const Logged = (props) => {
    const {projects} = props
    return (
        <div className='loggedCont'>
            <div className='controlBox'>
                <NewProject projects={projects}/>
                <DeleteProject projects={projects}/>
            </div>
        </div>
    )
}

export default Logged