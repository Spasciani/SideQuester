import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const UserRegister = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState ('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
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
            <button type="submit">Log In</button>
        </form>
        <Link to="/login" className='link-btn'>Already have an account? Login here! </Link>
    
        </div>
        
    );
};