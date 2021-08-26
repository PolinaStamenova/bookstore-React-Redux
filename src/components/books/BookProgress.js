import PropTypes from 'prop-types';
import progressCircle from './BookProgress.png';

const BookProgress = ({ progress }) => {
  const { currentChapter, completed } = progress;

  return (
    <div className="book-progress">
      <div className="book-progress-visualisation">
        <img src={progressCircle} alt="Progress circle" className="circle" />
        <div className="persentage">
          <p className="display-per">{`${completed} %`}</p>
          <p className="text">Completed</p>
        </div>
      </div>
      <div className="book-progress-update">
        <div className="curent-chapter-wrapper">
          <p className="text">CURRENT CHAPTER</p>
          <p className="chapter">{currentChapter}</p>
          <button type="button" className="update-button">
            UPDATE PROGRESS
          </button>
        </div>
      </div>
    </div>
  );
};

BookProgress.propTypes = {
  progress: PropTypes.shape({
    currentChapter: PropTypes.string,
    completed: PropTypes.string,
  }),
};
BookProgress.defaultProps = {
  progress: PropTypes.shape({
    currentChapter: '0',
    completed: 'Introduction',
  }),
};
export default BookProgress;
