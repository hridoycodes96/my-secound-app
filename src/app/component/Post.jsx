import React from 'react';

const Post = ({post}) => {
    return (
        <div className='border border-2 p-2'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;