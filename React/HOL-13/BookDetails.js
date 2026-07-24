import React from "react";

function BookDetails() {
  const books = [
    {
      id: 1,
      title: "React in Action",
      author: "Mark Tielens Thomas",
      price: "₹899",
    },
    {
      id: 2,
      title: "Learning JavaScript",
      author: "Ethan Brown",
      price: "₹699",
    },
  ];

  return (
    <div className="card">
      <h2>📚 Book Details</h2>

      {books.map((book) => (
        <div className="item" key={book.id}>
          <h3>{book.title}</h3>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Price:</strong> {book.price}</p>
        </div>
      ))}
    </div>
  );
}

export default BookDetails;