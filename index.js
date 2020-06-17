const form = document.querySelector('.form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const table = document.querySelector('.table');
// const btn = document.getElementById('btn');

const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function remove() {
  const attr = this.getAttribute('class');
  myLibrary.splice(attr, 1);
  render();
}

function render() {
  table.innerHTML = '';

  myLibrary.forEach((book, index) => {
    const movieEl = document.createElement('p');
    movieEl.setAttribute('id', `${index}`);

    myLibrary[index].read == 'Already read it' ? movieEl.classList.add('green') :  movieEl.classList.add('red');

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

function checkBox() {
  if (read.checked) {
    read.value = 'Already read it';
  } else {
    read.value = "Haven't read it yet";
  }
}

function validate() {
  if (title.value === '' || author.value === '' || pages.value === '') {
    alert('You must fill all the fields');
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
  console.log(myLibrary);
  // form.classList.remove('visible');
}

// function showForm() {
//   form.classList.toggle('visible');
// }

function readStatus() {
  const attr = this.getAttribute('id');
  console.log(this);
  if (myLibrary[attr].read === 'Already read it') {
    myLibrary[attr].read = "Haven't read it yet";
    this.classList.remove('green');
    console.log('worked!');
    render();
  } else if (myLibrary[attr].read === "Haven't read it yet") {
    myLibrary[attr].read = 'Already read it';
    this.classList.remove('red');
    render();
  }
}

// btn.addEventListener('click', showForm);
form.addEventListener('submit', addBookToLibrary);

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
