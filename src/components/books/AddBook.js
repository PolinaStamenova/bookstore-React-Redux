import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { addBook } from '../../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Action');

  const createBook = (book) => {
    axios
      .post(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oJEPI79UO3J8dyQm6m6H/books',
        book,
      )
      .then((res) => {
        if (res.status === 201) {
          dispatch(addBook(book));
        }
      })
      .catch((error) => error);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const book = {
      item_id: uuidv4(),
      title,
      category,
    };
    createBook(book);
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
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          placeholder="Categorie"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Action">Action</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </form>
    </article>
  );
};

export default AddBook;
