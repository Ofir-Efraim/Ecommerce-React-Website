import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import {Products, Navbar, Cart, Checkout, About} from './components';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [count, setCount] = useState(0);
    const [finalPrice, setFinalPrice] = useState(0);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list({
            limit: 200
        });

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (product, quantity) => {
        if(quantity > 0){
            const item = await commerce.cart.add(product.id, quantity);
            setCart(item.cart);
            if(product.name.includes("spread")){
                setCount(count+parseInt(quantity));
            }
        }
    };
    const handleCaptureCheckout = async (checkoutToken, newOrder,price) => {
        setFinalPrice(price);
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutToken.id, newOrder);
    
          setOrder(incomingOrder);
          refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message);
        }
      };
    const handleUpdateCartQty = async (product, quantity,sign) => {
        const response = await commerce.cart.update(product.id, { quantity });

        setCart(response.cart)
        if(product.name.includes("spread") && sign === 0){
            setCount(count - 1);
        }
        else if(product.name.includes("spread") && sign === 1){
            setCount(count + 1)
        }
    };

    const handleRemoveFromCart = async (item) => {
        const response = await commerce.cart.remove(item.id);

        setCart(response.cart);

        if(item.product_name.includes("spread")){
            setCount(count - item.quantity)
        }
    };
    
    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);

        setCount(0);
    };
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCart(newCart);
        setCount(0);
        
      };
      useEffect(() => {
        fetchProducts();
        fetchCart();
        refreshCart();
      }, []);
    return (
        <Router>
        <div>
            <Routes>
                <Route exact path='/' element={<About/>}/>
                <Route exact path='/Products' element={<Products cart={cart} products={products} onAddToCart={handleAddToCart} />} />
                <Route exact path='/cart' element={<Cart cart={cart} 
                handleUpdateCartQty={handleUpdateCartQty} 
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
                count = {count}
                />} />   
                <Route exact path='/checkout' element={<Checkout cart={cart} order={order} error={errorMessage} handleCaptureCheckout={handleCaptureCheckout} finalPrice={finalPrice}/> } />                
            </Routes>
        </div>
        </Router>
    )
}

export default App
