import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Recommanded Books</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "#fff",
                    backgroundColor : "blue",
                    borderRadius: "8px"
                }} >New Book</Link>
            </div>
        </nav>
      );
}
 
export default Navbar;