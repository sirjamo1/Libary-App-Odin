let myLibrary = [];
//replacing Object constructor with class constructor
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read ? "Yes" : "Not yet";
        this.id = idGenerator();
    }
}
//Object constructor
// function Book(title, author, pages, read) {
// this.title = title;
// this.author = author;
// this.pages = pages;
// this.read = read;
// this.id = idGenerator();
// }
function idGenerator() {
    return Math.floor(Math.random() * 10000000);
}
function addBookToLibrary(title, author, pages, read) {
    console.log(title, pages);
    let newBook = new Book(title, author, pages, read);
    console.log(newBook);
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

function deleteBook(selectedId) {
    const allBooks = document.querySelectorAll(".card");
    console.log(myLibrary);
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i].id, i);
        if (selectedId === myLibrary[i].id) myLibrary.splice(i, 1);
    }
    displayBooks();
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
        const deleteDiv = document.createElement("div");
        deleteDiv.classList.add("book-delete-div");
        card.appendChild(deleteDiv);
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("book-delete-btn");
        deleteBtn.textContent = "X";
        deleteBtn.onclick = function () {
            deleteBook(myLibrary.id);
        };
        deleteDiv.appendChild(deleteBtn);
        for (let key in myLibrary) {
            const para = document.createElement("p");
            if (key === "read") {
                const readDiv = document.createElement("div");
                readDiv.classList.add("read-div");
                card.appendChild(readDiv);
                para.textContent = `${key}: ${myLibrary[key]}`;
                readDiv.appendChild(para);
                const readBtn = document.createElement("button");
                readBtn.classList.add("read-btn");
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

//THE BELOW WAS PART OF THE ODIN PROJECT THEORY
// const Player = (name, level) => {
//     let health = level * 2;
//     const getLevel = () => level;
//     const getName = () => name;
//     const getHealth = () => health
//     const die = () => {
//         console.log(`${name} died`)
//     };
//     const damage = (x) => {
//         health -= x;
//         if (health <= 0) {
//             die();
//         }
//     };
//     const attack = (enemy) => {
//         if (level < enemy.getLevel()) {
//             damage(1);
//             console.log(`${enemy.getName()} has damaged ${name}`);
//         }
//         if (level >= enemy.getLevel()) {
//             enemy.damage(1);
//             console.log(`${name} has damaged ${enemy.getName()}`);
//         }
//     };
//     return { attack, damage, getLevel, getName, getHealth};
// };

// const jimmie = Player("jim", 10);
// const badGuy = Player("jeff", 5);
// //console.log(badGuy.health);
// //console.log(jimmie.attack(badGuy));
// //console.log(badGuy.getHealth());

// const Person = (name) => {
//   const sayName = () => console.log(`my name is ${name}`);
//   return {sayName};
// }

// // const Nerd = (name) => {
// //   // simply create a person and pull out the sayName function with destructuring assignment syntax!
// //   const {sayName} = Person(name);
// //   const doSomethingNerdy = () => console.log('nerd stuff');
// //   return {sayName, doSomethingNerdy};
// // }
// const Nerd = (name) => {
//     const prototype = Person(name);
//     const doSomethingNerdy = () => console.log("nerd stuff");
//     return Object.assign({}, prototype, { doSomethingNerdy });
// };

// const jeff = Nerd('jeff');

// jeff.sayName(); //my name is jeff
// jeff.doSomethingNerdy(); // nerd stuff
