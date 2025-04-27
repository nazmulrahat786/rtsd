import React, { use } from 'react';

const Users2 = ({pms}) => {
    const users = use(pms);
    console.log(users);
    
    return (
        <div>
<h1>Users 2</h1>
            
        </div>
    );
};

export default Users2;