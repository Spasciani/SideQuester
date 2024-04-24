import React from 'react';
import { useNavigate } from 'react-router-dom';


const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        window.localStorage.removeItem("token")
        window.localStorage.removeItem("loggedIn")
        navigate('/login');
        window.location.reload()
    };
    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
};
export default LogoutButton;