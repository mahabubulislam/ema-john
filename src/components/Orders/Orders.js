import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProduct';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    return (
        <div>
            <h1>Orders{cart.length}</h1>
        </div>
    );
};

export default Orders;