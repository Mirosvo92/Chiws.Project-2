'use strict';

const buttonSendForm = document.querySelector('.btn-send-form');

const inputName = document.querySelector('.input-name');
const inputPassword = document.querySelector('.input-password');
const togglePasswordText = document.querySelector('.eye-secret-svg');

const selectCountry = document.querySelector('.input-country');
const checkBoxAccept = document.querySelector('.checkbox-accept');

const spanNameError = document.getElementById('name-error');
const spanPasswordError = document.getElementById('password-error');
const spanCountryError = document.getElementById('country-error');

const addClassError = (input, span) => {
    input.classList.add('error');

    span.classList.add('active');
    buttonSendForm.classList.add('active');
};

const removeClassError = (input, span) => {
    input.classList.remove('error');
    span.classList.remove('active');
    buttonSendForm.classList.remove('active');
};

const checkName = (login) => {
    if (login.value === '') {
        addClassError(login, spanNameError);
    } else if (login.value.length >= 2) {
        removeClassError(login, spanNameError);
    }
};

const checkPassword = (password) => {
    if (password.value.length <= 6) {
        addClassError(password, spanPasswordError);
    } else if (password.value.length > 6) {
        removeClassError(password, spanPasswordError);
    }
};

const checkSelect = (select) => {
    let chosen = select.value;
    if (chosen === '') {
        addClassError(select, spanCountryError);
    } else {
        removeClassError(select, spanCountryError);
    }
};

const checkAcceptBox = (checkbox) => {
    if (checkbox.checked) {
        console.log('you accept');
    } else if (checkbox.checked === false) {
        console.log('you did not accept');
    }
};

// onsubmit
// событие change
// на кнопку довешивается атрибут disabled? если поля пустые
//

buttonSendForm.addEventListener('click', () => {
    checkName(inputName);
    checkPassword(inputPassword);
    checkSelect(selectCountry);
    checkAcceptBox(checkBoxAccept);
});

togglePasswordText.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }
});
