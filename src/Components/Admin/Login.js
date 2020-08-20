import React, { useState, useEffect } from 'react'
import './Admin.scss'
import Axios from 'axios'

const Login = (props) => {
    const { admin, setAdmin } = props
    const [login, setLogin] = useState({
        username: '',
        password: ''
    })
    // useEffect(() => {
    //     if (!admin) {
    //         Axios.get('/getadmin/').then(res => {
    //             setAdmin(true)
    //         }).catch(err => {
    //         })
    //     }
    // }, [])

    const Login = () => {
        const { username, password } = login

        const errMsg = document.querySelector('.loginBox span')

        if (!username || !password) {
            return errMsg.innerHTML = 'Fill out all fields'
        }

        const button = document.querySelector('.loginBox button')
        button.disabled = true

        errMsg.innerHTML = ''

        Axios.post('/login/', { username, password }).then(res => {
            button.disabled = false
            setAdmin(true)

        }).catch(err => {
            button.disabled = false
            errMsg.innerHTML = err.response.data
        })
    }

    return (
        <div className='loginCont'>
            <div className='loginBox'>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input value={login.username} id='username' type='text' maxLength={30} onChange={(e) => {
                        setLogin({ ...login, username: e.target.value })
                    }}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                Login()
                            }
                        }} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input value={login.password} id='password' type='password' maxLength={30} onChange={(e) => {
                        setLogin({ ...login, password: e.target.value })
                    }}
                        onKeyDown={(e) => {
                            if (e.keyCode === 13) {
                                Login()
                            }
                        }} />
                </div>
                <span></span>
                <button onClick={(e) => { Login() }}>Log In</button>
            </div>
        </div>
    )
}

export default Login