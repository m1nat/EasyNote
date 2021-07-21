import { signUp } from '../../api/api-handlers.js';
import {
  hideErrorEmailSignUP,
  hideErrorMessegePasswordSignUP,
  hideErrorMessegeUsername,
  redInputBorder,
  showErrorEmailSignUP,
  showErrorMessegePasswordSignUP,
  showErrorMessegeUsername
} from '../../DOM-render/render-messege/error-messege.js';
import { routs } from '../../shared/constants/paths.js';
import {
  confirmPasswordHideMessege,
  confirmPasswordShowMessege,
  passwordStrengthController,
  showMessegeErrorPassword,
  signUpPasswordValidator,
  signUpPasswordValidatorMessege,
  signUpUsernameValidator,
  singUPEmailValidator
} from '../../shared/validators/check-inputs.js';

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
  const signUpForm = document.querySelector('.form-sign-up');
  const emailInput = document.getElementById('email-sign-up');
  const passwordInput = document.getElementById('password-su');
  const btnSignUp = document.getElementById('btn-sign-up');
  const usernameInp = document.getElementById('username');
  const secondPasswordInput = document.getElementById('password-confirm');

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
    const checkValid = () => {
      const isFormValid = Object.values(formCheck).every( value => value.isValid);
      isFormValid ? btnSignUp.removeAttribute('disabled') : btnSignUp.setAttribute('disabled', true);
      console.log(formCheck);
    };
    
  emailInput.oninput = () => {

    if (singUPEmailValidator(document.getElementById('email-sign-up').value)) {
      hideErrorEmailSignUP();
      formCheck.email.isValid = true
    } else {
      showErrorEmailSignUP();
      formCheck.email.isValid = false
    }
    checkValid()
  };

  passwordInput.oninput = () => {
    if (signUpPasswordValidator(document.getElementById('password-su').value)) {
      passwordStrengthController(document.getElementById('password-su').value);
    }
    if (signUpPasswordValidatorMessege(document.getElementById('password-su').value)) {
      hideErrorMessegePasswordSignUP()
      btnSignUp.removeAttribute('disabled');
      formCheck.password_1.isValid = true
    } else {
      showErrorMessegePasswordSignUP()
      formCheck.password_1.isValid = false
    };
    checkValid();
  };

  usernameInp.oninput = () => {
    if (signUpUsernameValidator(document.getElementById('username').value)) {
      hideErrorMessegeUsername();
      formCheck.username.isValid = true
    } else {
      showErrorMessegeUsername();
      formCheck.username.isValid = false
    };
    checkValid();
  };

  
  secondPasswordInput.oninput = () => {
    if (formCheck.password_1.isValid && (passwordInput.value === secondPasswordInput.value)) {
      formCheck.password_2.isValid = true;
      confirmPasswordHideMessege();
    } else {
      formCheck.password_2.isValid = false;
      confirmPasswordShowMessege();
    }
    checkValid();
  }
  secondPasswordInput.onblur = () => {
    passwordInput.value !== secondPasswordInput.value ? confirmPasswordShowMessege() : confirmPasswordHideMessege();
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
