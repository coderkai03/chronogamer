const Profile = ({name, record, percent}) => {
    

    return (
        <div>
            <h1>Gamertag: {name}</h1>
            <label>Victories: {record}</label>
            <label>Accuracy: {percent}%</label>
        </div>
    );
}
 
export default Profile;