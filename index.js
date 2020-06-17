const form = document.querySelector('.form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
const table = document.querySelector('.table');
const btn = document.getElementById('btn');

let myLibrary = [];
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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

    let text = `${book.title} ${book.author} ${book.pages} ${book.read}`;
    movieEl.textContent = text;
    movieEl.append(butt);
    movieEl.append(rusSia);
    table.append(movieEl);
    movieEl.addEventListener;   
  }) 
}

function checkBox() {
  if (read.checked) {
    read.value = "Already read it";
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
  let valid = validate();
  if(valid) {
    checkBox();
    let book = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(book);
    render();
    event.preventDefault();
    title.value = '';
    author.value = '';
    pages.value = '';
  }
  event.preventDefault();
  console.log(myLibrary);
  form.classList.remove('visible');
}

function showForm() {
  form.classList.toggle('visible');
}

function readStatus() {
  let attr = this.getAttribute('id');
      console.log(this);      
      if(myLibrary[attr].read == 'Already read it') {
        myLibrary[attr].read = "Haven't read it yet";
        this.classList.remove('green');
        console.log('worked!');
        render();
      } else if(myLibrary[attr].read == "Haven't read it yet") {
        myLibrary[attr].read = "Already read it";
        this.classList.remove('red');
        render();
      }
}

btn.addEventListener('click', showForm);
form.addEventListener('submit', addBookToLibrary);
