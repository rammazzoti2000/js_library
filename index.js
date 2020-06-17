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
  // alert(event.target.nodeName);
  // var button_index = this.currentTarget.getAttribute('data-itemindex');
  // myLibrary.splice(button_index, 1);
  var element = document.getElementById("delete");
  element.remove();
}

function render(container, content) {
  container.innerHTML = content;
}

function showAllBooks() {
  let allBooks = '';

  // newPar.textContent = text;
  for (let i = 0; i < myLibrary.length; i += 1) {
    // allBooks += `<p>
    //               ${myLibrary[i].title}
    //               // ${myLibrary[i].author}
    //               // ${myLibrary[i].pages}
    //               // ${myLibrary[i].read}
    //               ${console.log(allBooks)}
    //               <span>
    //                 <button type="button" id="delete" onclick="remove(${i})" data-itemindex="${i}">Delete</button>
    //               </span>
    //             </p>`;
  //   var deleteButton = document.createElement('button')
  //   deleteButton.setAttribute('type', 'button')
  //   deleteButton.classList.add('delete-button');
  //   deleteButton.innerHTML = 'X';
  //   table.appendChild(deleteButton);
  }

  render(table, allBooks);
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
    showAllBooks();
    event.preventDefault();
    title.value = '';
    author.value = '';
    pages.value = '';
  }
  event.preventDefault();
  console.log(myLibrary);
}

function showForm() {
  form.classList.toggle('visible');
}

btn.addEventListener('click', showForm);
form.addEventListener('submit', addBookToLibrary);
