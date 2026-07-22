import React from "react";
import ScoreBelow70 from "./ScoreBelow70";

function ListofPlayers() {

    const players = [
        { name: "Sachin", score: 95 },
        { name: "Dhoni", score: 88 },
        { name: "Virat", score: 92 },
        { name: "Rohit", score: 65 },
        { name: "Rahul", score: 60 },
        { name: "Hardik", score: 75 },
        { name: "Jadeja", score: 55 },
        { name: "Pant", score: 80 },
        { name: "Gill", score: 68 },
        { name: "Iyer", score: 72 },
        { name: "Shami", score: 50 }
    ];

    return (
        <div>
            <h1>🏏 List of Players</h1>

            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        <strong>Mr. {player.name}</strong> - Score : {player.score}
                    </li>
                ))}
            </ul>

            <hr />

            <ScoreBelow70 players={players} />
        </div>
    );
}

export default ListofPlayers;