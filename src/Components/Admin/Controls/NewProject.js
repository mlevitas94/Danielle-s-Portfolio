import React, { useState } from 'react'
import { uniqueTypes } from '../../../assets/Functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const NewProject = (props) => {
    const { projects } = props
    const [addInfo, setAddInfo] = useState({
        title: '',
        content: '',
        type: '',
        images: [],
        links: []
    })
    console.log(addInfo)
    return (
        <div>
            <h2>New Project</h2>
            <div className='newProject control'>
                <div>
                    <label htmlFor='title'>Title<span>*</span></label>
                    <input value={addInfo.title} id='title' type='text' onChange={(e) => setAddInfo({ ...addInfo, title: e.target.value })} />
                </div>
                <div>
                    <label>Type<span>*</span></label>

                    <select value={document.querySelector('.newProject .newType')?.style.display === 'block' ? '' : addInfo.type} onChange={(e) => {
                        if (e.target.value === 'new') {
                            setAddInfo({ ...addInfo, type: '' })
                            document.querySelector('.newProject .newType').style.display = 'block'
                        } else {
                            setAddInfo({ ...addInfo, type: e.target.value })
                            document.querySelector('.newProject .newType').style.display = 'none'
                        }
                    }}>

                        <option disabled value='' ></option>
                        {uniqueTypes(projects).map((type, i) => <option key={i} value={type}>{type}</option>)}
                        <option value={'new'}>New type...</option>
                    </select>
                    <span className='newType'>
                        <label>New Type<span>*</span></label>
                        <input type='text' value={addInfo.type} onChange={(e) => setAddInfo({ ...addInfo, type: e.target.value })} />
                    </span>
                </div>
                <div>
                    <label htmlFor='content'>Content<span>*</span></label>
                    <textarea value={addInfo.content} id='content' rows='5' onChange={(e) => setAddInfo({ ...addInfo, content: e.target.value })}></textarea>
                </div>
                <div className='links'>
                    <label>Links</label>

                    <FontAwesomeIcon icon={faPlus} onClick={() => {
                        setAddInfo({ ...addInfo, links: [...addInfo.links, { caption: '', hyperlink: '' }] })
                    }} />

                    {
                        addInfo.links.length > 0
                            ?
                            <FontAwesomeIcon icon={faMinus} onClick={() => {
                                let copy = [...addInfo.links]
                                copy.splice(addInfo.links.length - 1, 1)
                                setAddInfo({ ...addInfo, links: [...copy] })
                            }} />
                            :
                            null
                    }

                    {
                        addInfo.links.map((link, i) => {
                            return (
                                <div key={i}>
                                    <input value={link.caption} placeholder='Caption' onChange={(e) => {
                                        setAddInfo({ ...addInfo, links: [...addInfo.links.slice(0, i), { ...link, caption: e.target.value }, ...addInfo.links.slice(i + 1)] })
                                    }} />
                                    <input value={link.hyperlink} placeholder='Hyperlink' onChange={(e) => {
                                        setAddInfo({ ...addInfo, links: [...addInfo.links.slice(0, i), { ...link, hyperlink: e.target.value }, ...addInfo.links.slice(i + 1)] })
                                    }} />
                                </div>
                            )
                        })
                    }
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