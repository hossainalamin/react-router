import React from 'react';
import {useLoaderData, useNavigate} from 'react-router-dom';
import Friend from '../Friend/Friend';
const Friends = ()=>{
    const friends = useLoaderData();
    return (
    <div>
        <h2>I Have {friends.length} Friends</h2>
        {friends.map(friend => <Friend key = {friend.id} friend = {friend}></Friend>)}
    </div>
    );

}
export default Friends;