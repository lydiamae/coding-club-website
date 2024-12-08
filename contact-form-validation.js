const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const msg = document.getElementById('message');
const radioY = document.getElementById('radio-y');
const radioN = document.getElementById('radio-n');
const submit = document.getElementById('submit');

// create patterns to test against form inputs
const match = {
    name: /[a-zA-Z]/,
    email: /[a-zA-Z0-9_\-\.]{2,}[@][a-zA-Z0-9_\-]{2,}[\.][a-zA-Z0-9_\-\.]{2,}/
}

submit.addEventListener('click', event => {
    // log that the submit button was clicked
    console.log('Submit event occured.');

    // create an empty list to store all current form input errors
    let errList = [];

    // log all current form input errors, if there are any
    console.log(populateErrList(errList));
    
    // if there is at least one error, display all current errors
    if (errList.length > 0) {
        event.preventDefault();
        alert('Form could not be submitted.' +
        '\n Please make all of the following changes and re-submit: \n' + errList);
    }

    // if there are not any errors present, submit the form
    else {
        // log that there were no errors with the form
        console.log('Successful submit event occured.');

        // if a response is required, display a message
        if (radioY.checked) {
            alert('Form succesfully submitted! A response will be sent to to the e-mail address you entered.');
        }

        // if a response is not required, display a message
        else {
            alert('Form succesfully submitted! Thank you for your message.');
        }
    }
})

// returns a list of all current form input errors
function populateErrList(errList) {

    // if name field is empty, add to list of errors to be displayed
    if (name.value.trim() === '') {
        errList.push('\n Enter a name');
    }

    // if email field is empty, add to list of errors to be displayed
    if (email.value.trim() === '') {
        errList.push('\n Enter an e-mail address');
    }

    // if email field is not empty but input is not valid, add to list of errors to be displayed
    if (!match.email.test(email.value)) {
        errList.push('\n Enter a valid e-mail address')
    }

    if ((msg.value.trim() === '') || (msg.value.length < 4) || (msg.value.length > 1000)) {
        errList.push('\n Enter a message that is between 4 and 1000 characters');
    }

    // if a selection has not been made, add to list of errors to be displayed
    if (!(radioY.checked || radioN.checked)) {
        errList.push('\n Select whether you require a response');
    }

    // return list of all current errors
    return errList;
}