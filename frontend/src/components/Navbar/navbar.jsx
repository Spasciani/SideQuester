import React from 'react';
import { Link } from 'react-router-dom'; 

function Navbar() {
    return (
        <div className='navbar'>
            <div className='logo' style={{ alignItems: 'center', marginBottom: '20px' }}>
                <div style={{ backgroundColor: '#93adba', padding: '10px', fontSize: '40px', color: '#dcdae3' }}>
                    <div style={{ backgroundColor: '#405491', padding: '5px', borderRadius: '1px' }}>ISideQuest</div>
                </div>
            </div>

            <ul className='navbar-menu' style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingRight: '100px', fontSize: '20px' }}>
                <li style={{ marginBottom: '20px' }}><a href="/"> Home </a></li>
                <li style={{ marginBottom: '20px' }}><a href="/contact"> Contact </a></li>
                <li style={{ marginBottom: '20px' }}><a href="/login"> Login </a></li>
                <li style={{ marginBottom: '20px' }}><a href="/map"> Maps </a></li>
                <li style={{ marginBottom: '20px' }}><Link to="/post-quest">Post Quest</Link></li> {}
                
            </ul>
        </div>
    );
}

export default Navbar;