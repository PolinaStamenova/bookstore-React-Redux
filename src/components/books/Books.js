// /* eslint-disable quotes*/

import PropTypes from 'prop-types';
import Book from './Book';
import './Books.css';

const Books = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </ul>
);

Books.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
};

export default Books;
