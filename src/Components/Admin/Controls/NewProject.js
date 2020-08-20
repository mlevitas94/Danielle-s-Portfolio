import React, { useState } from 'react'
import { uniqueTypes } from '../../../assets/Functions'

const NewProject = (props) => {
    const { projects } = props
    const [addInfo, setAddInfo] = useState({
        title: '',
        content: '',
        images: [],
        links: []
    })
    return (
        <div>
            <h2>New Project</h2>
            <div className='newProject control'>
                <div>
                    <label htmlFor='title'>Title</label>
                    <input id='title' type='text' />
                </div>
                <div>
                    <label>Type</label>
                    <select>
                        {uniqueTypes(projects).map((type,i) => <option key={i} value={type}>{type}</option>)}
                        <option value={'new'}>New type...</option>
                    </select>
                </div>
                <div>
                    <label htmlFor='content'>Content</label>
                    <textarea id='content' rows='5'></textarea>
                </div>
                <div className='links'>
                    <label>Links</label>
                    <input type='text' />
                    <input type='text' />
                </div>
                <div>
                    <label>Images</label>
                    <input type='file' />
                </div>
            </div>
        </div>
    )
}

export default NewProject