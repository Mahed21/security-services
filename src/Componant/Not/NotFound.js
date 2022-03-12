import React from 'react';
import img from '../../error.jpg'
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
           <img src={img} alt="" className='image'/> 
        </div>
    );
};

export default NotFound;