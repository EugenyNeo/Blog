import React from 'react'
import './style.css'

const Footer = ({title, description})=> {
    return (
        <div className='footer-block'>
            <div className='container'>
                <div className='footer-block__overlay'>
                    <div className='footer-block__center'>
                        <h1>{title}</h1>
                        <h3>{description}</h3>

                    </div>

                </div>
            </div>

        </div>
    );

}
export default Footer