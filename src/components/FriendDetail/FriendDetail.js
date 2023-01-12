import React from 'react';
import { useLoaderData } from 'react-router';

const FriendDetail = () => {
    const friendDetail = useLoaderData();
    return (
        <div>
            <h2>Name : {friendDetail.name}</h2>
            <h3>Cell : {friendDetail.phone}</h3>
            <h4>Email : {friendDetail.email}</h4>
        </div>
    );
};

export default FriendDetail;