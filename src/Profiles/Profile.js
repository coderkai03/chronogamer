const Profile = ({name, record, percent}) => {
    return (
        <div>
            <h1>Gamertag: {name}</h1>
            <h3>Victories: {record}</h3>
            <h3>Accuracy: {percent}</h3>
        </div>
    );
}
 
export default Profile;