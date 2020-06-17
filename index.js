const form = document.querySelector('.form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const table = document.querySelector('.table');
const modal = document.getElementById('myModal');

const myLibrary = [{
  title: 'The Hobbit', author: 'J.J.R. Tolkien', pages: '304', read: 'Haven\'t read it yet',
},
{
  title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: '281', read: 'Already read it',
},
{
  title: 'Invisible Man', author: 'Ralph Ellison', pages: '516', read: 'Haven\'t read it yet',
},
{
  title: 'The Forsyte Saga', author: 'John Galsworthy', pages: '912', read: 'Already read it',
}];

function readStatus() {
  const attr = this.getAttribute('id');
  if (myLibrary[attr].read === 'Already read it') {
    myLibrary[attr].read = "Haven't read it yet";
    this.classList.remove('green');
    render(); // eslint-disable-line no-use-before-define
  } else if (myLibrary[attr].read === "Haven't read it yet") {
    myLibrary[attr].read = 'Already read it';
    this.classList.remove('red');
    render(); // eslint-disable-line no-use-before-define
  }
}

function remove() {
  const attr = this.getAttribute('class');
  myLibrary.splice(attr, 1);
  render(); // eslint-disable-line no-use-before-define
}

function render() {
  table.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const movieEl = document.createElement('p');
    movieEl.setAttribute('id', `${index}`);

    if (myLibrary[index].read === 'Already read it') {
      movieEl.classList.add('green');
    } else {
      movieEl.classList.add('red');
    }

    const butt = document.createElement('button');
    butt.setAttribute('class', `${index}`);
    butt.innerHTML = 'Delete';
    butt.addEventListener('click', remove);

    const rusSia = document.createElement('button');
    rusSia.setAttribute('id', `${index}`);
    rusSia.innerHTML = 'Read?';
    rusSia.addEventListener('click', readStatus);

    const titleSpan = document.createElement('span');
    const authorSpan = document.createElement('span');
    const pagesSpan = document.createElement('span');
    const readSpan = document.createElement('span');

    const textTtitle = `Title: ${book.title}`;
    titleSpan.textContent = textTtitle;

    const textAuthor = `Author: ${book.author}`;
    authorSpan.textContent = textAuthor;

    const textPages = `Pages: ${book.pages}`;
    pagesSpan.textContent = textPages;

    const textRead = `${book.read}`;
    readSpan.textContent = textRead;


    movieEl.append(titleSpan);
    movieEl.append(authorSpan);
    movieEl.append(pagesSpan);
    movieEl.append(readSpan);
    movieEl.append(butt);
    movieEl.append(rusSia);
    table.append(movieEl);
  });
}

render();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function checkBox() {
  if (read.checked) {
    read.value = 'Already read it';
  } else {
    read.value = "Haven't read it yet";
  }
}

function validate() {
  if (title.value === '' || author.value === '' || pages.value === '') {
    alert('You must fill all the fields'); // eslint-disable-line no-alert
    return false;
  }
  return true;
}

function addBookToLibrary(event) {
  const valid = validate();
  if (valid) {
    checkBox();
    const book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    render();
    event.preventDefault();
    title.value = '';
    author.value = '';
    pages.value = '';
  }
  event.preventDefault();
  modal.style.display = 'none';
}

form.addEventListener('submit', addBookToLibrary);

const btn = document.getElementById('btn');

const span = document.getElementsByClassName('close')[0];

btn.onclick = () => {
  modal.style.display = 'block';
};

span.onclick = () => {
  modal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};
