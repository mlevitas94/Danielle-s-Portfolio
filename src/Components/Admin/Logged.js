import React from 'react'
import NewProject from './Controls/NewProject'

const Logged = (props) => {
    const {projects} = props
    return (
        <div className='loggedCont'>
            <div className='controlBox'>
                <NewProject projects={projects}/>
            </div>
        </div>
    )
}

export default Logged