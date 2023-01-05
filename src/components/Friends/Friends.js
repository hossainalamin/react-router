import React from 'react';

const Friends = (props)=>{
    const {name, username} = props.friend;
    console.log(props.data);
    return (
    <div>
        <h1>{name}</h1>
        <button>{username}</button>
    </div>
    );

}
export default Friends;