import React from 'react';
import { Link } from 'react-router';

const Users = ({user}) => {
const {id,name, email,phone} = user;
const userStyle ={
    border: '1px solid gray',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
}
    return (
        <div  style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone : {phone}</small></p>
            <Link to={`/users/${id}`}>Show DTLS</Link>
        </div>
    );
};

export default Users;