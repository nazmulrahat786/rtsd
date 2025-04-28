import React, { use } from 'react';

const Ul = ({uspms}) => {
    const {name,email,username} = use(uspms)
  const ulStyle = {
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }

    return (
        <div style={ulStyle}>
            <h3><small>Name{name}</small></h3>
            <h3><small>Email{email}</small></h3>
            <h3><small>Username: {username}</small></h3>
        </div>
    );
};

export default Ul;