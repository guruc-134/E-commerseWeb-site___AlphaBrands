import React from 'react';

import CollectionItem from  '../collection-item/collection-item.component';

import './collection-preview.style.scss';


const CollectionPreview = ({title, items})=>
(
    <div className="collection-preview" >
        <h1 className='title'>
            {title.toUpperCase()}
        </h1>
        <div className='preview'>
            {
                items.filter((item,indx) => indx<4)
                .map(( {id, ...otheritemProps} )=> (
                    <CollectionItem key={id} {...otheritemProps} />
                ))
            }
        </div>

    </div>
);

export default CollectionPreview;  