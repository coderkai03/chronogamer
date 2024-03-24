import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CHRONOGAMER</h1>
            <div className="links">
                <Link to='/'>Play</Link>
                <Link to='/add-games' >Add Games</Link>
                <Link to='/leaderboard' >Leaderboard</Link>
                {/* onClick={ (event) => event.preventDefault() }  */}
            </div>
        </nav>
    );
}
 
export default Navbar;