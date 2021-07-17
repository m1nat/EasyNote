import { signUp } from '../../api/api-handlers.js';
import { hideErrorEmailSignUP, showErrorEmailSignUP } from '../../DOM-render/render-messege/error-messege.js';
import { routs } from '../../shared/constants/paths.js';
import { singUPEmailValidator } from '../../shared/validators/check-inputs.js';

export const signUpHandler = () => {
  const signUpForm = document.querySelector('.form-sign-up');
  const emailInput = document.getElementById('email-sign-up');
  const passwordInput = document.getElementById('password-sign-up');

  signUpForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;


    signUp(email, password)
    .then( response => {
      if (response) {
        window.location.href = routs.sign_in;
      }; 
    })

  })

  emailInput.oninput = () => {

    if (singUPEmailValidator(emailInput.value)){
      hideErrorEmailSignUP()
    } else { showErrorEmailSignUP() }

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
