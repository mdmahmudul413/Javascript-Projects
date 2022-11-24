let validUsername = false;
let validEmail = false;
let validPhone = false;
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const submit = document.getElementById('submit');

let success = document.getElementById('success');
let failure = document.getElementById('failure');
success.classList.add('d-none');
failure.classList.add('d-none');


username.addEventListener('blur', () => {
    // validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){5,10}$/;
    let str = username.value;
    console.log(`Regular Expression: "${regex}"`);
    console.log(`String: "${str}"`);
    if (regex.test(str)) {
        console.log('Your name is valid');
        username.classList.remove('is-invalid');
        validUsername = true;
    }
    else {
        console.log('Your name is not valid');
        username.classList.add('is-invalid');
        validUsername = false;
    }
});

email.addEventListener('blur', () => {
    // validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(`Regular Expression: "${regex}"`);
    console.log(`String: "${str}"`);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
});

phone.addEventListener('blur', () => {
    // validate phone here
    let regex = /^[0-9]{11}$/;
    let str = phone.value;
    console.log(`Regular Expression: "${regex}"`);
    console.log(`String: "${str}"`);
    if (regex.test(str)) {
        console.log('Your phone number is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else {
        console.log('Your phone number is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
});

submit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit your form here using xmlHttpRequest() or fetch() api
    

    console.log(`Validation of Username: ${validUsername}`);
    console.log(`Validation of Email: ${validEmail}`);
    console.log(`Validation of Phone ${validPhone}`);

    if(validUsername && validPhone && validEmail){
        success.classList.remove('d-none');
        failure.classList.add('d-none');
        console.log("Everything is valid. Submitting the form");
        success.classList.add('show');
        failure.classList.remove('show');
    }
    else{
        success.classList.add('d-none');
        failure.classList.remove('d-none');

        console.log("Please input valid details.");
        
        success.classList.remove('show');
        failure.classList.add('show');
    }


});