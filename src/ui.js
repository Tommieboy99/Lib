export { displayBook, removeBookDisplay };

function displayBook(book) {
  const bookWishlistContainer = document.querySelector('.wishlist');
  const bookCollectionContainer = document.querySelector('.collection');

  const cardDiv = document.createElement('div');
  const infoDiv = document.createElement('div');
  const title = document.createElement('h4');
  const pTitle = document.createElement('p');
  const author = document.createElement('h4');
  const pAuthor = document.createElement('p');
  const pages = document.createElement('h4');
  const pPages = document.createElement('p');
  const status = document.createElement('h4');
  const pStatus = document.createElement('p');
  const btnsDiv = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');
  const svgNS = 'http://www.w3.org/2000/svg';
  const svgDelete = document.createElementNS(svgNS, 'svg');
  const svgEdit = document.createElementNS(svgNS, 'svg');
  const pathDelete = document.createElementNS(svgNS, 'path');
  const pathEdit = document.createElementNS(svgNS, 'path');

  svgDelete.setAttribute('viewBox', '0 0 24 24');
  svgDelete.setAttribute('width', '24');
  svgDelete.setAttribute('height', '24');
  svgDelete.setAttribute('fill', '#C9A66B');

  svgEdit.setAttribute('viewBox', '0 0 24 24');
  svgEdit.setAttribute('width', '24');
  svgEdit.setAttribute('height', '24');
  svgEdit.setAttribute('fill', '#C9A66B');

  pathDelete.setAttribute(
    'd',
    'M5.755 20.283 4 8h16l-1.755 12.283A2 2 0 0 1 16.265 22h-8.53a2 2 0 0 1-1.98-1.717zM21 4h-5V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z'
  );

  pathEdit.setAttribute(
    'd',
    'M6.84 10.8c.48-2.4 2.64-4.2 5.16-4.2 1.8 0 3.24.84 4.2 2.16l2.04-2.4C16.8 4.68 14.52 3.6 12 3.6c-4.2 0-7.68 3.12-8.28 7.2H1.2l4.2 4.8 4.8-4.8H6.84zm11.76-2.4l-3.36 4.8h2.76c-.6 2.4-2.64 4.2-5.16 4.2-1.8 0-3.24-.84-4.2-2.16l-2.04 2.28c1.44 1.68 3.72 2.76 6.24 2.76 4.2 0 7.68-3.12 8.28-7.2h2.64l-4.32-4.8z'
  );

  title.textContent = 'Title';
  pTitle.textContent = `${book.title}`;
  author.textContent = 'Author';
  pAuthor.textContent = `${book.author}`;
  pages.textContent = 'Pages';
  pPages.textContent = `${book.pages}`;
  status.textContent = 'Status';
  pStatus.textContent = `${book.status}`;

  cardDiv.dataset.bookId = `${book.id}`;
  cardDiv.classList.add('bookCard');
  btnsDiv.classList.add('cardBtns');
  deleteBtn.classList.add('deleteBookBtn');
  editBtn.classList.add('editBookBtn');
  svgDelete.classList.add('trashSvg');
  svgEdit.classList.add('editSvg');

  svgDelete.appendChild(pathDelete);
  svgEdit.appendChild(pathEdit);
  deleteBtn.appendChild(svgDelete);
  editBtn.appendChild(svgEdit);
  btnsDiv.appendChild(editBtn);
  btnsDiv.appendChild(deleteBtn);
  infoDiv.appendChild(title);
  infoDiv.appendChild(pTitle);
  infoDiv.appendChild(author);
  infoDiv.appendChild(pAuthor);
  infoDiv.appendChild(pages);
  infoDiv.appendChild(pPages);
  infoDiv.appendChild(status);
  infoDiv.appendChild(pStatus);

  cardDiv.appendChild(infoDiv);
  cardDiv.appendChild(btnsDiv);

  if (`${book.status}` === 'Collected') {
    bookCollectionContainer.appendChild(cardDiv);
  } else {
    bookWishlistContainer.appendChild(cardDiv);
  }
}

function removeBookDisplay(bookCard) {
  bookCard.remove();
}
