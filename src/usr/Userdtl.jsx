

import {  useLoaderData, useNavigate } from 'react-router';

const Userdtl = () => {
    const user = useLoaderData();
    const {website, name, email, phone} = user;
    const userStyle ={
        border: '1px solid gray',
        margin: '10px',
        padding: '10px',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)'
    }
    const navigate = useNavigate()
    const af = () => {
        navigate(-1)
    }

    return (
        <div style={userStyle}>
           <h3>User dtls </h3>
           <h4>name: {name}</h4>
           <p>Email: {email}</p>
           <p>phone: {phone}</p>
           <p>Website: {website}</p>
          <button onClick={af}>Go Back</button>

        </div>
    );
};

export default Userdtl;