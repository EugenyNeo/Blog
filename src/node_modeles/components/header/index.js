import React from 'react'
import './style.css'

const Header = ({title, description, imageUrl})=> {
    return (
        <div className='header-block' style={{backgroundImage:`url(${imageUrl}`}}>
            <div className='container'>
                <div className='header-block__overlay'>
                    <div className='header-block__center'>
                        <h1>{title}</h1>
                        <h3>{description}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header