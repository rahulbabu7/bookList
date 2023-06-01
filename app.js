class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class Ui {
  addBookToList(book) {
    const list = document.getElementById("book-list"); //table body
    //create tr element
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href= "#" class= "delete">X</a></td>`;

    list.appendChild(row);
  }
  showAlert(message, className) {
    //create a div
    const div = document.createElement("div");
    //add class
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".container");
    //get form
    const form = document.querySelector("#book_form");
    //insert alert
    container.insertBefore(div, form);

    //timeout after  sec
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//local storage

class Store {
  getBook(){

  }
  displayBook(){

  }
  addBook(){
    
  }
}

//event listeners

document.getElementById('book_form').addEventListener("submit", (e) => {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  const book = new Book(title,author,isbn);
  //instantiate UI
  const ui = new Ui();

  //add book to list
  //ui.addBookToList(book);
  
 //validate
 if(title=== "" || author ===""||isbn ===""){
  //error alert
  ui.showAlert("please fill all the fields...")
 }else{
   ui.addBookToList(book)
 


 // showing success
 ui.showAlert("Book Added Successfully...")

 //clear fields 
  ui.clearFields();


  e.preventDefault();

 }
});

//event listner for deleting book


document.getElementById('book-list').addEventListener('click',(e)=>{

  const ui = new Ui();

  //delete book
  ui.deleteBook(e.target);

  //show msg
  ui.showAlert("Book Deleted");

  e.preventDefault();
})


