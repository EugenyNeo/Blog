import React from 'react'
import PostItem from "../postItem";
import './style.css'

const PostsList =({ items }) => {
    return (
        <div className='post-item'>
            <div className='conteiner'>
                <h3 className='name'>Latest list</h3>
            </div>

            {items ? items.map(post =>(<PostItem {...post}/>)):'Loading...'}
        </div>
    );
}

export default PostsList