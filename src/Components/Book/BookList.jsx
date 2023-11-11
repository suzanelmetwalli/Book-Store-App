import React from "react";
import { useDispatch } from "react-redux";
export default function BookList({ isLoading, books, isLoggedIn, deleteBook ,getBookId}) {
  const dispatch = useDispatch();

  const bookList =
    books.length > 0
      ? books?.map((book) => (
          <div
            className="d-flex justify-content-between align-items-center border rounded-2 p-3"
            key={book.id}
          >
            <p className="mb-0">{book.title}</p>
            <div className="btn-group">
              <button className="btn btn-primary" disabled={!isLoggedIn} onClick={()=>getBookId(book.id)}>
                Read
              </button>
              <button
                className="btn btn-danger"
                disabled={!isLoggedIn}
                onClick={() => dispatch(deleteBook(book.id))}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      : "There is no books available";
  return (
    <>
      <h3>Book List</h3>
      {isLoading ? "loading..." :  bookList }
    </>
  );
}
