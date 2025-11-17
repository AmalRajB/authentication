import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const login = () => {

    const [logindata, setlogindata] = useState(
        {
            email: '',
            password: '',

        }
    )
    var [errorMessage, setErrorMessage] = useState('');
    const loginattept = (e) => {
        e.preventDefault()
        const payload = {
            email: logindata.email?.trim(),
            password: logindata.password?.trim(),
        };
        axios.post('https://worksheet-auth.mashupstack.com/login', payload)
            .then(response => {
                setErrorMessage('')
                console.log(response.data.token)
                window.alert('login successfully..')
            }).catch(error => {
                if (error.response.data.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(''))
                } else if (error.response.data.message) {
                    setErrorMessage(error.response.data.message)
                } else {
                    setErrorMessage('failed to login please contact to admin')
                }
            })
    }

    return (
        <>
            <div>
                {errorMessage ? <p>{errorMessage}</p> : ''}
            </div>
            <form onSubmit={loginattept}>
                <label>email</label>
                <input type='email' onChange={(e) => setlogindata({ ...logindata, email: e.target.value })} />
                <label>password</label>
                <input type='password' onChange={(e) => setlogindata({ ...logindata, password: e.target.value })} />
                <button type='submit'>login</button>
            </form>
        </>
    )
}
export default login




