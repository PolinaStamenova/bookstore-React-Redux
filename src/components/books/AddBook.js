// import React from "react";

const AddBook = () => (
  <article>
    <h3>ADD NEW BOOK</h3>
    <form>
      <input placeholder="Book title" />
      <select placeholder="Categorie">
        <option value="" selected disabled hidden>
          Categorie
        </option>
        <option>Action</option>
        <option>Science Fiction</option>
        <option>Economy</option>
      </select>
      <button type="submit">ADD BOOK</button>
    </form>
  </article>
);

export default AddBook;
