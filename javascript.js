let myLibrary = [];

//Constructor for each book
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.reportInfo = function() {
        return `Title: ${title} Author:${author} Pages:${pages} Read:${read}`;
    }
}


const cardContainer = document.querySelector('.card-container');
const bookForm = document.querySelector('#bookForm');
const btn = document.querySelector('#btn');
const submit = document.querySelector('#submit')


btn.addEventListener('click', () => {
    if (bookForm.style.display === "none") {
        bookForm.style.display = "block";
      } else {
        bookForm.style.display = "none";
      }
})

const book1 = new Book("The hobbit", 'tolkein', 'alot', 'read it');
const book2 = new Book("The hobbit2", 'tolkein', 'alot', 'read it');
const book3 = new Book("The hobbit3", 'tolkein', 'alot', 'read it');

console.log(book1.reportInfo());

//Used this function with prompts for initial logic before creating form submission
function addBookToLibrary(){
    let title = prompt("Book title:");
    let author = prompt("Author:");
    let pages = prompt("Pages:");
    const book = new Book(title, author, pages);
    myLibrary.push(book);
}

function clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
  }

//Event add a book
bookForm.addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();

    //get form values
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    //validate
    if(title == '' || author == '' || pages == '' || read == ''){
        alert('Please fill in all fields')
    } else {
        const book = new Book(title, author, pages, read);
        myLibrary.push(book);
    }
    removeOldArrayFromDisplay(cardContainer);
    displayMyLibrary();
    clearFields();
})

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);

function removeBookFromLibrary(index){
    myLibrary.splice(index, 1);
}



function displayMyLibrary(){
    for(let i=0; i<myLibrary.length; i++){
        let div = document.createElement('div');
        let removeFromLibrary = document.createElement("BUTTON");
        removeFromLibrary.innerHTML = "Remove";    

        removeFromLibrary.addEventListener('click', (e) => {
            e.preventDefault();
            removeBookFromLibrary(div.dataset);
            removeOldArrayFromDisplay(cardContainer);
            displayMyLibrary();
        })

        div.classList.add('card');
        div.dataset.card = i;
        div.textContent = `Title: ${myLibrary[i].title} Author: ${myLibrary[i].author} Pages:${myLibrary[i].pages}`;
        div.appendChild(removeFromLibrary)
        cardContainer.appendChild(div);
    }
}

function removeOldArrayFromDisplay(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



displayMyLibrary();