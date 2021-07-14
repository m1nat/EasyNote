import { signIn } from '../../api/api-handlers';
import { setToken } from '../../shared/ls-services/localStorage.js';
import { routs } from '../../shared/constants/paths.js';


export const signInHandlers = () => {
  const signInForm = document.getElementById('form-sign-in')

  signInForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email-sign-in').value;
    const password = document.getElementById('password-sign-in').value;

    signIn(email, password)
    .then(response => {
      if (response) {
        const { idToken: token } = response.data
        setToken(token);
        window.location.href = routs.main
        console.log(response);
      }
    })

  })

};
