import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Game = (games) => {

    useEffect(() => {
        console.log("Displaying: ", games)
    }, [])

    return (
        <div>
        {games && games
            // .filter((game, index) => index === currentRound)
            .map((game) => (
              <div key={game.id}>
                <h2>{game.title}</h2>
                <img src={game.url} width={700}></img>
                <label>{game.year}</label>
              </div>
            //}
            ))}
        </div>
    );
}
 
export default Game;