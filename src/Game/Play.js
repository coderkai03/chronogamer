import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Game from "./Game";

const Play = () => {
  const location = useLocation();
  const [rounds, setRounds] = useState(location.state.numRounds);
  const gameList = location.state.games;
  const [currentRound, setCurrentRound] = useState(0);
  let randGames = gameList;
  //const randGames = []; //UNCOMMENT LATER

//   shuffle entire list 
//   save first x objects 

    useEffect(() => {
      const k = Math.floor(Math.random() * (0 + 1));
      [randGames[0], randGames[k]] = [randGames[k], randGames[0]];
        for (let i = randGames.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randGames[i], randGames[j]] = [randGames[j], randGames[i]];
        }
        console.log("RANDOMIZED: ", randGames)

        //print all json id's
        for (let z = 0; z < randGames.length; z++) {
          console.log("Game ID: ", randGames[z].id)
        }

        //print first game info
        console.log("1st game: ", randGames[0])
    }, [])

    console.log(randGames)

  const handleNextRound = () => {
    if (currentRound < rounds-1)
        setCurrentRound(currentRound + 1);
    // setGames(randGames);
  };

  //const games = gameList.slice(0, 4); // select the first 4 games in the list
  //const selectedGameIndex = currentRound % games.length; // get the index of the selected game for the current round

  return (
    <div>
      <h1>Play game: {rounds} rounds</h1>
      <p>Current round: {currentRound}</p>
      {randGames && randGames
            .filter((game, index) => index === currentRound)
            .map((game) => (
              <div key={game.id}>
                <h2>{game.title}</h2>
                <img src={game.url} width={700}></img>
                <label>{game.year}</label>
              </div>
            //}
            ))}
      <button onClick={handleNextRound}>Next Round</button>
    </div>
  );
};

export default Play;
