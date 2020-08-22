import React from 'react';

import './preview-collection.styles.scss';

import '../collection-item/collection-item.component.jsx';
import CollectionItem from '../collection-item/collection-item.component.jsx';

const PreviewCollection = ({ title, items }) => (
    <div class='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...itemprops }) => (
                        <CollectionItem key={id} {...itemprops} />
                    ))
            }
        </div>
    </div>
);

export default PreviewCollection;