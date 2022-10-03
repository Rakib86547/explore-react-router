import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import './Nav.css';
const Nav = () => {
    const [open, setOpen] = useState(false)
  
    return (
        <div className='navbar'>
            <div onClick={() => setOpen(!open)}>
                {
                    open ? <Bars3Icon className='menu-icon'></Bars3Icon> : <XMarkIcon></XMarkIcon>
                }
            </div>
            
            <nav className='menus'>
               <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
               <NavLink to='/users'>Users</NavLink>
               <NavLink to='/posts'>Posts</NavLink>
               <NavLink to='/countries'>Countries</NavLink>
            </nav>
        </div>
    );
};

export default Nav;