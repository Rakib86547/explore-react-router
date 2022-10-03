import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './UsersDetails.css';
const UsersDetails = () => {
    const users = useLoaderData()
    console.log(users)
    const {username, address, company, phone, website} = users;
    const {street, city} = address;
    const {name, bs} = company;
    return (
        <div>
            <h1>this is users details</h1>
            <div  className='user-details'>
            <p><strong>Name: </strong>{username}</p>
            <p><strong>Phone: </strong>{phone}</p>
            <p><strong>Address: </strong>{street}, {city}</p>
            <p><strong>Company: </strong>{name}</p>
            <p><strong>Position: </strong>{bs}</p>
            <p><strong>Website: </strong>{website}</p>
            </div>
          
        </div>
    );
};

export default UsersDetails;