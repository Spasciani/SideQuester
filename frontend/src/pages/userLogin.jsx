import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios"

export const UserLogin = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const axiosPostData = async() => {
        const postData = {
            email: email,
            password: password
        }
        //await axios.post('http://localhost:4000/users/send', postData) ;/Send would be if we have an action
        if (!email || !password) {
            setError(<p className="required">Please fill out all credentials.</p>)
        } else {
            await axios.post('http://localhost:4000/users/log-in', postData)
                .then(function (res) {
                    setError(<p className = "success">{res.data.message}</p>)
                    if(res.data.redirect === '/') {
                        window.location = '/'
                    }
                })

        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosPostData()
    }
    return (
        <div className="auth-form-container">
            <h2> Login! </h2>
            <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" required name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" required name="password" />

            {error}

            <button type="submit" style={{position: 'relative'}}>Log In</button>
        </form>
        <Link to="/register" className='link-btn'>Don't have an account? Register here! </Link>
        </div>
        
    );
};