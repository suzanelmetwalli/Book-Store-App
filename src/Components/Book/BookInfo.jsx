import React from "react";

export default function BookInfo({ bookInfo }) {
  return (
    <>
      <h3>Book Details</h3>
      {Object.keys(bookInfo).length > 0 ? (
        <div>
          <p> Title: {bookInfo.title}</p>
          <p>Info: {bookInfo.desc}</p>
          <p>Price: {bookInfo.price}</p>
        </div>
      ) : (
        <div className="alert alert-secondary p-2">
          There is no post selected yet. Please select!
        </div>
      )}
    </>
  );
}
