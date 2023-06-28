import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";
import useFetch from "../useFetch";

const Leaderboard = () => {
    const url = 'http://localhost:8001/profiles'
    const [PFList, setPFList] = useState([])

    useEffect(() => {
        async function fetchData(){
          const res = await fetch(url)
          return await res.json()
        }
        fetchData().then(data => {
          setPFList(data)
        })
        
      }, [url])
      
      console.log("Profiles: ", PFList)

    return (
        <div>
            <h1>LEADERBOARD</h1>
            {PFList && PFList
                .map((pf) => (
                    <div key={pf.id}>
                        <Profile name={pf.name} record={pf.games_won} percent={pf.accuracy}/>
                    </div>
                ))}
        </div>
    );
}
 
export default Leaderboard;