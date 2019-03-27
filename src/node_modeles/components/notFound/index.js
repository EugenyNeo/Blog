import React from 'react'
import { Redirect } from 'react-router'

import './style.css'


const NotFound = () => {
    return (
        <Redirect to='/'/>
        /*<div className='container'>
                <h1 className="not-found">Ничего не наёдено :(</h1>
                <p>К сожалению, ничего по данному адресу не найдено</p>
        </div>*/
    );
}

export default NotFound