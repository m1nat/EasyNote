export const REGEXP = {
  EmailSingUP: /^(([^<>\-()[\]\\._=+?,;:\s@!"^%$#& а-яА-Я]+((\.|\-|\_)[^<>\-()[\]\\.=+?,;:\s@!"^%$#& а-яА-Я]+)*)|(".+"))@((([a-zA-Z 0-9]{1,6}|([a-zA-Z 0-9]{1,10})\_([a-zA-Z 0-9]){1,5}|([a-zA-Z 0-9]{1,10})\-([a-zA-Z 0-9]){1,5}))\.[a-zA-Z]{2,64})$/i,
  UPPER_CASE: /(?=.*[A-Z])/g,
  LOWER_CASE: /(?=.*[a-z])/g,
  NUMBERS: /(?=.*[0-9])/,
  EIGHT_CHARACTERS: /(?=.*[!@#$%^&*])/,
  SHOW_ERROR_MESSEGE_PASSWORD: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}|[0-9]{6,20}|[a-zA-Z]{6,20}/g,
  USERNAME: /[a-zA-Z -_. 0-9]{6,20}/i
};

export const PASSWORD_STRENGTH = {
  Weak: 1,
  Moderate: 2,
  Strong: 3,
  ['Very Strong']: 4
};
