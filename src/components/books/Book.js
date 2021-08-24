/* eslint-disable quotes */

import PropTypes from "prop-types";
import BookAction from "./BookAction";
import BookProgress from "./BookProgress";

const Book = ({ book }) => {
  const {
    id, title, category, author, progress,
  } = book;
  return (
    <li key={id} className="book-list">
      <div className="book-info">
        <div>
          <p>{category}</p>
          <h4>{title}</h4>
          <p>{author}</p>
          <BookAction />
        </div>
        <BookProgress progress={progress} />
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
    progress: BookProgress.propTypes.progress,
  }).isRequired,
};

export default Book;
