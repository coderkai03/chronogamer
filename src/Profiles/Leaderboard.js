import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";
import useFetch from "./useFetch";

const Leaderboard = () => {
    const {data: pfList, isLoading, Error} = useFetch('http://localhost:8000/profiles')

    return (
        <div>
            <h1>LEADERBOARD</h1>
            {pfList && pfList
                .map((pf) => (
                    <div key={pf.id}>
                        <Profile name={pf.name} record={pf.games_won} percent={pf.accuracy}/>
                    </div>
                ))}
        </div>
    );
}
 
export default Leaderboard;