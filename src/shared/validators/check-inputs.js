import { PASSWORD_STRENGTH, REGEXP } from './regexp.js';

const listItemPasswordWeak = document.querySelector('.weak-li');
const listItemPasswordModerate = document.querySelector('.moderate-li');
const listItemPasswordStrong = document.querySelector('.strong-li');
const listItemPasswordComlete = document.querySelector('.comlete-li');  
const passwordSignUpInput = document.getElementById('password-su');

export const singUPEmailValidator = emailinp => emailinp.match(REGEXP.EmailSingUP);
export const signUpPasswordValidatorMessege = password => password.match(REGEXP.SHOW_ERROR_MESSEGE_PASSWORD);
export const signUpUsernameValidator = username => username.match(REGEXP.USERNAME);
export const addNewBoards = name => name.match(REGEXP.NAME_THE_NEW_BOARD);

const lowerCaseCheck = password => REGEXP.LOWER_CASE.test(password);
const upperCaseCheck = password => REGEXP.UPPER_CASE.test(password);
const numberCaseCheck = password => REGEXP.NUMBERS.test(password);
const eightCharacterCaseCheck = password => REGEXP.EIGHT_CHARACTERS.test(password);

const passwordEvalWeak = () => {
  if(lowerCaseCheck(passwordSignUpInput.value)) {
    listItemPasswordWeak.className = 'li-green'
  }else {
    listItemPasswordWeak.className = 'weak-li'
  }
};

const passwordEvalModerate = () => {
  if(upperCaseCheck(passwordSignUpInput.value)) {
    listItemPasswordModerate.className = 'li-green'
  }else {
    listItemPasswordModerate.className = 'moderate-li'
  }
};

const passwordEvalStrong = () => {
  if(numberCaseCheck(passwordSignUpInput.value)) {
    listItemPasswordStrong.className = 'li-green'
  }else {
    listItemPasswordStrong.className = 'strong-li'
  }
};

const passwordEvalComlete = () => {
  if(eightCharacterCaseCheck(passwordSignUpInput.value)) {
    listItemPasswordComlete.classList.add('li-green')
  }else {
    listItemPasswordComlete.className = ('complete-li')
  }
};

export const confirmPasswordShowMessege = () => {
  const confirmPassword = document.querySelector('.confirm-password-messege');
  confirmPassword.style.display = 'block'
};

export const confirmPasswordHideMessege = () => {
  const confirmPassword = document.querySelector('.confirm-password-messege');
  confirmPassword.style.display = 'none'
};



export const passwordStrengthController = password => {
  const messegePassword = document.querySelector('.show-messege-password-strength');
  const highSequr = document.getElementById('high');
  const strLength = document.getElementById('lign-Str');

  let passwordStrength;

  passwordEvalModerate();
  passwordEvalWeak();
  passwordEvalStrong();
  passwordEvalComlete();

  const passwordStrengthNum =
    lowerCaseCheck(password) +
    upperCaseCheck(password) +
    numberCaseCheck(password) +
    eightCharacterCaseCheck(password);

  Object.keys(PASSWORD_STRENGTH).forEach(el => {
    if (PASSWORD_STRENGTH[el] === passwordStrengthNum) {
      passwordStrength = el;
    }
  });

  switch (passwordStrengthNum) {
    case 1:

      messegePassword.style.display = 'block'
      strLength.classList.add('red');
      strLength.classList.remove('orange');
      break;
    case 2:
      messegePassword.style.display = 'block';
      strLength.classList.add('orange');
      strLength.classList.remove('yellow');
      break;
    case 3:
      messegePassword.style.display = 'block'
      strLength.classList.add('yellow');
      strLength.classList.remove('green');
      break;
    case 4:
      messegePassword.style.display = 'block'
      strLength.classList.add('green');
      strLength.classList.remove('yellow');
      break;

    default:
      messegePassword.style.display = 'none';
      break;
  }
  
};
