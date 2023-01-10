import React, { useEffect, useState } from 'react';
import Friends from '../Friends/Friends';
import Header from '../Header/Header';

const Friend = () => {
    const[friends, setFriends] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))
    },[])
    return (
        <div>
            <Header></Header>
            <h1>Hello Friend</h1>
            {friends.map(friend => <Friends key = {friend.id} friend={friend}></Friends>)}
        </div>
    );
};

export default Friend;