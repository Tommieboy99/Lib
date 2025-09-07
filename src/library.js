export { addBook, deleteBook, getBook };

const library = [];

class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.id = crypto.randomUUID();
}

Book.prototype.changeStatus = function () {
  if (this.status === 'Wishlist') {
    this.status = 'Collected';
  } else {
    this.status = 'Wishlist';
  }
};

function addBook(title, author, pages, status) {
  const book = new Book(title, author, pages, status);
  library.push(book);
  return book;
}

function getBook(id) {
  const book = library.find((book) => book.id === id);
  return book;
}

function deleteBook(id) {
  const bookIndex = library.findIndex((book) => book.id === id);

  if (bookIndex > -1) {
    library.splice(bookIndex, 1);
  }
}
