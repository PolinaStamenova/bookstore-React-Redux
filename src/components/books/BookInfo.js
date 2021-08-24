/* eslint-disable quotes */

import React from "react";
import Books from "./Books";
import AddBook from "./AddBook";

const books = [
  {
    id: 1,
    category: "Action",
    title: "The Hunger Games",
    author: "Suxanne Collins",
    progress: {
      currentChapter: "Chapter 17",
      completed: "64",
    },
  },
  {
    id: 2,
    category: "Science Fiction",
    title: "Dune",
    author: "Frank Herbert",
    progress: {
      currentChapter: 'Chapter 3: "A Lesson Learned"',
      completed: "8",
    },
  },
  {
    id: 3,
    category: "Economy",
    title: "Capital in the Twenty-First Century",
    author: "Suzanne Collins",
    progress: {
      currentChapter: "Introduction",
      completed: "0",
    },
  },
];

const BookInfo = () => (
  <div>
    <Books books={books} />
    <AddBook />
  </div>
);

export default BookInfo;
