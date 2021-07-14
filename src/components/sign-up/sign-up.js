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
