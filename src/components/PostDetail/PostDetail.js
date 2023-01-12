import React from 'react';
import { useNavigate } from 'react-router';
import './postDetail.css';
const PostDetail = ({post}) => {
    const {id, title, body} = post;
    const navigate = useNavigate()
    const showPostDetail = () =>{
        navigate(`/posts/${id}`)
    }
    return (
        <div className='postDetail'>
            <p>Title : {title}</p>
            <p><small> Body : {body}</small></p>
            <button onClick={showPostDetail}>Show Detail</button>

        </div>
    );
};

export default PostDetail;