import { signUp } from '../../api/api-handlers.js';
import { routs } from '../../shared/constants/paths.js';

export const signUpHandler = () => {
  const signUpForm = document.querySelector('.form-sign-up');

  signUpForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email-sign-up').value;
    const password = document.getElementById('password-sign-up').value;

    signUp(email, password)
    .then( response => {
      if (response) {
        window.location.href = routs.sign_in;
      } 
    })

  })

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
