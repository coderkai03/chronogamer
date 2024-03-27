import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Profile from "./Profile";
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const Leaderboard = () => {
    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        try {
            const db = getFirestore();
            const querySnapshot = await getDocs(collection(db, 'users'));
            const dataArray = querySnapshot.docs.map(doc => doc.data());
            dataArray.sort((a, b) => b.accuracy - a.accuracy)
            setData(dataArray);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
      }, [])
      

    return (
        <div>
            <h1>LEADERBOARD</h1>
            {data && data.map((item, index) => (
              <div className="content-div" key={index} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                {console.log('Document:', item.accuracy)}
                <h2>{item.username}</h2>
                {item && <h2>Score: {item.accuracy}%</h2>}
              </div>
            ))}
        </div>
    );
}
 
export default Leaderboard;