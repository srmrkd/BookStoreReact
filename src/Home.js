/* eslint-disable no-unused-vars */
import BookList from './BookList';
import useFetch from './useFetch';


const Home = () => {

    const {data: books, isPending, error} = useFetch("http://localhost:8000/books");
    return ( 
        <div className="home">
            {error && <div> {error} </div>}
            {books && <BookList books = {books} titles="All Books" />}
            {isPending && <div>Loading... </div>}
        </div>
     );
}
 
export default Home;