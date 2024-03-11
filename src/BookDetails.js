import {useParams} from 'react-router-dom';
import useFetch from './useFetch';
import {useHistory} from 'react-router-dom';

const BookDetails = () => {
    const {id} = useParams();
    const {data: book, error, isPending} = useFetch('http://localhost:8000/books/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/books/' + book.id, {
            method: "DELETE"
        }).then(() => {
            history.push('/');
        })
    }
    
    return ( 
        <div className="book-details">
            {isPending && <div> Loding </div>}
            {error && <div> {error} </div>}
            {book && (
                <article>
                    <h2>{book.title}</h2>
                    <p>Written by {book.author}</p>
                    <div>{book.body}</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BookDetails;