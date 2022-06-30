const passwordField = document.querySelector('#password');
const confirmPasswordField = document.querySelector('#confirm-password');

function handlePasswordCheck(e) {
    if(passwordField.value === confirmPasswordField.value) {
        passwordField.style.borderColor = '#75ca2b';
        confirmPasswordField.style.borderColor = '#75ca2b';
        confirmPasswordField.nextSibling.remove();
    } else {
        passwordField.style.borderColor = 'red';
        confirmPasswordField.style.borderColor = 'red';

        // Check if error message already exists
        if(!confirmPasswordField.nextElementSibling) {
            let tempDiv = document.createElement('div');
            tempDiv.classList.add('error');
            tempDiv.innerText = 'Passwords do not match';
            confirmPasswordField.insertAdjacentElement('afterend', tempDiv);
        }
    }
}

passwordField.addEventListener('keyup', handlePasswordCheck);
confirmPasswordField.addEventListener('keyup', handlePasswordCheck);