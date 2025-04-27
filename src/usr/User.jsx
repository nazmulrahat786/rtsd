import React from 'react';
import { useLoaderData } from 'react-router';
import Users from './Users';

const User = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
          {
            users.map(user =><Users user={user}></Users>)
          }
        </div>
    );
};

export default User;