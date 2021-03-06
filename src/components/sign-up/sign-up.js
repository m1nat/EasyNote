import { signUp } from '../../api/api-handlers.js';
import { routs } from '../../shared/constants/paths.js';
import {
  confirmPasswordHideMessege,
  confirmPasswordShowMessege,
  passwordStrengthController,
  signUpPasswordValidatorMessege,
  signUpUsernameValidator,
  singUPEmailValidator
} from '../../shared/validators/check-inputs.js';

const signUpForm = document.querySelector('.form-sign-up');
const emailInput = document.getElementById('email-sign-up');
const passwordInput = document.getElementById('password-su');
const btnSignUp = document.getElementById('btn-sign-up');
const usernameInp = document.querySelector('.username');
const secondPasswordInput = document.getElementById('password-confirm');
const questionmMarkPassword = document.querySelector('.question-mark-password');
const questionmMarkUsername = document.querySelector('.question-mark-username');
const messegeErrorEmailSignup = document.querySelector('.messege-error-email-signup');
const incorrectlyPassword = document.querySelector('.incorrectly-password');
const secondEye = document.querySelector('.second-eye');
const firstEye = document.querySelector('.first-eye');



const formCheck = {
  username: {
    isValid: false
  },
  email: {
    isValid: false
  },
  password_1: {
    isValid: false
  },
  password_2: {
    isValid: false
  }
};

export const signUpHandler = () => {

  btnSignUp.setAttribute('disabled', true);

  signUpForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email-sign-up').value;
    const password = document.getElementById('password-su').value;

    const user = {
      userName: usernameInp.value,
      email: email,
      password: password
    }

    signUp(user)
      .then(response => {

        if (response) {
          window.location.href = routs.sign_in;
        };

      })
  });

  const checkValid = () => {
    const isFormValid = Object.values(formCheck).every(value => value.isValid);
    isFormValid ? btnSignUp.removeAttribute('disabled') : btnSignUp.setAttribute('disabled', true);
  };

  emailInput.oninput = () => {

    if (singUPEmailValidator(document.getElementById('email-sign-up').value)) {
      formCheck.email.isValid = true;
    } else {
      formCheck.email.isValid = false;
    }

    checkValid();

  };

  emailInput.onblur = () => {
    emailInput.value === '' || singUPEmailValidator(document.getElementById('email-sign-up').value) ? 
    messegeErrorEmailSignup.style.display = 'none' : 
    messegeErrorEmailSignup.style.display = 'block';
    emailInput.value === '' || singUPEmailValidator(document.getElementById('email-sign-up').value) ? 
    emailInput.className ='reg' : 
    emailInput.className ='border-red-email';
  };

  passwordInput.oninput = () => {

    if (!('')) {
      passwordStrengthController(document.getElementById('password-su').value);
    };
    
    if (signUpPasswordValidatorMessege(document.getElementById('password-su').value)) {
      formCheck.password_1.isValid = true;
    } else {
      formCheck.password_1.isValid = false;
    }

    passwordInput.value === '' || signUpPasswordValidatorMessege(document.getElementById('password-su').value) ? 
    questionmMarkPassword.style.display = 'none' : 
    questionmMarkPassword.style.display = 'block';

    checkValid();

  };

  passwordInput.onblur = () => {
    passwordInput.value === '' || signUpPasswordValidatorMessege(document.getElementById('password-su').value) ? 
    incorrectlyPassword.style.display = 'none' :
    incorrectlyPassword.style.display = 'block';
    passwordInput.value === '' || signUpPasswordValidatorMessege(document.getElementById('password-su').value) ? 
    passwordInput.className = 'first-inp' : 
    passwordInput.className = 'first-inp-red'; 
    passwordInput.value === '' || signUpPasswordValidatorMessege(document.getElementById('password-su').value) ? 
    firstEye.className = 'first-eye' : 
    firstEye.className = 'first-eye-red';
  };

  usernameInp.oninput = () => {

    if (signUpUsernameValidator(document.getElementById('username').value)) {
      formCheck.username.isValid = true;
    } else {
      formCheck.username.isValid = false;
      questionmMarkUsername.style.display = 'block';
    };

    checkValid();

  };

  usernameInp.onblur = () => {
    usernameInp.value === '' || signUpUsernameValidator(document.getElementById('username').value) ? 
    questionmMarkUsername.style.display = 'none' : 
    questionmMarkUsername.style.display = 'block';
    usernameInp.value === '' || signUpUsernameValidator(document.getElementById('username').value) ?
    usernameInp.className = 'username' : 
    usernameInp.className = 'border-red';
  };

  secondPasswordInput.oninput = () => {

    if (formCheck.password_1.isValid && (passwordInput.value === secondPasswordInput.value)) {
      formCheck.password_2.isValid = true;
    } else {
      formCheck.password_2.isValid = false;
    };

    checkValid();

  };

  secondPasswordInput.onblur = () => {
    secondPasswordInput.value === '' || formCheck.password_1.isValid && (passwordInput.value === secondPasswordInput.value) ? 
    confirmPasswordHideMessege() : 
    confirmPasswordShowMessege();
    secondPasswordInput.value === '' || formCheck.password_1.isValid && (passwordInput.value === secondPasswordInput.value) ? 
    secondPasswordInput.className = 'first-inp' : 
    secondPasswordInput.className = 'first-inp-red';
    secondPasswordInput.value === '' || formCheck.password_1.isValid && (passwordInput.value === secondPasswordInput.value) ? 
    secondEye.className = 'second-eye' : 
    secondEye.className = 'first-eye-red';
  }

};

export const showPasswordSignUP = () => {

  const firstEye = document.querySelector('.first-eye');
  const password = document.getElementById('password-su');
  const secondEye = document.querySelector('.second-eye');
  const passwordConfirm = document.getElementById('password-confirm')

  firstEye.onclick = () => {

    if (password.type == 'password') {
      password.type = 'text';
    } else {
      password.type = 'password';
    };

  };

  secondEye.onclick = () => {

    if (passwordConfirm.type == 'password') {
      passwordConfirm.type = 'text';
    } else {
      passwordConfirm.type = 'password';
    };
    
  };

};
