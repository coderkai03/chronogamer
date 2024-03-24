import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Game = (prop) => {

    useEffect(() => {
        console.log("Displaying: ", prop)
    }, [])

    return (
        <div key={prop.id}>
            {/* <h2>{prop.title}</h2> */}
            <img src={prop.url} width={700} alt="Game"></img>
            {/* {!prop.hideElement && <label>{prop.year}</label>} */}
        </div>
    );
}
 
export default Game;