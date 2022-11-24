// array of objects
const data = [
    {
        "name": 'Rohan Das',
        "age": 18,
        "city": 'Dhaka',
        "language": 'python',
        "framework": 'Django',
        "image": 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        "name": 'Muhammad',
        "age": 28,
        "city": 'Mirpur',
        "language": 'php',
        "framework": 'laravel',
        "image": 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        "name": 'Ricky Ponting',
        "age": 16,
        "city": 'Muhammadpur',
        "language": 'python',
        "framework": 'flask',
        "image": 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        "name": 'Harry Potter',
        "age": 22,
        "city": 'Syamoli',
        "language": 'javascript',
        "framework": 'angular',
        "image": 'https://randomuser.me/api/portraits/men/78.jpg'
    },
    {
        "name": 'John Banson',
        "age": 24,
        "city": 'New York',
        "language": 'css',
        "framework": 'bootstrap',
        "image": 'https://randomuser.me/api/portraits/men/79.jpg'
    }
];


// CV Iterator
function cvIterator(profiles){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex<profiles.length ?
            {value: profiles[nextIndex++], done: false} : {done: true}
        }
    };
}

const candidates =cvIterator(data);
nextCV();

// Button listener for next button
let next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV(){
    currentCandidate = candidates.next().value;

    let image = document.getElementById('image');
    let profile = document.getElementById('profile');


    if(currentCandidate != undefined){
        image.innerHTML = `<img src="${currentCandidate.image}" class="w-50" alt="">`;
        profile.innerHTML = `<ul class="list-group">
                            <li class="list-group-item">Name: ${currentCandidate.name}</li>
                            <li class="list-group-item">Age: ${currentCandidate.age}</li>
                            <li class="list-group-item">City: ${currentCandidate.city}</li>
                            <li class="list-group-item">Programming Language: ${currentCandidate.language}</li>
                            <li class="list-group-item">Framework: ${currentCandidate.framework}</li>
                        </ul>`;
    }
    else{
        alert('Candidates Applications are end');
        window.location.reload();

    }
    
}

// console.log(candidates.next().value);
// console.log(candidates.next().value);
