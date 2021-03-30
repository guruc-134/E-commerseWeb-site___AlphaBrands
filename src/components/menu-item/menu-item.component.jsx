import React from 'react';
import './menu-item.style.scss';

const MenuItem = ({title,imageUrl,size}) =>
(

    <div className={`${size} menu-item`}>
        <div 
        className= "background-image"
        style={
            {
                backgroundImage:`url(${imageUrl})`,
                textTransform:`uppercase`,
            }
            } />
        <div className='content' >
            <h1 className="title">{title}</h1>
            <span className='subtitle'> SHOPNOW</span>
        </div>
    </div>
); 

export default MenuItem;