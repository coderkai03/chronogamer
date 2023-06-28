import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Game = (gameItem) => {

    useEffect(() => {
        console.log("Displaying: ", gameItem)
    }, [])

    return (
        <div>
            <h2>{gameItem.title}</h2>
            <img src={gameItem.url} width={700}></img>
            <label>{gameItem.year}</label>
        </div>
    );
}
 
export default Game;