import React, { useState } from 'react'
import './Contact.scss'

const Contact = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })
    return (
        <div className='page'>
            <div className='contactCont'>
                <div className='split'>
                    <div className='contentSide'>
                        <div className='content'>
                            <h1>Contact Me</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis eget nunc lobortis mattis. Enim nunc faucibus a pellentesque sit amet porttitor eget. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Egestas tellus rutrum tellus pellentesque eu tincidunt.</p>
                                <ul>
                                    <li><span>Email</span> : Email@mail.com</li>
                                    <li><span>Linkedin</span> : www.linkedin.com/myprofile</li>
                                    <li><span>Instagram</span> : www.instagram.com/myprofile</li>
                                    <li><span>Twitter</span> : www.twitter.com/myprofile</li>
                                </ul>
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
                            </form>

                        </div>
                    </div>
                    <div className='imageSide'>

                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contact