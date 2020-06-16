let myLibrary = [];
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
  }
}

function render(container, content) {
  container.innerHTML = content;
}

function showAllBooks() {
  let allBooks = '';

  for (let i = 0; i < myLibrary.length; i += 1) {
    allBooks += `<p>${myLibrary[i].title}</p>`;
  }

  const table = document.querySelector('.table');
  render(allBooks, table);
}

function addBookToLibrary() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  // const read = document.getElementById('read').value;

  let book = new Book(title, author, pages);
  myLibrary.push(book);
  showAllBooks();
}
