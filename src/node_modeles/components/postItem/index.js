import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const PostItem =({title, createdAt, _id, onRemove})=> (
            <div className='post-item'>
                <Link to={`/post/${_id}`}>
                    <h2>{title}</h2>
                </Link>
                <p>
                    <i>Posted on {createdAt}</i>
                    <a href='javascript://' onClick={onRemove} className='pull-right'> Remove</a>
                    <Link to={`/post/${_id}/edit`} className='pull-right'> Edit</Link>
                </p>
            </div>
    )
export default PostItem

