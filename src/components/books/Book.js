import PropTypes from 'prop-types';
import BookAction from './BookAction';
import BookProgress from './BookProgress';

const Book = ({ book }) => {
  const {
    item_id: id, title, author, category, progress,
  } = book;

  return (
    <li key={id} className="book-list">
      <div className="book-info">
        <div>
          <p className="book-cat">{category}</p>
          <h4 className="book-title">{title}</h4>
          <p className="book-author">{author}</p>
          <BookAction id={id} />
        </div>
        <BookProgress progress={progress} />
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string,
    progress: BookProgress.propTypes.progress,
  }).isRequired,
};

export default Book;
