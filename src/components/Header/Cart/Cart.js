import React from 'react';
import './Cart.css';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Cart = (props) => {
    const cart = props.cart;
     const playerName = cart.reduce( (playerName, pName) => playerName+ pName.name,'')
     const salary = cart.reduce((salary, pSalary) => salary+ pSalary.salary, 0);

    return (
        <div className="cart-d">
            <div className="player-name">
                <h4>Players Name:</h4>
                {cart.map(playerName => <li>{playerName.name}</li>)}
            </div>
            <div className="player-salary">
                <h4>Their Salary:</h4>
                {cart.map(taka => <li>${taka.salary}</li> )}
            </div>
            <div className="total-budget">
                <h5>Total Budget:$ {salary}</h5>
            </div>
        </div>
        
    );
};

export default Cart;