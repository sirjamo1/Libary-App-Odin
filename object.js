let myLibary = [];
//Object contructor
function Book(title, author, pages, read) {
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;

}

function addBookToLibary(title, author, pages, read) {
   let newBook = new Book(title, author, pages, read)
 myLibary.push(newBook)
 //console.log(newBook)

}


function displayBooks() {
   const books = document.querySelector(".books")
   myLibary.forEach(myLibary => {
      const card = document.createElement("div");
      card.classList.add("card");
      books.appendChild(card);
      for (let key in myLibary) {
         console.log(`${key}: ${myLibary[key]}`);
         const para = document.createElement("p");
         para.textContent = (`${key}: ${myLibary[key]}`)
         card.appendChild(para)
      }
   })
}

const theHobbit = addBookToLibary("The Hobbit", "J.R.R. Tolkien", 289, false);
const theHobbit2 = addBookToLibary(
    "The Hobbit 2",
    "J.R.R. Tolkien",
    244,
    false
);
const theHobbit3 = addBookToLibary("The Hobbit", "J.R.R. Tolkien", 289, false);
const theHobbit4 = addBookToLibary(
    "The Hobbit 2",
    "J.R.R. Tolkien",
    244,
    false
);
const theHobbit5 = addBookToLibary("The Hobbit", "J.R.R. Tolkien", 289, false);
const theHobbit6 = addBookToLibary(
    "The Hobbit 2",
    "J.R.R. Tolkien",
    244,
    false
);
displayBooks();
// document.getElementById("books").innerHTML = myLibary[0].title









































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
