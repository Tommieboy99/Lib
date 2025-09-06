import './styles.css';
import { displayBook, removeBookDisplay } from './ui';
import { addBook, deleteBook, getBook } from './library';

const newBookBtn = document.querySelector('.newBookBtn');
const addBookBtn = document.querySelector('.addBookBtn');
const addBookForm = document.querySelector('.bookForm');

newBookBtn.addEventListener('click', () => {
  addBookForm.classList.toggle('visible');
  newBookBtn.classList.toggle('close');

  if (newBookBtn.classList.contains('close')) {
    newBookBtn.textContent = 'Close';
  } else {
    newBookBtn.textContent = 'New Book';
  }
});

addBookBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const bookTitle = document.querySelector('#bookName').value;
  const bookAuthor = document.querySelector('#bookAuthor').value;
  const bookPages = document.querySelector('#bookPages').value;
  const bookStatus = document.querySelector('#bookStatus').value;
  const book = addBook(bookTitle, bookAuthor, bookPages, bookStatus);

  displayBook(book);
});

const bookContainer = document.querySelector('.bookShelf');

bookContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('deleteBookBtn')) {
    const bookCard = e.target.closest('.bookCard');
    const id = bookCard.dataset.bookId;

    removeBookDisplay(bookCard);
    deleteBook(id);
  } else if (e.target.classList.contains('editBookBtn')) {
    const bookCard = e.target.closest('.bookCard');
    const id = bookCard.dataset.bookId;
    const book = getBook(id);
    book.changeStatus();
    removeBookDisplay(bookCard);
    displayBook(book);
  }
});
