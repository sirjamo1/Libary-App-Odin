let myLibrary = [];
//Object constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
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
    let read = document.getElementById("true").checked ? true : false;

    if (title == "" || author == "" || pages == "") {
        return alert("please fill in all data");
    } else {
        addBookToLibrary(title, author, pages, read);
        document.getElementById("book-form").reset();
        hideBookForm();
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
    console.log(deleteDivs);
    for (let i = 0; i < deleteDivs.length; i++) {
        deleteDivs[i].remove();
    }
    myLibrary.forEach((myLibrary) => {
        const card = document.createElement("div");
        card.classList.add("card");
        books.appendChild(card);
        for (let key in myLibrary) {
            console.log(`${key}: ${myLibrary[key]}`);
            const para = document.createElement("p");
            para.textContent = `${key}: ${myLibrary[key]}`;
            card.appendChild(para);
        }
    });
}

displayBooks();

// function Student() {}

// Student.prototype.sayName = function () {
//     console.log(`${this.name} is cool ${this.grade}`);
// };

// function EighthGrader(name) {
//     this.name = name;
//     this.grade = 8;
// }
// function NinthGrader(name) {
//  this.name = name;
//  this.grade = 9;
// }
// NinthGrader.prototype = Object.create(Student.prototype)
// EighthGrader.prototype = Object.create(Student.prototype);
// const peter = new NinthGrader("peter")
// const carl = new EighthGrader("carl");
// carl.sayName();
// peter.sayName()
// console.log(carl.grade); // 8
// console.log(peter.grade)
