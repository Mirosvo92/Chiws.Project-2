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

const formBox = document.querySelector('.form-box');

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

const checkName = (login, spanError) => {
    let nameTrim = login.value.trim();

    if (nameTrim === '') {
        addClassError(login, spanError);
    } else if (nameTrim.length >= 3) {
        removeClassError(login, spanError);
    }
};

const checkPassword = (password, spanError) => {
    let passwordTrim = password.value.trim();

    if (passwordTrim.length <= 6) {
        addClassError(password, spanError);
    } else if (passwordTrim.length > 6) {
        removeClassError(password, spanError);
    }
};

const checkSelect = (select, spanError) => {
    let chosen = select.value;
    if (chosen === '') {
        addClassError(select, spanError);
    } else {
        removeClassError(select, spanError);
    }
};

buttonSendForm.addEventListener('click', () => {
    checkName(inputName, spanNameError);
    checkPassword(inputPassword, spanPasswordError);
    checkSelect(selectCountry, spanCountryError);
});

checkBoxAccept.addEventListener('click', () => {
    buttonSendForm.disabled = !checkBoxAccept.checked;
});

formBox.addEventListener('change', () => {
    if (checkBoxAccept.checked) {
        checkName(inputName, spanNameError);
        checkPassword(inputPassword, spanPasswordError);
        checkSelect(selectCountry, spanCountryError);
    }
});

togglePasswordText.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
        inputPassword.type = 'text';
    } else {
        inputPassword.type = 'password';
    }
});

function validationLogin() {
    this.value = this.value.replace(/\s+/g, ' ');
}

function validationPassword() {
    this.value = this.value.trim().replace(/\s+/g, '');
}

inputName.addEventListener('input', validationLogin);
inputPassword.addEventListener('input', validationPassword);
