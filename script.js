const bookContainer = document.querySelector("div.book-container");

const library = [
    {
        title: "BOOK",
        author: "ME",
        pages: 1337,
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

function addBookToLibrary(book) {
    library.push(book);
}

function renderLibrary() {
    bookContainer.textContent = "";

    for (let i = 0; i < library.length; ++i) {
        const book = library[i];

        const bookCard = document.createElement('div');
        const bookTitle = document.createElement('h2');
        const author = document.createElement('h3');
        const numPages = document.createElement('p');

        bookCard.id = i;
        bookCard.classList.add("book-card");
        bookTitle.textContent = book.title;
        author.textContent = book.author;
        numPages.textContent = book.pages;

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(author);
        bookCard.appendChild(numPages);
        bookContainer.appendChild(bookCard);
    }
}

renderLibrary();