import React, { useEffect, useState } from 'react';
import './Player.css';
import player from '../../../fakeData/Data.json';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import Cart from '../Cart/Cart';
const Player = () => {
    const [players, setPlayers] = useState([]);
    useEffect(()=>{
        setPlayers(player);
        //console.log('players: ', players)
        //console.log(player);
    },[])
    const [cart, setCart] = useState([]);

    const addPlayer = (player) => {
        const newCart = [...cart, player];
        setCart(newCart);
        //console.log(player)
    }
    return (
        <div className="player">
            <div className="player-div">
                {players.map(player => <PlayerDetails player = {player} addPlayer= {addPlayer}></PlayerDetails>)}
            </div>
            <div className="cart">
                <div className="cart-length">
                    <h4>Total Player Added: {cart.length}</h4>
                </div>
                <div className="card-details">
                    <Cart cart = {cart}></Cart>
                </div>
                
            </div>
            
        </div>
    );
};

export default Player;
