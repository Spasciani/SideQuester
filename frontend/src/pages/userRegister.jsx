import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"


//User registration
export const UserRegister = (props) => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState ('')
    const[selectData, setSelectData] = useState([])
    const [error, setError] = useState('')

    useEffect( () => {
        let processing = true
        axiosFetchData(processing)
        return () => {
            processing = false
        }
    },[])

    //Fetch data to post //THIS IS HOW REACT DOES IT
    //WE ARE USING AXIOS
    //const fetchData = async() =>{
   //     await fetch('')
    //}

     //Not sure if I need to fetch any data here
    const axiosFetchData = async(processing) => {
        await axios.get('http://localhost:4000/users')
        .then(res =>{
            if(processing){
                setSelectData(res.data)
            }
        })
        .catch(err => console.log(err))
    }
    

    const axiosPostData = async() => {
        const postData = {
            email: email,
            pass: pass,
            name: name   
        }
        //await axios.post('http://localhost:4000/users/send', postData) ;/Send would be if we have an action
        await axios.post('http://localhost:4000/users/send', postData)
        .then(res => setError(<p className = "success">{res.data}</p>))
    }

 //called on button click
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        axiosPostData()
    }

    //Form
    return (
        <div className="auth-form-container">
            <h2> Register! </h2>
            <form className="register-form"onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="name" placeholder="John Doe" id="name" name="name" />
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@ufl.edu" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
            <button type="submit" onClick={handleSubmit}>Log In</button>
        </form>
        <Link to="/login" className='link-btn'>Already have an account? Login here! </Link>
    
        </div>
        
    )
}