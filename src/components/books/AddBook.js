import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleChange = (e) => setTitle(e.target.value);

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
    };

    dispatch(addBook(book));
    setTitle('');
  };

  return (
    <article>
      <h3>ADD NEW BOOK</h3>
      <form onSubmit={submitBookToStore}>
        <input
          value={title}
          placeholder="Book title"
          required
          onChange={handleChange}
        />
        <select placeholder="Categorie">
          <option value="">Categorie</option>
          <option>Action</option>
          <option>Science Fiction</option>
          <option>Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </article>
  );
};

export default AddBook;
