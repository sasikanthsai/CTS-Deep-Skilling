import React from "react";

function ListofIndianPlayers(props) {
    return (
        <ul>
            {props.players.map((player, index) => (
                <li key={index}>Mr. {player}</li>
            ))}
        </ul>
    );
}

export default ListofIndianPlayers;