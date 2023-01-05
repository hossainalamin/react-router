import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';

const Friend = () => {
    const[friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    })
    return (
        <div>
            <h1>Hello Friend</h1>
            {friends.map(()=><Friends key = {friends.id}data={friends}></Friends>)}
        </div>
    );
};

export default Friend;