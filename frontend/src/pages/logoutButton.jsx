import React from 'react';
import { useNavigate } from 'react-router-dom';
const LogoutButton = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        navigate('/login');
    };
    return (
        <button onClick={handleLogout} className="logout-button">
            Logout
        </button>
    );
};
export default LogoutButton;