import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Chronogamer++</h1>
            <div className="links">
                <Link to='/'>Play</Link>
                <Link to='/add-games' >Add Games</Link>
                {/* onClick={ (event) => event.preventDefault() }  */}
            </div>
        </nav>
    );
}
 
export default Navbar;