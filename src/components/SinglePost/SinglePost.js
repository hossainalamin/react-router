import React from 'react';
import { useLoaderData } from 'react-router';

const SinglePost = () => {
    const singlePost = useLoaderData();
    console.log(singlePost);
    return (
        <div>
            <p>Title : {singlePost.title}</p>
            <p>Body: {singlePost.body}</p>
        </div>
    );
};

export default SinglePost;