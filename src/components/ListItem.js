import React from 'react';
import './ListItem.css';

import Helpers from '../Helpers';

export default ({product, addProduct, cart = false}) => {
    return (
        <div onClick={() => addProduct(product)} class="product--item">
            <img src={product.image} alt={product.description} />
            <div class="product--description">{product.description}</div>
            <div class="product--price">{Helpers.FormatPrice(product.price)}</div>
        </div>
    );
}