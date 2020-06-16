const form = document.querySelector('.form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const table = document.querySelector('.table');
const newPar = document.createElement('p');
const btn = document.getElementById('btn');

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
  
  render(table, allBooks);
}

function addBookToLibrary(event) {  
  // const read = document.getElementById('read').value;
  let book = new Book(title.value, author.value, pages.value);
  myLibrary.push(book);
  showAllBooks();
  event.preventDefault();
  title.value = '';
  author.value = '';
  pages.value = '';
  console.log(myLibrary);  
}

function showForm () {
  form.classList.toggle('visible');
}

btn.addEventListener('click', showForm);
form.addEventListener('submit', addBookToLibrary);
