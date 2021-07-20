export const REGEXP = {
  EmailSingUP: /^(([^<>\-()[\]\\._=+?,;:\s@!"^%$#& а-яА-Я]+((\.|\-|\_)[^<>\-()[\]\\.=+?,;:\s@!"^%$#& а-яА-Я]+)*)|(".+"))@((([a-zA-Z 0-9]{1,60}|([a-zA-Z 0-9]{1,30})\_([a-zA-Z 0-9]){1,30}|([a-zA-Z 0-9]{1,30})\-([a-zA-Z 0-9]){1,30}))\.[a-zA-Z]{2,64})$/i,
  UPPER_CASE: /(?=.*[A-Z])/g,
  LOWER_CASE: /(?=.*[a-z])/g,
  NUMBERS: /(?=.*[0-9])/,
  EIGHT_CHARACTERS: /(?=.*[!@#$%^&*])/,
  SHOW_ERROR_MESSEGE_PASSWORD: /^([a-zA-Z 0-9 @!^%$#&]{6,20})$/g,
  USERNAME: /^[^<>\-()[\]\\._=+?,;:\s@!"^%$#& а-яА-Я]+$/
};

export const PASSWORD_STRENGTH = {
  Weak: 1,
  Moderate: 2,
  Strong: 3,
  ['Very Strong']: 4
};
