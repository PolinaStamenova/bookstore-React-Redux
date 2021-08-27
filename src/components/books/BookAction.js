import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { removeBook } from '../../redux/books/books';

const BookAction = ({ id }) => {
  const dispatch = useDispatch();

  const deleteBook = () => {
    axios
      .delete(
        `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/oJEPI79UO3J8dyQm6m6H/books/${id}`,
      )
      .then((res) => {
        if (res.status === 201) {
          dispatch(removeBook(id));
        }
      });
  };

  return (
    <div className="book-action">
      <button type="button" className="action-button">
        Comments
      </button>
      <button
        type="button"
        className="action-button button-remove"
        onClick={deleteBook}
      >
        Remove
      </button>
      <button type="button" className="action-button">
        Edit
      </button>
    </div>
  );
};

BookAction.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BookAction;
