import { PASSWORD_STRENGTH, REGEXP } from './regexp.js';

export const singUPEmailValidator = emailinp => emailinp.match(REGEXP.EmailSingUP);
export const signUpPasswordValidator = password => password.match(REGEXP.PasswordSignUP);

const lowerCaseCheck = password => REGEXP.LOWER_CASE.test(password);

const upperCaseCheck = password => REGEXP.UPPER_CASE.test(password);

const numberCaseCheck = password => REGEXP.NUMBERS.test(password);

const eightCharacterCaseCheck = password => REGEXP.EIGHT_CHARACTERS.test(password)



export const passwordStrengthController = password => {
  const messegePassword = document.querySelector('.show-messege-password-strength');
  const uppercaseMessege = document.getElementById('uppercase');
  const lowerMessege = document.getElementById('lowerCase');
  const numberMessege = document.getElementById('number');
  const highSequr = document.getElementById('high');
  const strLength = document.getElementById('lign-Str');

  let passwordStrength;

  const passwordStrengthNum =
    lowerCaseCheck(password) +
    upperCaseCheck(password) +
    numberCaseCheck(password) +
    eightCharacterCaseCheck(password);

  console.log(passwordStrengthNum);
  Object.keys(PASSWORD_STRENGTH).forEach(el => {
    if (PASSWORD_STRENGTH[el] === passwordStrengthNum) {
      passwordStrength = el;
    }
  });

  // passwordStrengthNum == 1? messegePassword.style.display = 'block' : messegePassword.style.display = 'none';
  // passwordStrengthNum == 2? messegePassword.style.display = 'block' : messegePassword.style.display = 'none';
  // passwordStrengthNum == 3? messegePassword.style.display = 'block' : messegePassword.style.display = 'none';
  // passwordStrengthNum == 4? messegePassword.style.display = 'block' : messegePassword.style.display = 'none';

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
      break;

    default:
      messegePassword.style.display = 'none';
      highSequr.classList.remove('color-stength');
      break;
  }


};
