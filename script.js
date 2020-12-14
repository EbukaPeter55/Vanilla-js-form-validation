const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm(){
    // Using Constraint API
    isValid = form.checkValidity();
// style main message for error
message.textContent = 'Please fill out all fields.';
message.style.color = 'red';
messageContainer.style.borderColor = 'red';
}

function processFormData(e){
    e.preventDefault();
// Validate form using constraint validation
validateForm();
}

//Event listener
form.addEventListener('submit', processFormData);
