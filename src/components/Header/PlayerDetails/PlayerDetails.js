import React from 'react';
import './PlayerDetials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faUserPlus } from '@fortawesome/free-solid-svg-icons';
const PlayerDetails = (props) => {
    const {name, image, salary, team} = props.player;
    const addPlayer = props.addPlayer;
    return (
        <div className="player-info">
            <img src={image} alt=""/>
            <h5>Name: {name}</h5>
            <h5>Team: {team}</h5>
            <p>Salary: ${salary}</p>
            <button onClick={() =>addPlayer(props.player)} className="addButton"><FontAwesomeIcon icon={faUserPlus} />Add</button>
        </div>
    );
};

export default PlayerDetails;