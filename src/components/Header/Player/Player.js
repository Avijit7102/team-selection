import React, { useEffect, useState } from 'react';
import './Player.css';
import player from '../../../fakeData/Data.json';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import Cart from '../Cart/Cart';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Player = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        setPlayers(player);
    },[])
    const [cart, setCart] = useState([]);

    const addPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
    }
    return (
        <div className="player">
            <div className="player-div">
                {players.map(player => <PlayerDetails player = {player} key = {player.id} addPlayer= {addPlayer}></PlayerDetails>)}
            </div>
            <div className="cart">
                <div className="cart-length">
                    <h4 className="text-success">Total Player Added: {cart.length}</h4>
                </div>
                <div id="cart-details">
                    <Cart cart = {cart}></Cart>
                </div>
                
            </div>
            
        </div>
    );
};

export default Player;
