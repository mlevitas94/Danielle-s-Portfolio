import React, { useState } from 'react'
import './Contact.scss'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'
import Nav from '../Nav/Nav'

const Contact = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    return (
        <div className='page'>
            <div className='contactCont'>
                <div className='content'>
                    <Nav/>
                    <div className='top'>
                        <h1>Contact Me</h1>
                        <div className='infoSplit'>
                            <p className='info'>Well, hopefully by the time you make it to this page, you already perused my bodies of work and are so impressed that you want to contact me to either talk about writing, work together on a project, or even offer me a job (the dream!). By contacting me, you will get quality copywriting and editing work, a dedicated English language connoisseur, and a few awkward jokes. Drop me a message today!</p>
                            <div className='links'>
                                <p className='email'><a href='mailto:danielleelmers@gmail.com'>danielleelmers@gmail.com</a></p>
                                <ul>
                                    <li><a href='https://twitter.com/dani_elmers' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter}/></a></li>
                                    <li><a href='https://www.linkedin.com/in/danielle-elmers/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a></li>
                                    <li><a href='https://www.instagram.com/call_me_dani_/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <form>
                        <div className='topForm'>
                            <div className='inputCont name'>
                                <label>Name</label>
                                <input value={inputs.name}
                                    onFocus={() => { document.querySelector('.topForm .name label').classList.add('inputFocused') }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            document.querySelector('.topForm .name label').classList.remove('inputFocused')
                                        }
                                    }}
                                    onChange={(e) => { setInputs({ ...inputs, name: e.target.value }) }}
                                />
                            </div>
                            <div className='inputCont email'>
                                <label>Email</label>
                                <input value={inputs.email}
                                    onFocus={() => { document.querySelector('.topForm .email label').classList.add('inputFocused') }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            document.querySelector('.topForm .email label').classList.remove('inputFocused')
                                        }
                                    }}
                                    onChange={(e) => { setInputs({ ...inputs, email: e.target.value }) }} />
                            </div>

                        </div>
                        <div className='inputCont message'>
                            <label>Message</label>
                            <textarea rows='3' value={inputs.message}
                                onFocus={() => { document.querySelector('.message label').classList.add('inputFocused') }}
                                onBlur={(e) => {
                                    if (!e.target.value) {
                                        document.querySelector('.message label').classList.remove('inputFocused')
                                    }
                                }}
                                onChange={(e) => { setInputs({ ...inputs, message: e.target.value }) }}
                            ></textarea>

                        </div>
                        <button onClick={(e) => {e.preventDefault()}}>Submit</button>
                    </form>

                </div>

            </div>

        </div>
    )
}
export default Contact