import React from 'react';

import './collection-item.styles.scss';

const CollectionItem = ({ id, name ,price ,imageUrl}) =>
(
    <div className="collection-item">
        <div 
        className= 'image' 
        style= 
        {
            {
                backgroundImage:`url(${imageUrl})`
            }
        }
        >
        </div>
        <div className="collection-footer">
            <span className='name'> { name}</span>
            <span className='price'> ${price}</span>
            {/* note to self : here add a feature which gives this same price  */}
            {/* in other currencies which are realtime updated according to the current exchange rate */}

        </div>
    </div>
)

export default CollectionItem;