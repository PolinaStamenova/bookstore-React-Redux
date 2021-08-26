const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const SET_BOOKS = 'bookStore/books/SET_BOOKS';
const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export const setBooks = (payload) => ({
  type: SET_BOOKS,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          ...action.payload,
          author: 'Author undefined',
          progress: {
            currentChapter: 'NEW CHAPTER"',
            completed: '0',
          },
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.id);
    case SET_BOOKS: {
      const saved = Object.entries(action.payload).map(([key, value]) => ({
        item_id: key,
        title: value[0].title,
        category: value[0].category,
        author: 'Author undefiend',
        progress: {
          currentChapter: 'Introduction',
          completed: '0',
        },
      }));
      return saved;
    }
    default:
      return state;
  }
};

export default reducer;
