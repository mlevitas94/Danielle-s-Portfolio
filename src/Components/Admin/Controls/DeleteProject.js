import React from 'react'

const DeleteProject = (props) => {
    const { projects } = props
    let projectsSorted = [...projects]
    projectsSorted.sort((a, b) => {
        return a.type.localeCompare(b.type)
    })
    return (
        <div>
            <h2>Delete Project</h2>
            <div className='deleteProject control'>
                {projectsSorted.map((proj, i) => {
                    console.log(proj)
                    return (
                        <div className='proj' key={i}>
                            <h3>{proj.type}</h3>
                            <p>{proj.title}</p>
                            <button>Delete</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DeleteProject