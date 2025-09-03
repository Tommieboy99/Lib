import './styles.css';

const library = [];

function Book(title, author, pages, isRead) {
  ((this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.isRead = isRead),
    (this.id = crypto.randomUUID()));
}

function addBook(title, author, pages, isRead) {
  const book = new Book(title, author, pages, isRead);
  library.push(book);
}

const bookContainer = document.querySelector('.container');

function displayBooks() {
  for (let i = 0; i < library.length; i++) {
    const div = document.createElement('div');
    const title = document.createElement('h2');
    const author = document.createElement('h2');
    const pages = document.createElement('h2');
    const isRead = document.createElement('h2');
    const deleteBtn = document.createElement('button');
    const svgNS = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(svgNS, 'svg');
    const path = document.createElementNS(svgNS, 'path');

    title.textContent = `Book Title: ${library[i].title}`;
    author.textContent = `Author: ${library[i].author}`;
    pages.textContent = `Pages: ${library[i].pages}`;
    isRead.textContent = `Read status: ${library[i].isRead}`;
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '24');
    svg.setAttribute('height', '24');

    path.setAttribute(
      'd',
      'M5.755 20.283 4 8h16l-1.755 12.283A2 2 0 0 1 16.265 22h-8.53a2 2 0 0 1-1.98-1.717zM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z'
    );

    div.dataset.bookId = `${library[i].id}`;
    div.classList.add('bookDiv');
    deleteBtn.classList.add('bookDeleteBtn');

    svg.appendChild(path);
    deleteBtn.appendChild(svg);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(isRead);
    div.appendChild(deleteBtn);
    bookContainer.appendChild(div);
  }
}

function deleteBook() {
  bookContainer.addEventListener('click', function () {});
}

function clearDisplay() {
  bookContainer.replaceChildren();
}

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
  const bookReadStatus = document.querySelector('#bookReadStatus').value;

  addBook(bookTitle, bookAuthor, bookPages, bookReadStatus);
  clearDisplay();
  displayBooks();
});

console.log(library);
