import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import "./Shop.css"
const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0)
    count = count + 1;

    console.log(count);
    useEffect(() => {
        fetch("products.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        console.log(newCart)
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order summary</h4>
                <p>Selected Items: {cart.length}</p>
                <p>Total Price: $</p>
                <p>Total Shipping Charge: </p>
                <p>Tax: $</p>
                <h5>Grand Total: $</h5>
            </div>
        </div>
    );
};

export default Shop;