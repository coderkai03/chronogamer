import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Play = () => {
  const location = useLocation();
  const [rounds, setRounds] = useState(location.state.numRounds);
  const gameList = location.state.games;
  const [currentRound, setCurrentRound] = useState(0);
  const randGames = gameList;
  //const randGames = []; //UNCOMMENT LATER

//   shuffle entire list 
//   save first x objects 

    useEffect(() => {
        for (let i = randGames.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randGames[i], randGames[j]] = [randGames[j], randGames[i]];
        }
        console.log("RANDOMIZED: ", randGames)
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
