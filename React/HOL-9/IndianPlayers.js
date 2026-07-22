import React from "react";
import ListofIndianPlayers from "./ListofIndianPlayers";

function IndianPlayers() {

    const oddTeam = ["Sachin", "Sehwag", "Gambhir", "Dravid", "Raina", "Zaheer"];
    const evenTeam = ["Dhoni", "Kohli", "Rohit", "Yuvraj", "Ashwin"];

    const T20Players = ["Surya", "Hardik", "Pant"];
    const RanjiTrophyPlayers = ["Pujara", "Rahane", "Saha"];

    const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

    return (
        <div>
            <h2>Odd Team Players</h2>
            <ListofIndianPlayers players={oddTeam} />

            <h2>Even Team Players</h2>
            <ListofIndianPlayers players={evenTeam} />

            <h2>Merged Players</h2>
            <ul>
                {IndianPlayers.map((player, index) => (
                    <li key={index}>Mr. {player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianPlayers;