const bookContainer = document.querySelector("div.book-container");
const newBookButton = document.querySelector("#new-book-btn");
const newBookModal = document.querySelector("#new-book-modal");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
const cancelButton = document.querySelector("#cancel-btn");
const submitButton = document.querySelector("#submit-btn");

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
Book.prototype.toggleRead = function () {
    this.read = !this.read;
}

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    library.push(book);
    renderLibrary();
}

function renderLibrary() {
    bookContainer.textContent = "";

    for (let i = 0; i < library.length; ++i) {
        const book = library[i];

        const bookCard = document.createElement('div');
        const title = document.createElement('h2');
        const author = document.createElement('h3');
        const numPages = document.createElement('p');
        const toggleReadBtn = document.createElement('button');
        const deleteBtn = document.createElement('button');

        bookCard.id = i;
        bookCard.classList.add("book-card");
        title.textContent = book.title;
        author.textContent = book.author;
        numPages.textContent = book.pages;
        toggleReadBtn.textContent = "Read";
        deleteBtn.textContent = "Delete";

        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(numPages);
        bookCard.appendChild(toggleReadBtn);
        bookCard.appendChild(deleteBtn);
        bookContainer.appendChild(bookCard);
    }
}

function resetInputs() {
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    readInput.checked = false;
}

newBookButton.addEventListener("click", (event) => {
    newBookModal.showModal();
});

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const read = readInput.checked;
    console.log(title, author, pages, read);
    addBookToLibrary(title, author, pages, read);
    resetInputs();
    newBookModal.close();
});

renderLibrary();