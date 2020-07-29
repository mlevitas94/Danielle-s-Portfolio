import React, { useState } from 'react'
import './Contact.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'
import NavDesk from '../Nav/NavDesk'
import NavMobile from '../Nav/NavMobile'
import Axios from 'axios'

const Contact = () => {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        message: ''
    })

    const submitForm = () => {
        const { name, email, message } = inputs
        const errorBlank =  document.querySelector('.errorBlank')
        const errorEmail = document.querySelector('form .email p')
        
        errorBlank.innerHTML = ''
        errorEmail.innerHTML = ''
        

        if (!name || !email || !message) {
            return errorBlank.innerHTML = 'Please fill out all fields'
        }


        let regex = RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)

        if(!regex.test(email)){
            return errorEmail.innerHTML = 'Invalid Email'
        }

        const messageStatus = document.querySelector('.messageStatus')
        const button = document.querySelector('form button')
        messageStatus.innerHTML = ''
        messageStatus.style.color = 'initial'
        button.disabled = true





        Axios.post('/email', {name, email, message}).then(res => {
            messageStatus.style.opacity = '1'
            messageStatus.style.transform = 'translate(0px, -80px)'
            messageStatus.innerHTML = 'Message Sent'
            button.disabled = false
            setInputs({
                name: '',
                email: '',
                message: ''
            })
            setTimeout(() => {
                messageStatus.style.opacity = '0'
                messageStatus.style.transform = 'translate(0px, 0px)'
            }, 3000);
        }).catch(err => {
            messageStatus.style.opacity = '1'
            messageStatus.style.transform = 'translate(0px, -80px)'
            messageStatus.innerHTML = 'Could not send message, please try again later'
            messageStatus.style.color = 'red'
            button.disabled = false
            setTimeout(() => {
                messageStatus.style.opacity = '0'
                messageStatus.style.transform = 'translate(0px, 0px)'
            }, 3000);
            console.log(err)
        })
    }

    return (
        <div className='page'>
            <div className='contactCont'>
                <NavMobile />
                <div className='content'>
                    <NavDesk />
                    <div className='top'>
                        <h1>Contact Me</h1>
                        <div className='infoSplit'>
                            <div className='links'>
                                <p className='email'><a href='mailto:danielleelmers@gmail.com'>danielleelmers@gmail.com</a></p>
                                <ul>
                                    <li><a href='https://twitter.com/dani_elmers' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                                    <li><a href='https://www.linkedin.com/in/danielle-elmers/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                    <li><a href='https://www.instagram.com/call_me_dani_/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                </ul>
                            </div>
                            <p className='info'>Well, hopefully by the time you make it to this page, you already perused my bodies of work and are so impressed that you want to contact me to either talk about writing, work together on a project, or even offer me a job (the dream!). By contacting me, you will get quality copywriting and editing work, a dedicated English language connoisseur, and a few awkward jokes. Drop me a message today!</p>
                        </div>
                    </div>
                    <form>
                        <div className='topForm'>
                            <div className='inputCont name'>
                                <label>Name</label>
                                <input type='text' name='name' value={inputs.name} maxLength={100}
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
                                <input type='email' name='email' value={inputs.email} maxLength={100}
                                    onFocus={() => { document.querySelector('.topForm .email label').classList.add('inputFocused') }}
                                    onBlur={(e) => {
                                        if (!e.target.value) {
                                            document.querySelector('.topForm .email label').classList.remove('inputFocused')
                                        }
                                    }}
                                    onChange={(e) => { setInputs({ ...inputs, email: e.target.value }) }} />
                                    <p></p>
                            </div>

                        </div>
                        <div className='inputCont message'>
                            <label>Message</label>
                            <textarea rows='3' value={inputs.message} maxLength={2000}
                                onFocus={() => { document.querySelector('.message label').classList.add('inputFocused') }}
                                onBlur={(e) => {
                                    if (!e.target.value) {
                                        document.querySelector('.message label').classList.remove('inputFocused')
                                    }
                                }}
                                onChange={(e) => { setInputs({ ...inputs, message: e.target.value }) }}
                            ></textarea>

                        </div>
                        <p className='errorBlank'></p>
                        <button onClick={(e) => {
                            e.preventDefault()
                            submitForm()
                        }}>Submit</button>
                        <div className='messageStatus'></div>
                    </form>

                </div>

            </div>

        </div>
    )
}
export default Contact