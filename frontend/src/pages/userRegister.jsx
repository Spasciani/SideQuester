import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"


//User registration
export const UserRegister = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState ('')
    const [error, setError] = useState('')

    //const[selectData, setSelectData] = useState([])

    // useEffect( () => {
    //     let processing = true
    //     axiosFetchData(processing)
    //     return () => {
    //         processing = false
    //     }
    // },[])

    //Fetch data to post //THIS IS HOW REACT DOES IT
    //WE ARE USING AXIOS
    //const fetchData = async() =>{
   //     await fetch('')
    //}

     //Not sure if I need to fetch any data here
    // const axiosFetchData = async(processing) => {
    //     await axios.get('http://localhost:4000/users/get-all')
    //     .then(res =>{
    //         if(processing){
    //             setSelectData(res.data)
    //         }
    //     })
    //     .catch(err => console.log(err))
    // }
    

    const axiosPostData = async() => {
        const postData = {
            email: email,
            password: password,
            name: name   
        }
        //await axios.post('http://localhost:4000/users/send', postData) ;/Send would be if we have an action
        if (!email || !password || !name) {
            setError(<p className="required">Please fill out all credentials.</p>)
        } else {
            await axios.post('http://localhost:4000/users/register', postData)
                .then(function (res) {
                    setError(<p className = "success">{res.data.message}</p>)
                    if(res.data.redirect === '/login') {
                        window.location = '/login'
                    }
                })
                //.then(res => setError(<p className = "success">{res.data}</p>))
        }
    }

 //called on button click
    const handleSubmit = (e) => {
        e.preventDefault()
        axiosPostData()
    }

    //Form
    return (
        <div className="auth-form-container">
            <h2> Register! </h2>
            <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="John Doe" id="name" required name="name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@ufl.edu" id="email" required name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" required name="password" />

                {error}

            <button type="submit" onClick={handleSubmit}>Register</button>
        </form>
        <Link to="/login" className='link-btn'>Already have an account? Login here! </Link>
    
        </div>
        
    )
}