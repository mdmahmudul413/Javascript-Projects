class Book{
    constructor (name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}

class Display{
    // Add methods to display class
    add(book) {
        // console.log('Adding to UI');
        let tableBody = document.getElementById('tableBody');
        let uiString = `
            <tr>
                <td>${book.name}</td>
                <td>${book.author}</td>
                <td>${book.type}</td>
            </tr>
        `;
        tableBody.innerHTML += uiString;
    }

    // to reset the form field
    clear() {
        let libraryForm = document.getElementById('libraryForm');
        // to reset the form field
        libraryForm.reset();

    }

    // to validate the form field data
    validate(book) {
        if (book.name.legth < 2 || book.author.length < 2) {
            return false;
        }
        else {
            return true;
        }

    }

    // show alert functionality
    show(type, message) {
        let alertMessage = document.getElementById('message');
        alertMessage.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            <strong>Message:</strong> ${message}.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
        `;
        setTimeout(() => {
            alertMessage.innerHTML = '';
        }, 3000);
    }
}

// Add submit event listener to form name libraryForm
let libraryForm = document.getElementById('libraryForm');
// console.log(libraryForm);

// listening submit event from 'form' element
libraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {
    console.log('From Submitted');

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }

    let book = new Book(name, author, type);
    console.log(book);

    // to display the book entrys in the dom
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show('success', 'Your book has been successfully added!.');
    }
    else {
        // show error to the user
        display.show('danger', 'Sorry! You cant add this book.');
    }

    // the default behaviour of submitting a form is to reload the page. But we can bypass the dafault behavior to add this line "e.preventDefault()"
    e.preventDefault();
}