import React, { useState } from 'react'
import { uniqueTypes } from '../../../assets/Functions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTimes } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'

const NewProject = (props) => {
    const { projects } = props
    const [addInfo, setAddInfo] = useState({
        title: '',
        content: '',
        type: '',
        images: [],
        imageURLS: [],
        links: []
    })

    const submitProject = async () => {
        const { title, content, type } = addInfo
        const button = document.querySelector('.newProject button')
        if (!title || !content || !type) {
            return console.log('required info needed')
        }
        let copy = { ...addInfo }
        delete copy.images

        button.disabled = true



        const getSignedRequest = async (file, i) => {
            return new Promise((resolve, reject) => {
                const uploadFile = (file, signedRequest, url) => {
                    return new Promise((resolveTwo, rejectTwo) => {
                        const options = {
                            headers: {
                                'Content-Type': file.type,
                            },
                        };
        
                        Axios.put(signedRequest, file, options).then(async (res) => {
                            console.log('uploaded')
                            copy.imageURLS = [...copy.imageURLS, url]
                            resolveTwo()
        
                        }).catch(err => {
                            return console.log(err, 'did not upload')
                        });
                    })
                };
    
                Axios.get('/api/signs3', {
                    params: {
                        'file-name': file.name,
                        'file-type': file.type
                    }
                })
                    .then(async (res) => {
    
                        const { signedRequest, url } = res.data;
                        await uploadFile(file, signedRequest, url)
                        resolve()
    
    
                    })
                    .catch(err => {
                        //sign didnt happen
                        return console.log(err, 'sign didnt happen')
                    })

            })
        }


        Promise.all(addInfo.images.map(async (file, i) => {
            await getSignedRequest(file, i)
        })).then(res => {
                
            Axios.post('/newproject', copy).then(res => {
                button.disabled = false
                console.log('done')
                setAddInfo({
                    title: '',
                    content: '',
                    type: '',
                    images: [],
                    imageURLS: [],
                    links: []
                })

            }).catch(err => {
                console.log(err)
            })
        }).catch(err => {
            console.log(err)
        })

    }
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
                <div className='images'>
                    <label>Images</label>
                    <div>
                        <label htmlFor='addImage' className='addImage'><FontAwesomeIcon icon={faPlus} /></label>
                        <input id='addImage' type='file' onChange={(e) => {
                            setAddInfo({ ...addInfo, images: [...addInfo.images, e.target.files[0]] })
                        }} />

                    </div>
                    {
                        addInfo.images.map((img, i) => {
                            return (
                                <div className='imgCont' key={i}>
                                    <span onClick={() => {
                                        let copy = [...addInfo.images]
                                        copy.splice(i, 1)
                                        setAddInfo({ ...addInfo, images: [...copy] })
                                    }}>
                                        <FontAwesomeIcon icon={faTimes} />
                                    </span>
                                    <img src={URL.createObjectURL(img)} />
                                </div>
                            )
                        })
                    }
                </div>
                <button onClick={() => {
                    submitProject()
                }}>Submit</button>
            </div>
        </div>
    )
}

export default NewProject