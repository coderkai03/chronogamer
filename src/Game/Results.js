import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Results = () => {
    const location = useLocation()

    const finalRounds = location.state.rounds
    const finalPoints = location.state.points

    console.log('RESULTS ROUNDS: ', finalRounds)
    console.log('RESULTS POINTS: ', finalPoints)

    return (
        <div>
            <h1>Results</h1>
            <p>Rounds: {finalRounds}</p>
            <p>Points: {finalPoints}</p>
        </div>
    );
}
 
export default Results;