import React, { useState } from 'react'
import Axios from 'axios'

const DeleteProject = (props) => {
    const { projects, setProjects } = props

    const [confirm, setConfirm] = useState({
        confirmOn: false,
        title: '',
        deleting: false, 
        selected : null
    })

    const deleteProject = (title, i) => {
        Axios.post('/deleteproject', title).then(res => {
            const projectRemoved = projects.slice()
            projectRemoved.splice(i, 1)
            setProjects([...projectRemoved])
        })
    }
    const deleteConfirm = () => {
        return (
            <div className='deleteConfirm'>
                <div className='confirmFrame'>
                    <p>Are you sure you want to delete this project?</p>
                    <p className='title'>{confirm.title}</p>
                    <div>
                        {
                            confirm.deleting
                                ?
                                <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                                :
                                <>
                                    <button onClick={() => {
                                        setConfirm({ ...confirm, deleting: true })
                                        deleteProject(confirm.title, confirm.selected)
                                    }}>Yes</button>
                                    <button onClick={() => {
                                        setConfirm({
                                            confirmOn: false,
                                            title: '',
                                            selected : null
                                        })
                                    }}>No</button>
                                </>
                        }
                    </div>
                </div>
            </div>
        )
    }

    const projectList = () => {
        let type = ''

        const list = projects.map((proj, i) => {
            if (type !== proj.type) {
                type = proj.type
                return (
                    <div key={i}>
                        <h3 >{proj.type}</h3>
                        <div className='proj' key={i}>
                            <p>{proj.title}</p>
                            <button onClick={() => {
                                setConfirm({
                                    confirmOn: true,
                                    title: proj.title,
                                    selected : i
                                })
                            }}>Delete</button>
                        </div>

                    </div>
                )
            } else {
                return (
                    <div className='proj' key={i}>
                        <p>{proj.title}</p>
                        <button>Delete</button>
                    </div>
                )
            }

        })

        return list
    }
    return (
        <div>
            {confirm.confirmOn ? deleteConfirm() : null}
            <h2>Delete Project</h2>
            <div className='deleteProject control'>
                {projectList()}
            </div>
        </div>
    )
}

export default DeleteProject