import { signUp } from '../../api/api-handlers.js';
import { hideErrorEmailSignUP, hideErrorMessegePasswordSignUP, showErrorEmailSignUP, showErrorMessegePasswordSignUP } from '../../DOM-render/render-messege/error-messege.js';
import { routs } from '../../shared/constants/paths.js';
import { passwordStrengthController, showMessegeErrorPassword, signUpPasswordValidator, signUpPasswordValidatorMessege, singUPEmailValidator } from '../../shared/validators/check-inputs.js';

export const signUpHandler = () => {
  const signUpForm = document.querySelector('.form-sign-up');
  const emailInput = document.getElementById('email-sign-up');
  const passwordInput = document.getElementById('password-su');
  const btnSignUp = document.getElementById('btn-sign-up');

  btnSignUp.setAttribute('disabled', true);

  signUpForm.addEventListener('submit', event => {
    event.preventDefault();

    const email = document.getElementById('email-sign-up').value;
    const password = document.getElementById('password-su').value;


    signUp(email, password)
      .then(response => {
        if (response) {
          window.location.href = routs.sign_in;
        }
      })

  });

  emailInput.oninput = () => {

    if (singUPEmailValidator(document.getElementById('email-sign-up').value)) {
      hideErrorEmailSignUP()
      btnSignUp.removeAttribute('disabled')
    } else {
      showErrorEmailSignUP()
      btnSignUp.setAttribute('disabled', true);
    }

  };

  passwordInput.oninput = () => {
    if (signUpPasswordValidator(document.getElementById('password-su').value)) {
      passwordStrengthController(document.getElementById('password-su').value);
    }
    if (signUpPasswordValidatorMessege(document.getElementById('password-su').value)) {
      hideErrorMessegePasswordSignUP()
      btnSignUp.removeAttribute('disabled')
    } else {
      showErrorMessegePasswordSignUP()
      btnSignUp.setAttribute('disabled', true);
    }
  };

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
