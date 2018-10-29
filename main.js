import data from './js/data/books-data.js';
import Book from './js/components/Book.js';



const main = document.querySelector('.main');
const books = data.map(book => new Book(book));
books.forEach(book => main.innerHTML += book.render());




//Test Code
window.books = books;