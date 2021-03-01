import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const cart = props.cart;
     const playerName = cart.reduce( (playerName, pName) => playerName+ pName.name,'')
     const salary = cart.reduce((salary, pSalary) => salary+ pSalary.salary, '0');
     const a = cart.map(a => a.name);
     const b = cart.map(b=> b.salary)
    return (
        <div className="aa">
            <h5>{a} {b}</h5>
        </div>
    );
};

export default Cart;