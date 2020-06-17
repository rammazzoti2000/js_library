const form = document.querySelector('.form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const newPar = document.createElement('p');
const btn = document.getElementById('btn');
const table = document.querySelector('.table');

let myLibrary = [];
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    // this.read = read;
  }
}

function remove() {
  let attr = this.getAttribute('class');  
  myLibrary.splice(attr, 1);
  render();
}


function render() {
  let allBooks = '';
  
  table.innerHTML = '';

  myLibrary.forEach((book, index) =>  {
    const movieEl = document.createElement('li');
    const butt = document.createElement('button');
    butt.setAttribute('class', `${index}`);
    butt.innerHTML = 'Delete';    
    butt.addEventListener('click', remove);        
    let text = book.title;
    movieEl.textContent = text;
    movieEl.append(butt);
    table.append(movieEl);
  });  
};

function addBookToLibrary(event) { 
  event.preventDefault();  
  let book = new Book(title.value, author.value, pages.value);
  myLibrary.push(book);
  render();
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
