import React from 'react';
import './ProductsList.css';

import ListItem from './ListItem';

export default ({products, addProduct}) => {
    return (
        <main className="products">
            {products.map((item,key)=>(
                <ListItem product={item} addProduct={addProduct} />
            ))}
            
        </main>
    );
}