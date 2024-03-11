import { useState } from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) =>{
        e.preventDefault();
        const book = {title, body, author};
        
        setIsPending(true);

        fetch("http://localhost:8000/books", {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(() => {
            console.log('New Book Added!');
            setIsPending(false);
            // history.go(-1);
            history.push('/');
        })
        
    }

    return (
        <div className="create">
            <h2>Add a new Book!</h2>
            <form onSubmit={handleSubmit}>
                <label>Book Title:</label>
                <input 
                    type="text"
                    required
                    value = {title}
                    onChange = {(e) => setTitle(e.target.value)}
                />
                <label>Book Summary:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >
                </textarea>
                <label>Book Author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}   
                >
                    <option value="Dickenz">Charls Dickenz</option>
                    <option value="Hugo">Victor Hugo</option>
                    <option value="Malot">Hector Malot</option>
                    <option value="Dastayovski">Feodor Dastayovski</option>
                    <option value="Tolstoy">Leo Tolstoy</option>
                    <option value="Nitze">Friedrich Nitze</option>
                    <option value="Christie">Agatha Christie</option>
                    <option value="Shakespeare">William Shakespeare</option>
                    <option value="King">Stephen King</option>
                    <option value="Grisham">John Grisham</option>
                    <option value="Cartland">Barbara Cartland</option>
                    <option value="Steel">Danielle Steel</option>
                    <option value="Robbins">Harold Robbins</option>
                    <option value="Simenon">Georges Simenon</option>
                </select>
                {!isPending && <button>Add Book</button>}
                {isPending && <button disabled>Book Loading...</button>}

                
            </form>
            
        </div>
      );
}
 
export default Create;