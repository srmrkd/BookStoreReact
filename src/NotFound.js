import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Sorry</h2>
            <div>That page can not be found</div>
            <Link to="/">Back to the home page</Link>
        </div>
     );
}
 
export default NotFound;