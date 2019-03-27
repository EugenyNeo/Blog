import React from 'react'
import PostItem from "../postItem";
import './style.css'

const PostsList =({ items }) => {
    return (
        <div className='post-item'>
            {items ? items.map(post =>(<PostItem {...post}/>)):'Loading...'}
        </div>
    );
}

export default PostsList