import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const signup = () => {
    var [info, setinfo] = useState(
        {
            user_name: '',
            email: '',
            password: '',
        }

    )

    var [errorMessage, setErrorMessage] = useState('');
    var navigate = useNavigate()
    const reguser = (e) => {
        e.preventDefault()
        axios.post("https://worksheet-auth.mashupstack.com/register", info)
            .then(response => {
                setErrorMessage('')
                navigate('login');
            }).catch(error => {
                if (error.response.data.errors) {
                    setErrorMessage(Object.values(error.response.data.errors).join(''));
                } else {
                    setErrorMessage('failed to connect api..')
                }
            })
    }

    return (
        <>
            <div>
                {errorMessage ? <div>{errorMessage}</div> : ''}
            </div>
            <form onSubmit={reguser}>
                <label>name</label>
                <input type='text' onChange={(e) => setinfo({ ...info, user_name: e.target.value })} />
                <label>email</label>

                <input type='text' onChange={(e) => setinfo({ ...info, email: e.target.value })} />
                <label>password</label>

                <input type='text' onChange={(e) => setinfo({ ...info, password: e.target.value })} />
                <button type='submit'>signup</button>


            </form>



        </>
    )
}
export default signup

