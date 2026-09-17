import React from 'react';
import Post from '../component/Post';

const PostPage = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
    return (
        <div>
            <h2>post page:{posts.length}</h2>
            <div className='grid grid-cols-3 gap-4'>
                {
                    posts.map((post)=>(<Post key={post.id} post={post} ></Post>))
                }
            </div>
        </div>
    );
};

export default PostPage;