import PropTypes from 'prop-types';
import Book from './Book';
import './BookAction.css';
import './BookProgress.css';
import './AddBook.css';
import './Books.css';

const Books = ({ books }) => (
  <ul className="list">
    {books.map((book) => (
      <Book key={book.item_id} book={book} />
    ))}
  </ul>
);

Books.propTypes = {
  books: PropTypes.arrayOf(Book.propTypes.book).isRequired,
};

export default Books;
