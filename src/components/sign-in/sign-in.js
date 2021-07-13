import { signIn } from '../../api/api-handlers';


export const signInHandlers = () => {
  const signInForm = document.getElementById('form-sign-in')

  signInForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email-sign-in').value;
    const password = document.getElementById('password-sign-in').value;

    signIn(email, password)
  })
};