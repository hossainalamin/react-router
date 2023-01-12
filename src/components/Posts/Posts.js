import React from 'react';
import { useLoaderData } from 'react-router';
import PostDetail from '../PostDetail/PostDetail';

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
           {posts.map(post => <PostDetail key={post.id} post= {post}></PostDetail>)}
        </div>
    );
};

export default Posts;