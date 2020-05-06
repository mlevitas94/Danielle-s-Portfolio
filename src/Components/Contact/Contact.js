import React, { useState } from 'react'
import './Contact.scss'
import {FontAwesomeIcon}from '@fortawesome/react-fontawesome'
import {faTwitter, faLinkedin, faInstagram} from '@fortawesome/free-brands-svg-icons'

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
                    <div className='top'>
                        <h1>Contact Me</h1>
                        <div className='infoSplit'>
                            <p className='info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                            <div>
                                <p className='email'><span>Email : </span> mail@mail.com</p>
                                <ul>
                                    <li><FontAwesomeIcon icon={faTwitter}/></li>
                                    <li><FontAwesomeIcon icon={faLinkedin}/></li>
                                    <li><FontAwesomeIcon icon={faInstagram}/></li>
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