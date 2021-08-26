import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import Books from './Books';
import AddBook from './AddBook';
import { setBooks } from '../../redux/books/books';

const BookInfo = () => {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const loadBooks = async () => {
    const books = await axios
      .get(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oJEPI79UO3J8dyQm6m6H/books',
      )
      .then((res) => res.data);
    dispatch(setBooks(books));
  };
  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <Books books={books} />
      <AddBook />
    </div>
  );
};

export default BookInfo;
