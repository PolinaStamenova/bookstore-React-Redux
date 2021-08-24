// /* eslint-disable quotes*/

import PropTypes from 'prop-types';
// import React from 'react';
import Book from './Book';

const Books = ({ books }) => (
  <ul>
    {books.map((book) => (
      <Book key={book.id} book={book} />
    ))}
  </ul>
);

// Books.propTypes = {
//   books: PropTypes.arrayOf(Book.propTypes.book).isRequired,
// };

Books.propTypes = {
  books: PropTypes.objectOf(Array).isRequired,
};

export default Books;
