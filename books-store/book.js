var popupoverlay = document.querySelector('.popup-overlay');
var popupbox = document.querySelector('.popup-box');
var addbutton = document.querySelector('.add-button');
var cancelbutton = document.querySelector('.cancel-btn');

addbutton.addEventListener('click', function (event) {
    popupoverlay.style.display = 'block';
    popupbox.style.display = 'block';
});

cancelbutton.addEventListener('click', function (event) {
    event.preventDefault();
    popupbox.style.display = 'none';
    popupoverlay.style.display = 'none';
})


window.addEventListener('DOMContentLoaded', function () {
    let books = JSON.parse(localStorage.getItem('books')) || [];
    books.forEach(book => createBookElement(book.title, book.author, book.description));
});

var ads = document.querySelector('.ad');
var containrr = document.querySelector('.container')
ads.addEventListener('click', function (event) {
    event.preventDefault();
    popupbox.style.display = 'none';
    popupoverlay.style.display = 'none';  
    var booktitle = document.getElementById('book-title').value;
    var bookauthor = document.getElementById('book-author').value;
    var bookdesc = document.getElementById('book-desc').value;

    saveBookToLocalStorage(booktitle, bookauthor, bookdesc);

    var divuh = document.createElement('div');
    var h2 = document.createElement('h2');
    var h3 = document.createElement('h3');
    var p = document.createElement('p');
    var dltbtn = document.createElement('button');

    divuh.setAttribute('class', 'book-container');
    h2.textContent = booktitle;
    h3.textContent = bookauthor;
    p.textContent = bookdesc;
    dltbtn.textContent = 'delete';

   divuh.appendChild(h2);
    divuh.appendChild(h3);
    divuh.appendChild(p);
    divuh.appendChild(dltbtn);
    containrr.appendChild(divuh);

    dltbtn.addEventListener('click',function(event){
        event.target.parentElement.remove();
        deleteBookFromLocalStorage(title);
    })

    function saveBookToLocalStorage(title, author, description) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books.push({ title, author, description });
        localStorage.setItem('books', JSON.stringify(books));
    }

    function deleteBookFromLocalStorage(title) {
        let books = JSON.parse(localStorage.getItem('books')) || [];
        books = books.filter(book => book.title !== title);
        localStorage.setItem('books', JSON.stringify(books));
    }


});