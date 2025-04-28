import React, { Suspense, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Ul from './Ul';

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
const uspms = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
const [sm,setSm] = useState(false)
const navigate =useNavigate()
const aaa = ()=>{
   navigate(`/users/${id}`)
}

    return (
        <div  style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone : {phone}</small></p>
            <Link to={`/users/${id}`}>Show DTLS</Link>
               

 <button onClick={aaa}>DTLS</button>
 <button onClick={()=>setSm(!sm)}>{sm ? 'hide' : 'DTL'} info </button>


 {
    sm && <Suspense fallback={<h1>Loading...</h1>}>
<Ul uspms={uspms}></Ul>
    </Suspense>
 }
        </div>
    );
};

export default Users;