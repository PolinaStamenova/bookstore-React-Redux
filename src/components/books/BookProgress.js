import PropTypes from 'prop-types';

const BookProgress = ({ progress }) => {
  const { currentChapter, completed } = progress;

  return (
    <div className="book-progress">
      <div className="book-progress-visualisation">
        <p>circle</p>
        <div>
          <p>{`${completed} %`}</p>
          <span>completed</span>
        </div>
      </div>
      <div className="book-progress-update">
        <p>CURRENT CAHPTER</p>
        <p>{currentChapter}</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

BookProgress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string.isRequired,
    completed: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookProgress;
