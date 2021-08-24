/* eslint-disable quotes */

import PropTypes from "prop-types";

const Book = ({ book }) => {
  const {
    id, title, category, author,
  } = book;
  return (
    <li key={id}>
      <div className="book-info">
        <div>
          <p>{category}</p>
          <h4>{title}</h4>
          <p>{author}</p>
        </div>
        <div className="book-progress">
          <div>
            <p>circle</p>
            <div>progress</div>
          </div>
        </div>
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
