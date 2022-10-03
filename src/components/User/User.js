import React from 'react';
import { Link } from 'react-router-dom';
import './User.css';
const User = ({user}) => {
    const {id, name, email} = user;
    return (
        <div className='user'>
            <h3>Name: <small>{name}</small></h3>
            <h4>Email: <small>{email}</small></h4>
            <Link to={`/user/${id}`}><button className='user-btn'>Show Details</button></Link>
        </div>
    );
};

export default User;