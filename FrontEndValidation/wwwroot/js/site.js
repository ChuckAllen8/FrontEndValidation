// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function ErrorCheck() {
    let result = true;
    let audio = document.getElementById('audio');

    //check first name
    let el = document.getElementById('FirstName');
    let el_error = document.getElementById('FirstName_Error');
    if (!(el.value.match(/[A-Za-z\-\']{2,}/))) {
        result = false;
        el.style.borderColor = '#FF0000';
        el_error.hidden = false;
    }
    else {
        el.style.borderColor = '#00FF00';
        el_error.hidden = true;
    }

    //check last name
    el = document.getElementById('LastName');
    el_error = document.getElementById('LastName_Error');
    if (!(el.value.match(/[A-Za-z\-\']{2,}/))) {
        result = false;
        el.style.borderColor = '#FF0000';
        el_error.hidden = false;
    }
    else {
        el.style.borderColor = '#00FF00';
        el_error.hidden = true;
    }

    //check email
    el = document.getElementById('Email');
    el_error = document.getElementById('Email_Error');
    if (!(el.value.match(/(.){2,}@(.){2,}\.(.){2,}/))) {
        result = false;
        el.style.borderColor = '#FF0000';
        el_error.hidden = false;
    }
    else {
        el.style.borderColor = '#00FF00';
        el_error.hidden = true;
    }

    //check password
    el = document.getElementById('Password');
    el_error = document.getElementById('Password_Error');
    if (!(el.value.match(/((?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@#!$%^&*~=+\-\\/>,])).{8,}/))) {
        result = false;
        el.style.borderColor = '#FF0000';
        el_error.hidden = false;
    }
    else {
        el.style.borderColor = '#00FF00';
        el_error.hidden = true;
    }

    //check password matches confirm
    el = document.getElementById('ConfirmPassword');
    el_error = document.getElementById('ConfirmPassword_Error');
    if (!(el.value === document.getElementById('Password').value)) {
        result = false;
        el.style.borderColor = '#FF0000';
        el_error.hidden = false;
    }
    else {
        el.style.borderColor = '#00FF00';
        el_error.hidden = true;
    }

    if (result == false) {
        audio.play();
    }

    return result;
}