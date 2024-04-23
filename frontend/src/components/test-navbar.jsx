import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Test_Navbar = () => {
    const ref = useRef();
    const [navbarOpen, setNavbarOpen] = useState(false);
    useEffect(() => {
      const handler = (event) => {
        if (
          navbarOpen &&
          ref.current &&
          !ref.current.contains(event.target)
        ) {
          setNavbarOpen(false);
        }
      };
      document.addEventListener('mousedown', handler);
      return () => {
        // Cleanup the event listener
        document.removeEventListener('mousedown', handler);
      };
    }, [navbarOpen]);
    return (
      <>
        <nav ref={ref} className="test-navbar">
            <button className="NavBarToggle" onClick={() => setNavbarOpen((prev) => !prev)}>
            {navbarOpen ? (<MdClose style={{ width: '32px', height: '32px' }} />) : 
                          (<FiMenu style={{width: '32px', height: '32px',}}/>)}
            </button>

            <ul className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                <p className='menu-text'><Link to="/home">Home</Link></p>
                <p className='menu-text'><Link to="/login">Login</Link></p>
                <p className='menu-text'><Link to="/register">Register</Link></p>
                <p className='menu-text'><Link to="/map">Map</Link></p>
                <p className='menu-text'><Link to="/post-quest">Post Quest</Link></p>
                <p className='menu-text'><Link to="/quest-confirmation">Quest Confirmation</Link></p>
            </ul>
        </nav>
        {/* ... */}
      </>
  );
};
export default Test_Navbar;
