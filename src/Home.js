import useFetch from "./useFetch";

const Home = () => {
    const {data: games, isLoading, Error} = useFetch("http://localhost:8000/games")

    return (
        <div>
            <div className="home">
                <h1>Play Chronogamer</h1>
            </div>
        </div>
    );
}
 
export default Home;