export { validateFormInput };

function validateFormInput() {
  const bookTitle = document.querySelector('#bookName');
  const bookAuthor = document.querySelector('#bookAuthor');
  const bookPages = document.querySelector('#bookPages');

  const titleError = document.querySelector('.titleError');
  const authorError = document.querySelector('.authorError');
  const pagesError = document.querySelector('.pagesError');

  let isValid = true;

  [titleError, authorError, pagesError].forEach((el) => {
    el.textContent = '';
    el.classList.remove('errorActive');
  });

  if (bookTitle.validity.valueMissing) {
    titleError.textContent = 'You need to enter the book title.';
    titleError.classList.add('errorActive');
    isValid = false;
  }

  if (bookAuthor.validity.valueMissing) {
    authorError.textContent = 'You need to enter the book author.';
    authorError.classList.add('errorActive');
    isValid = false;
  }

  if (bookPages.validity.valueMissing || bookPages.validity.rangeUnderflow) {
    pagesError.textContent = 'You need to enter the number(>0) of pages.';
    pagesError.classList.add('errorActive');
    isValid = false;
  }

  return isValid;
}
