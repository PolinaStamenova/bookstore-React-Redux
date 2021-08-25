/* eslint-disable quotes */

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../../redux/books/books";

const BookAction = ({ id }) => {
  const dispatch = useDispatch();

  return (
    <div className="book-action">
      <button type="button">Comments</button>
      <button type="button" onClick={() => dispatch(removeBook(id))}>
        Remove
      </button>
      <button type="button">Edit</button>
    </div>
  );
};

BookAction.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BookAction;
