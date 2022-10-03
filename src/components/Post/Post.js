import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Post.css';
const Post = ({post}) => {
    const {title, body, userId} = post;
    const navigate = useNavigate()
    const handleAuthor = () => {
        navigate(`/user/${userId}`)
    }
    return (
        <div className='post-card'>
            <p><strong>Title: </strong>{title}</p>
            <p><strong>Details: </strong>{body}</p>
            <button onClick={handleAuthor} className='post-btn'>Author Details</button>
        </div>
    );
};

export default Post;