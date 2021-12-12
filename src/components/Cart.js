import React from 'react';
import './Cart.css';
import ListItem from './ListItem';
import Helpers from '../Helpers';

export default ({cart, setCartShow}) => {
    let sum = cart.reduce(function(prev, current) {
        return prev + current.price
    }, 0);

    return (
        <main class="cart">
            <div class="cart--header">
                <h2>Meu Carrinho</h2>
                <div class="cart--back" onClick={() => setCartShow(false)}>Voltar a Loja</div>
            </div>
            <div class="cart--list">
                <ul>
                {cart.map((item,key)=>(
                    <li>{item.description} - <span class="cart--price">{Helpers.FormatPrice(item.price)}</span></li>
                ))}
                </ul>
            </div>
            <div class="cart--values">
                Valor Total R$ {Helpers.FormatPrice(sum)}
            </div>
        </main>
    );
}