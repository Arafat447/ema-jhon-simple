import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce((total,prd) => total +prd.price,0)
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = Math.round(total + product.price);

    }
    let shipping = 0;
    if (total > 35) {
        shipping = 0;
    }
    else if (total > 15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 12;
    }
    const tax = Math.round(total / 10);
    const grandTotal = Math.floor(total + tax + shipping);
    return (
        <div>
            <h4>Order Summery:</h4>
            <p>Items Ordered:{cart.length}</p>
            <p>Product Price:$ {total}</p>
            <p><small>Shipping:$ {shipping}</small></p>
            <p><small>Tax + VAT :$ {tax}</small></p>
            <p>Total price:$ {grandTotal}</p>
        </div>
    );
};

export default Cart;