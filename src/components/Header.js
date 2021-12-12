import React from 'react';
import './Header.css';

export default ({cartCount, setCartShow}) => {
    return (
        <header>
            <h1 onClick={() => setCartShow(false)}>Minha Loja</h1>
            <div class="cart" onClick={() => setCartShow(true)}>
                <img src="cart.png" alt="carrinho" />
                <span>{cartCount}</span>
            </div>
        </header>
    );
}