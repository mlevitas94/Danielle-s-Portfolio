import React, {useState} from 'react'
import './Admin.scss'
import Axios from 'axios'

const Login = (props) => {
    const {admin, setAdmin} = props
    const [login, setLogin] = useState({
        username : '',
        password:''
    })
    
    const Login = () => {
        const {username, password} = login

        Axios.post('/login', {username, password}).then(res => {

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className='loginCont'>
            <div className='loginBox'>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input value={login.username} id='username' type='text' maxLength={30} onChange={(e) => {
                        setLogin({...login, username : e.target.value})
                    }}/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input value={login.password} id='password' type='password' maxLength={30} onChange={(e) => {
                        setLogin({...login, password : e.target.value})
                    }}/>
                </div>
                <button>Log In</button>
            </div>
        </div>
    )
}

export default Login