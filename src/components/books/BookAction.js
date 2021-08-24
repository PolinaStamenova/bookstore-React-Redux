/* eslint-disable quotes */

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../../redux/books/books";

const BookAction = ({ id }) => {
  const dispatch = useDispatch();

  const handleRemove = () => dispatch(removeBook(id));

  return (
    <div className="book-action">
      <button type="button">Comments</button>
      <button type="button" onClick={handleRemove}>
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
