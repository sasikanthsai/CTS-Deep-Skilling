import React from "react";

function ScoreBelow70(props) {

    const playersBelow70 = props.players.filter(
        (player) => player.score < 70
    );

    return (
        <div>
            <h1>🔥 Players Scoring Below 70</h1>

            <ul>
                {playersBelow70.map((player, index) => (
                    <li key={index}>
                        <strong>Mr. {player.name}</strong> - Score : {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ScoreBelow70;