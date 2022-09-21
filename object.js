let myLibrary = [];
//Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Math.floor(Math.random() * 10000000);
}

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function formData() {
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("true").checked ? "Yes" : "Not yet";

    if (title == "" || author == "" || pages == "") {
        return alert("please fill in all data");
    } else {
        addBookToLibrary(title, author, pages, read);
        document.getElementById("book-form").reset();
        hideBookForm();
    }
}
function linkClickEvent(element) {
    console.log($(element).closest("div").attr("id"));
}
function deleteBook(selectedId) {
    const allBooks = document.querySelectorAll(".card");
    for (let i = 0; i < allBooks.length; i++) {
        let bookId = allBooks[i].getAttribute("id");
        if (selectedId === parseInt(bookId)) {
            console.log(selectedId, parseInt(bookId));
            allBooks[i].remove();
        }
    }
}

function showBookForm() {
    document.getElementById("book-form").style.display = "grid";
}
function hideBookForm() {
    document.getElementById("book-form").style.display = "none";
}

function displayBooks() {
    const books = document.querySelector(".books");
    const deleteDivs = document.querySelectorAll(".card");
    for (let i = 0; i < deleteDivs.length; i++) {
        deleteDivs[i].remove();
    }
    myLibrary.forEach((myLibrary) => {
        const card = document.createElement("div");
        books.appendChild(card);
        card.classList.add("card");
        card.setAttribute("id", myLibrary.id);
        const deleteBtn = document.createElement("button");
        deleteBtn.onclick = function () {
            deleteBook(myLibrary.id);
        };
        deleteBtn.classList.add("book-delete-btn");
        deleteBtn.textContent = "X";
        card.appendChild(deleteBtn);
        for (let key in myLibrary) {
            const para = document.createElement("p");
            if (key === "read") {
                const readDiv = document.createElement("div");
                readDiv.classList.add("readDiv");
                card.appendChild(readDiv);
                para.textContent = `${key}: ${myLibrary[key]}`;
                readDiv.appendChild(para);
                const readBtn = document.createElement("button");
                readBtn.classList.add("readBtn");
                readBtn.textContent =
                    myLibrary[key] === "Yes"
                        ? "Change to Not yet"
                        : "Change to Yes";
                readBtn.onclick = function () {
                    myLibrary[key] =
                        myLibrary[key] === "Not yet" ? "Yes" : "Not yet";
                    readBtn.textContent =
                        myLibrary[key] === "Not yet"
                            ? "Change to Yes"
                            : "Change to Not yet";
                    displayBooks();
                };
                readDiv.appendChild(readBtn);
            } else {
                para.textContent = `${key}: ${myLibrary[key]}`;
                card.appendChild(para);
            }
        }
    });
}

displayBooks();
