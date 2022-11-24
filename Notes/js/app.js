showNotes();

// if user adds a note, add it to local storage
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (e) {
    let addTitle = document.getElementById('addTitle');
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let myObj = {
        title: addTitle.value,
        text: addTxt.value
    }
    notesObj.push(myObj);

    // we have to make noteObj string because localStorage takes string
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt.value = '';
    addTitle.value = '';
    // console.log(notesObj);
    showNotes();
});

// Funtion to show notes
function showNotes() {
    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="noteCard card my-3 mx-2" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    <p class="card-text">${element.text}</p>
                    <button id="${index}" onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });
    let noteElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        noteElm.innerHTML = html;
    }
    else{
        noteElm.innerHTML = `Nothing to show.....!!!`
    }
}

// Function to delete notes
function deleteNote(index){
    // console.log('I am deleting. ', index);

    let notes = localStorage.getItem('notes');
    notesObj = JSON.parse(notes);//returns array
    notesObj.splice(index,1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}

// search functionality 
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    inputVal = search.value.toLowerCase();
    // console.log('Input Event Fired......!!!', inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        cardTxt = element.getElementsByTagName('p')[0].innerText;
        cardHeader = element.getElementsByTagName('h5')[0].innerText;
        // console.log(cardHeader);
        if(cardTxt.includes(inputVal) || cardHeader.includes(inputVal)){
            element.style.display = 'block';
        }
        else{
            element.style.display = 'none';
        }
    });
});