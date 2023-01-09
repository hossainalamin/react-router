import React from 'react';
import {useNavigate} from 'react-router-dom';
const Friends = (props)=>{
    const {name, username, id} = props.friend;
    console.log(id);
    const navigate = useNavigate()
    const showFriendDetail = () =>{
        const path = `/friend/${id}`
        navigate(path);
    }
    return (
    <div>
        <h2>Name : {name}</h2>
        <button onClick={showFriendDetail}>{username} id:{id}</button>
    </div>
    );

}
export default Friends;