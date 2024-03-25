import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Game from './Game'

const Play = () => {
  const location = useLocation();
  const history = useHistory()

  const numRounds = location.state.numRounds;
  const gameList = location.state.games;

  const [randGames, setRandGames] = useState([]);
  const [rounds, setRounds] = useState();

  const [currentRound, setCurrentRound] = useState(0);
  const [points, setPoints] = useState(0);
  const [guessYr, setGuessYr] = useState(2010);

  const [gameOver, setGameOver] = useState()
  const isInitialMount = useRef(true)
  const [hideElement, setHideElement] = useState(true)

  const [submitLabel, setSubmitLabel] = useState('Submit')

  //array of guesses
  const [guesses, setGuesses] = useState([])
  const [accuracies, setAccuracies] = useState([])
  

  useEffect(() => {
    setGameOver(false)

    const shuffledGames = [...gameList];
    //fisher yates algo randomizes games
    for (let i = shuffledGames.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledGames[i], shuffledGames[j]] = [shuffledGames[j], shuffledGames[i]];
    }

    //set randGames and rounds
    setRandGames(shuffledGames.splice(0, numRounds));
    setRounds(numRounds);
    console.log("RANDOMIZED: ", shuffledGames);
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    }
    else if (gameOver) {
      console.log('Total points: ', points)

      history.push({
        pathname: '/Results',
        state: {
          rounds: rounds,
          points: points,
          randGames: randGames,
          guesses: guesses,
          accuracies: accuracies
        }
      })
    }
  }, [gameOver, isInitialMount.current])

  //console.log(randGames);

  const handleNextRound = () => {
    setHideElement(false)

    setCurrentRound((prevRound) => prevRound+1)

    if (parseInt(guessYr) === parseInt(randGames[currentRound].year))
      setPoints((pts) => pts+1)

    //check accuracy
    const newAccuracies = [...accuracies, 1-(Math.abs(guessYr-randGames[currentRound].year))/23]
    setAccuracies(newAccuracies)

    if (currentRound === rounds-1)
      setGameOver(true)

    const newGuesses = [...guesses, guessYr]
    setGuesses(newGuesses)

    setSubmitLabel(() => hideElement ? 'Submit' : 'Next')

    //add pts if guessyr == game.year
    // handlePoints()
    console.log("POINTS: ", points)
    console.log("NEXT ROUND: ", currentRound);
  }

  return (
    <div className="content-div">
      <h2>Round {currentRound+1}</h2>
      {randGames &&
        randGames
          .filter((game, index) => index === currentRound)
          .map((game) => (
            // <div key={game.id}>
            //   <h2>{game.title}</h2>
            //   <img src={game.url} width={700} alt="Game"></img>
            //   {!hideElement && <label>{game.year}</label>}
            // </div>
            <Game 
              id={game.id}
              title={game.title}
              url={game.url}
              year={game.year}
              hideElement={hideElement}
            />
          ))}
      <div>
        <form>
          <label>Year: {guessYr}</label>
          <input
            type="range"
            min={2000}
            max={2023}
            required
            value={guessYr}
            onChange={(e) => setGuessYr(e.target.value)}
          />
          <button type="button" onClick={handleNextRound}>{submitLabel}</button>
          {/* Submit -> Next */}
        </form>
      </div>
    </div>
  );
};

export default Play;
