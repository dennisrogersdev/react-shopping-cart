import React, {useState, useRef} from 'react';

import './App.css';
import Header from './components/Header';
import ProductsList from './components/ProductsList';
import Message from './components/Message';
import Cart from './components/Cart';

function App() {
  const [products, setProducts] = useState([
    {id: 1, description: 'Pirulito Big Big', price: 0.55, image: 'products/pirulito.jpg'},
    {id: 2, description: 'Pen Drive', price: 22.80, image: 'products/pendrive.jpg'},
    {id: 3, description: 'Bone do Povo', price: 24.89, image: 'products/bone.jpg'},
    {id: 4, description: 'Sapato Erus', price: 88.55, image: 'products/sapato.jpg'},
    {id: 5, description: 'Livro - Este livro e sobre Jesus', price: 88.55, image: 'products/livro.jpg'},
    {id: 6, description: 'Pirulito Big Big', price: 0.55, image: 'products/pirulito.jpg'},
    {id: 7, description: 'Pen Drive', price: 22.80, image: 'products/pendrive.jpg'},
    {id: 8, description: 'Bone do Povo', price: 24.89, image: 'products/bone.jpg'},
    {id: 9, description: 'Sapato Erus', price: 88.55, image: 'products/sapato.jpg'},
    {id: 10, description: 'Livro - Este livro e sobre Jesus', price: 88.55, image: 'products/livro.jpg'},
    {id: 11, description: 'Pirulito Big Big', price: 0.55, image: 'products/pirulito.jpg'},
    {id: 12, description: 'Pen Drive', price: 22.80, image: 'products/pendrive.jpg'},
    {id: 13, description: 'Bone do Povo', price: 24.89, image: 'products/bone.jpg'},
    {id: 14, description: 'Sapato Erus', price: 88.55, image: 'products/sapato.jpg'},
    {id: 15, description: 'Livro - Este livro e sobre Jesus', price: 88.55, image: 'products/livro.jpg'},
  ])

  const [cart, setCart] = useState([]);

  const [messageShow, setMessageShow] = useState(false);

  const [cartShow, setCartShow] = useState(false);

  const addProduct = (product) => {
    cart.push(product);
    setCart(cart);
    setMessageShow(true);
    setTimeout(() => {
      setMessageShow(false);
    },1500);
  }

  return (
    <div className="app">
      <Header cartCount={cart.length} setCartShow={setCartShow} />
      { !cartShow && <ProductsList products={products} addProduct={addProduct} />}
      { cartShow && <Cart cart={cart} setCartShow={setCartShow} />}
      <Message show={messageShow} message={"Produto Adicionado ao Carrinho"} />
    </div>
  );
}

export default App;
