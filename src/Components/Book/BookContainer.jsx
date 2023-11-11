import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import BookInfo from "./BookInfo";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../Store/bookSlice";
import { deleteBook } from "../../Store/bookSlice";

export default function BookContainer() {
  const [bookInfo ,setBookInfo] = useState({})
  let dispatch = useDispatch();
  // state.books => books is reducers in store and value of it is initial state
  let {books, isLoading } = useSelector((state) => state.books);
  let {isLoggedIn} = useSelector((state)=> state.author)
  function getBookId(id) {
    const bookSelected = books.find((book)=> book.id === id)
    setBookInfo(bookSelected);
  }
  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <>
      <div className="row my-5 gy-3">
        <div className="col-md-6">
          <BookList isLoading={isLoading} books={books} isLoggedIn= {isLoggedIn} deleteBook={deleteBook} getBookId={getBookId}/>
        </div>
        <div className="col-md-6">
          <BookInfo bookInfo={bookInfo}/>
        </div>
      </div>
    </>
  );
}
