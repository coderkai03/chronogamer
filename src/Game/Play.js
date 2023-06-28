import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Game from "./Game";

const Play = () => {
  
  const location = useLocation();
  const [rounds, setRounds] = useState(location.state.numRounds);
  const randGames = location.state.games;
  
  const [currentRound, setCurrentRound] = useState(0);
  const [points, setPoints] = useState(0)
  const [guessYr, setGuessYr] = useState(2010)

    useEffect(() => {
      
      console.log("State: ", location.state)
      console.log("Location: ", location)
      randomizeGames()
    }, [])

    const randomizeGames = () => {
        for (let i = 0; i < randGames.length - 1; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [randGames[i], randGames[j]] = [randGames[j], randGames[i]];
        }
        console.log("RANDOMIZED: ", randGames)
    }
                                                                                 
    console.log(randGames)

    const handleNextRound = () => {
      // setCurrentRound((prevRound) => {
      //   if (prevRound < rounds - 1) {
      //     if (guessYr === randGames[prevRound].year) {
      //       console.log("CORRECT!");
      //     }
      //     return prevRound + 1;
      //   }
      //   return prevRound;
      // });
      console.log("NEXT ROUND: ", location.state.numRounds)
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
              // <div key={game.id}>
              //   <h2>{game.title}</h2>
              //   <img src={game.url} width={700}></img>
              //   <label>{game.year}</label>
              // </div>
              <Game game={game} />
            //}
            ))}
            <div className="add-form">
            <form>
              <label>Year: {guessYr}</label>
              <input
                  type="range"
                  min='2000'
                  max='2023'
                  required
                  value={guessYr}
                  onChange={(e) => setGuessYr(e.target.value)}
                  />
                <button onClick={handleNextRound}>Next Round</button>
              </form>
            </div>
    </div>
  );
};

export default Play;
